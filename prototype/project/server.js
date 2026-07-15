const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data', 'users.json');
const RECORD_DATA_FILE = path.join(__dirname, 'data', 'record-data.json');
const UPLOADS_DIR = path.join(__dirname, 'data', 'uploads');

if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/api/records') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const newRecord = JSON.parse(body);

                if (newRecord.photoData) {
                    try {
                        const matches = newRecord.photoData.match(/^data:(.+);base64,(.+)$/);
                        let imageBuffer;
                        let ext = '.jpg';
                        if (matches) {
                            const mime = matches[1];
                            imageBuffer = Buffer.from(matches[2], 'base64');
                            if (mime.includes('png')) ext = '.png';
                            else if (mime.includes('gif')) ext = '.gif';
                            else if (mime.includes('webp')) ext = '.webp';
                        } else {
                            imageBuffer = Buffer.from(newRecord.photoData, 'base64');
                        }
                        const rawName = newRecord.photoName ? path.parse(newRecord.photoName).name : 'photo';
                        const safeName = rawName.replace(/[^a-zA-Z0-9_-]/g, '_');
                        const fileName = `${Date.now()}_${safeName}${ext}`;
                        const filePath = path.join(UPLOADS_DIR, fileName);
                        fs.writeFileSync(filePath, imageBuffer);
                        newRecord.photoPath = `data/uploads/${fileName}`;
                        delete newRecord.photoData;
                    } catch (imgErr) {
                        console.error('Error saving uploaded image:', imgErr);
                    }
                }

                let records = [];
                if (fs.existsSync(RECORD_DATA_FILE)) {
                    const content = fs.readFileSync(RECORD_DATA_FILE, 'utf8').trim();
                    if (content) {
                        try {
                            records = JSON.parse(content);
                        } catch (e) {
                            records = [];
                        }
                    }
                }
                records.push(newRecord);
                fs.writeFileSync(RECORD_DATA_FILE, JSON.stringify(records, null, 2), 'utf8');
                res.writeHead(200, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type'
                });
                res.end(JSON.stringify({ success: true, records }));
            } catch (err) {
                console.error('Error handling report:', err);
                res.writeHead(500, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type'
                });
                res.end(JSON.stringify({ success: false, error: err.message }));
            }
        });
        return;
    }

    if (req.method === 'POST' && req.url === '/api/signup') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const newUser = JSON.parse(body);
                let users = [];
                if (fs.existsSync(DATA_FILE)) {
                    const content = fs.readFileSync(DATA_FILE, 'utf8').trim();
                    if (content) {
                        try {
                            users = JSON.parse(content);
                        } catch (e) {
                            users = [];
                        }
                    }
                }
                users.push(newUser);
                fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2), 'utf8');
                res.writeHead(200, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type'
                });
                res.end(JSON.stringify({ success: true, users }));
            } catch (err) {
                console.error('Error handling signup:', err);
                res.writeHead(500, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type'
                });
                res.end(JSON.stringify({ success: false, error: err.message }));
            }
        });
        return;
    }

    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        res.end();
        return;
    }

    // Serve static files
    let urlPath = req.url.split('?')[0];
    let filePath = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);
    const ext = path.extname(filePath);
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg'
    };
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*' });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Lemon Prototype Server running at http://localhost:${PORT}`);
});
