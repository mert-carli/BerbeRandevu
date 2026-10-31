const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/manifest+json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let cleanUrl = decodeURIComponent(req.url.split('?')[0]);
  if (cleanUrl === '/' || cleanUrl === '') {
    cleanUrl = '/index.html';
  }

  let filePath = path.join(__dirname, cleanUrl);

  // If file doesn't exist, try case-insensitive or fallback
  if (!fs.existsSync(filePath)) {
    // Try lower/upper case IMG
    if (cleanUrl.toLowerCase().startsWith('/img/')) {
      const relPath = cleanUrl.slice(5);
      const alt1 = path.join(__dirname, 'IMG', relPath);
      const alt2 = path.join(__dirname, 'img', relPath);
      if (fs.existsSync(alt1)) filePath = alt1;
      else if (fs.existsSync(alt2)) filePath = alt2;
    }
  }

  // If still doesn't exist and doesn't look like static asset, fallback to index.html
  if (!fs.existsSync(filePath)) {
    const ext = path.extname(cleanUrl);
    if (!ext) {
      filePath = path.join(__dirname, 'index.html');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 - Dosya Bulunamadı');
      return;
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Sunucu Hatası: ' + err.message);
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`BarberFlow sunucusu http://localhost:${PORT} portunda devrede.`);
});
