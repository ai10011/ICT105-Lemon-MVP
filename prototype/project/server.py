import http.server
import socketserver
import json
import os
import time
import base64
import re

PORT = 3000
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(PROJECT_DIR, 'data', 'users.json')
RECORD_DATA_FILE = os.path.join(PROJECT_DIR, 'data', 'record-data.json')
UPLOADS_DIR = os.path.join(PROJECT_DIR, 'data', 'uploads')

os.makedirs(UPLOADS_DIR, exist_ok=True)

class RequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PROJECT_DIR, **kwargs)

    def do_GET(self):
        if self.path.startswith('/prototype/project/'):
            self.path = self.path.replace('/prototype/project/', '/')
        return super().do_GET()

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length).decode('utf-8')
        
        if self.path == '/api/records':
            try:
                new_record = json.loads(body)
                photo_data = new_record.get('photoData')
                if photo_data:
                    try:
                        matches = re.match(r'^data:(.+);base64,(.+)$', photo_data)
                        ext = '.jpg'
                        if matches:
                            mime, b64_str = matches.group(1), matches.group(2)
                            img_bytes = base64.b64decode(b64_str)
                            if 'png' in mime: ext = '.png'
                            elif 'gif' in mime: ext = '.gif'
                            elif 'webp' in mime: ext = '.webp'
                        else:
                            img_bytes = base64.b64decode(photo_data)
                        
                        raw_name = os.path.splitext(new_record.get('photoName', 'photo'))[0]
                        safe_name = re.sub(r'[^a-zA-Z0-9_-]', '_', raw_name)
                        file_name = f"{int(time.time() * 1000)}_{safe_name}{ext}"
                        file_path = os.path.join(UPLOADS_DIR, file_name)
                        with open(file_path, 'wb') as f:
                            f.write(img_bytes)
                        new_record['photoPath'] = f"data/uploads/{file_name}"
                        new_record.pop('photoData', None)
                    except Exception as img_err:
                        print('Error saving image:', img_err)
                
                records = []
                if os.path.exists(RECORD_DATA_FILE):
                    with open(RECORD_DATA_FILE, 'r', encoding='utf-8') as f:
                        content = f.read().strip()
                        if content:
                            records = json.loads(content)
                records.append(new_record)
                with open(RECORD_DATA_FILE, 'w', encoding='utf-8') as f:
                    json.dump(records, f, indent=2)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'success': True, 'records': records}).encode('utf-8'))
            except Exception as err:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(err)}).encode('utf-8'))
            return

        if self.path == '/api/signup':
            try:
                new_user = json.loads(body)
                users = []
                if os.path.exists(DATA_FILE):
                    with open(DATA_FILE, 'r', encoding='utf-8') as f:
                        content = f.read().strip()
                        if content:
                            users = json.loads(content)
                users.append(new_user)
                with open(DATA_FILE, 'w', encoding='utf-8') as f:
                    json.dump(users, f, indent=2)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'success': True, 'users': users}).encode('utf-8'))
            except Exception as err:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(err)}).encode('utf-8'))
            return

        if self.path == '/api/users/update':
            try:
                updated_user = json.loads(body)
                users = []
                if os.path.exists(DATA_FILE):
                    with open(DATA_FILE, 'r', encoding='utf-8') as f:
                        content = f.read().strip()
                        if content:
                            users = json.loads(content)
                target_idx = -1
                for idx, u in enumerate(users):
                    if (updated_user.get('id') and str(u.get('id')) == str(updated_user.get('id'))) or \
                       (updated_user.get('oldEmail') and u.get('email') == updated_user.get('oldEmail')) or \
                       (updated_user.get('email') and u.get('email') == updated_user.get('email')):
                        target_idx = idx
                        break
                if target_idx != -1:
                    if updated_user.get('full_name'):
                        users[target_idx]['full_name'] = updated_user.get('full_name')
                    if updated_user.get('email'):
                        users[target_idx]['email'] = updated_user.get('email')
                elif updated_user.get('id') or updated_user.get('email'):
                    users.append({
                        'id': updated_user.get('id') or f"usr_{int(time.time()*1000)}",
                        'full_name': updated_user.get('full_name', ''),
                        'email': updated_user.get('email', ''),
                        'created_at': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
                    })
                with open(DATA_FILE, 'w', encoding='utf-8') as f:
                    json.dump(users, f, indent=2)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'success': True, 'users': users}).encode('utf-8'))
            except Exception as err:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(err)}).encode('utf-8'))
            return

    def do_DELETE(self):
        if self.path.startswith('/api/records'):
            try:
                from urllib.parse import urlparse, parse_qs
                query = parse_qs(urlparse(self.path).query)
                record_id = query.get('id', [None])[0]
                records = []
                if os.path.exists(RECORD_DATA_FILE):
                    with open(RECORD_DATA_FILE, 'r', encoding='utf-8') as f:
                        content = f.read().strip()
                        if content:
                            records = json.loads(content)
                if record_id:
                    records = [r for r in records if str(r.get('id')) != str(record_id)]
                    with open(RECORD_DATA_FILE, 'w', encoding='utf-8') as f:
                        json.dump(records, f, indent=2)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'success': True, 'records': records}).encode('utf-8'))
            except Exception as err:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(err)}).encode('utf-8'))

    def do_PATCH(self):
        if self.path.startswith('/api/records'):
            try:
                content_length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(content_length).decode('utf-8')
                update_data = json.loads(body)
                records = []
                if os.path.exists(RECORD_DATA_FILE):
                    with open(RECORD_DATA_FILE, 'r', encoding='utf-8') as f:
                        content = f.read().strip()
                        if content:
                            records = json.loads(content)
                target = next((r for r in records if str(r.get('id')) == str(update_data.get('id'))), None)
                if target:
                    target.update(update_data)
                    with open(RECORD_DATA_FILE, 'w', encoding='utf-8') as f:
                        json.dump(records, f, indent=2)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'success': True, 'records': records}).encode('utf-8'))
            except Exception as err:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(err)}).encode('utf-8'))

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == '__main__':
    print(f"Lemon Prototype Server starting on http://localhost:{PORT}")
    with socketserver.TCPServer(('', PORT), RequestHandler) as httpd:
        httpd.serve_forever()
