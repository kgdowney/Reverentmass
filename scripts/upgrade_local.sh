#!/usr/bin/env bash
set -euo pipefail

cat > server.js <<'SERVER'
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
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function safeResolve(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const cleanPath = decoded === '/' ? '/index.html' : decoded;
  const resolved = path.resolve(ROOT, `.${cleanPath}`);
  if (!resolved.startsWith(ROOT)) {
    return null;
  }
  return resolved;
}

function buildHeaders(contentType) {
  return {
    'Content-Type': contentType,
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    Pragma: 'no-cache',
    Expires: '0'
  };
}

const server = http.createServer((req, res) => {
  const requestPath = (req.url || '/').split('?')[0];

  if (requestPath === '/__version') {
    res.writeHead(200, buildHeaders('application/json; charset=utf-8'));
    res.end(JSON.stringify({ app: APP_NAME, version: APP_VERSION }));
    return;
  }

  const filePath = safeResolve(req.url || '/');

  if (!filePath) {
    res.writeHead(400, buildHeaders('text/plain; charset=utf-8'));
    res.end('Bad request');
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (!error) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, buildHeaders(contentType));
      res.end(data);
      return;
    }

    fs.readFile(path.join(ROOT, 'index.html'), (indexError, indexData) => {
      if (indexError) {
        res.writeHead(404, buildHeaders('text/plain; charset=utf-8'));
        res.end('Not found');
        return;
      }
      res.writeHead(200, buildHeaders('text/html; charset=utf-8'));
      res.end(indexData);
    });
  });
});

server.listen(PORT, HOST, () => {
  console.log(`${APP_NAME} v${APP_VERSION} running at http://${HOST}:${PORT}`);
});
SERVER

echo "Updated server.js to Rooted v1.1.0 server."
echo "Next: npm start"
echo "Then in another terminal: curl http://localhost:3000/__version"
