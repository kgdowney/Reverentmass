const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || '0.0.0.0';
const ROOT = __dirname;
const APP_NAME = 'Rooted';
const APP_VERSION = '1.1.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

function safeResolve(urlPath) {
  const decoded = decodeURIComponent((urlPath || '/').split('?')[0]);
  const cleanPath = decoded === '/' ? '/index.html' : decoded;
  const resolved = path.resolve(ROOT, `.${cleanPath}`);
  if (!resolved.startsWith(ROOT)) return null;
  return resolved;
}

function headers(type) {
  return {
    'Content-Type': type,
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    Pragma: 'no-cache',
    Expires: '0'
  };
}

const server = http.createServer((req, res) => {
  const requestPath = (req.url || '/').split('?')[0];

  if (requestPath === '/__version') {
    res.writeHead(200, headers('application/json; charset=utf-8'));
    res.end(JSON.stringify({ app: APP_NAME, version: APP_VERSION }));
    return;
  }

  const filePath = safeResolve(req.url || '/');
  if (!filePath) {
    res.writeHead(400, headers('text/plain; charset=utf-8'));
    res.end('Bad request');
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (!error) {
      const ext = path.extname(filePath).toLowerCase();
      const type = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, headers(type));
      res.end(data);
      return;
    }

    fs.readFile(path.join(ROOT, 'index.html'), (indexError, indexData) => {
      if (indexError) {
        res.writeHead(404, headers('text/plain; charset=utf-8'));
        res.end('Not found');
        return;
      }
      res.writeHead(200, headers('text/html; charset=utf-8'));
      res.end(indexData);
    });
  });
});

server.listen(PORT, HOST, () => {
  console.log(`${APP_NAME} v${APP_VERSION} running at http://${HOST}:${PORT}`);
});
