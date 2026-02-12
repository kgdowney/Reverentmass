const http = require('http');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || '0.0.0.0';
const ROOT = __dirname;
const APP_NAME = 'Rooted';
const APP_VERSION = '1.3.0';
const PARISH_DATA_PATH = path.join(ROOT, 'data', 'parishes.json');
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || '';

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

async function fetchJson(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`status ${response.status}`);
    }
    return await response.json();
  } catch (fetchError) {
    try {
      const raw = execFileSync('curl', ['-s', String(url)], { encoding: 'utf8' });
      return JSON.parse(raw);
    } catch (curlError) {
      throw new Error(`fetch failed (${fetchError.message}); curl fallback failed (${curlError.message})`);
    }
  }
}

function parseLocation(vicinity) {
  const parts = String(vicinity || '').split(',').map((part) => part.trim());
  const city = parts[0] || 'Unknown';
  const stateZip = parts[1] || '';
  const zipMatch = stateZip.match(/(\d{5})/);
  return {
    location: city && stateZip ? `${city}, ${stateZip.replace(/\d{5}/, '').trim()}`.replace(/,\s*$/, '') : city,
    zip: zipMatch ? zipMatch[1] : '00000'
  };
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url || '/', 'http://localhost');
  const requestPath = parsedUrl.pathname;

  if (requestPath === '/__version') {
    res.writeHead(200, buildHeaders('application/json; charset=utf-8'));
    res.end(JSON.stringify({ app: APP_NAME, version: APP_VERSION }));
    return;
  }

  if (requestPath === '/api/parishes') {
    fs.readFile(PARISH_DATA_PATH, 'utf8', (error, data) => {
      if (error) {
        res.writeHead(200, buildHeaders('application/json; charset=utf-8'));
        res.end('[]');
        return;
      }
      res.writeHead(200, buildHeaders('application/json; charset=utf-8'));
      res.end(data);
    });
    return;
  }

  if (requestPath === '/api/search-parishes') {
    const query = (parsedUrl.searchParams.get('q') || '').trim();
    if (!query || !GOOGLE_PLACES_API_KEY) {
      res.writeHead(200, buildHeaders('application/json; charset=utf-8'));
      res.end('[]');
      return;
    }

    const url = new URL('https://maps.googleapis.com/maps/api/place/textsearch/json');
    url.searchParams.set('query', `${query} Catholic parish`);
    url.searchParams.set('key', GOOGLE_PLACES_API_KEY);

    fetchJson(url)
      .then((payload) => {
        const mapped = (payload.results || []).map((place) => {
          const parsed = parseLocation(place.formatted_address || place.vicinity || query);
          return {
            id: String(place.place_id || place.name || query).toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            name: place.name,
            location: parsed.location,
            zip: parsed.zip,
            details: [],
            confessionHoursPerWeek: 1,
            adorationHoursPerWeek: 1,
            reverentImageSignals: 1,
            onlineReviewScore: Number(place.rating || 4),
            liturgyNotes: ['Imported from live Google Places search'],
            webSignals: [`Google rating count: ${place.user_ratings_total || 0}`],
            communityNotes: [],
            source: 'google-live'
          };
        });

        res.writeHead(200, buildHeaders('application/json; charset=utf-8'));
        res.end(JSON.stringify(mapped));
      })
      .catch(() => {
        res.writeHead(200, buildHeaders('application/json; charset=utf-8'));
        res.end('[]');
      });
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

server.listen(PORT, HOST, () => {
  console.log(`${APP_NAME} v${APP_VERSION} running at http://${HOST}:${PORT}`);
});
