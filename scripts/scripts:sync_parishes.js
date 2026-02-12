#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DIOCESAN_SEED_PATH = path.join(ROOT, 'data', 'diocesan-seed.json');
const METRO_SEED_PATH = path.join(ROOT, 'data', 'metro-seeds.json');
const OUTPUT_PATH = path.join(ROOT, 'data', 'parishes.json');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function safeId(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function parseLocation(address) {
  const parts = address.split(',').map((part) => part.trim());
  const city = parts.length > 1 ? parts[1] : 'Unknown';
  const stateZip = parts.length > 2 ? parts[2] : '';
  const zipMatch = stateZip.match(/(\d{5})/);
  return {
    location: city && stateZip ? `${city}, ${stateZip.replace(/\d{5}/, '').trim()}`.replace(/,\s*$/, '') : city,
    zip: zipMatch ? zipMatch[1] : '00000'
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

function makeDiocesanParish(record) {
  const parsed = parseLocation(record.address);
  return {
    id: safeId(record.name),
    name: record.name,
    location: parsed.location,
    zip: parsed.zip,
    details: record.details || [],
    confessionHoursPerWeek: record.confessionHoursPerWeek ?? 1,
    adorationHoursPerWeek: record.adorationHoursPerWeek ?? 1,
    reverentImageSignals: 2,
    onlineReviewScore: 4,
    liturgyNotes: [
      `Imported from diocesan directory: ${record.source_url}`,
      `Website: ${record.website}`
    ],
    webSignals: [
      'Data source: official diocesan directory',
      'Google enrichment pending API key configuration'
    ],
    communityNotes: [],
    source: 'diocese'
  };
}

async function fetchGooglePlaces(metros, apiKey) {
  const collected = [];

  for (const metro of metros) {
    const url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json');
    url.searchParams.set('location', `${metro.lat},${metro.lng}`);
    url.searchParams.set('radius', String(metro.radiusMeters || 20000));
    url.searchParams.set('keyword', 'Catholic parish');
    url.searchParams.set('key', apiKey);

    const payload = await fetchJson(url);
    for (const place of payload.results || []) {
      const vicinity = place.vicinity || `${metro.label}`;
      const parsed = parseLocation(vicinity);
      collected.push({
        id: safeId(`${place.place_id || place.name}`),
        name: place.name,
        location: parsed.location || metro.label,
        zip: parsed.zip,
        details: [],
        confessionHoursPerWeek: 1,
        adorationHoursPerWeek: 1,
        reverentImageSignals: 1,
        onlineReviewScore: Number(place.rating || 4),
        liturgyNotes: ['Imported from Google Places'],
        webSignals: [`Google rating count: ${place.user_ratings_total || 0}`],
        communityNotes: [],
        source: 'google',
        external: {
          place_id: place.place_id,
          types: place.types || []
        }
      });
    }
  }

  return collected;
}

function mergeParishes(parishes) {
  const byKey = new Map();

  parishes.forEach((parish) => {
    const key = `${parish.name}|${parish.zip}`.toLowerCase();
    const existing = byKey.get(key);
    if (!existing) {
      byKey.set(key, parish);
      return;
    }

    const merged = {
      ...existing,
      details: Array.from(new Set([...(existing.details || []), ...(parish.details || [])])),
      confessionHoursPerWeek: Math.max(existing.confessionHoursPerWeek || 0, parish.confessionHoursPerWeek || 0),
      adorationHoursPerWeek: Math.max(existing.adorationHoursPerWeek || 0, parish.adorationHoursPerWeek || 0),
      onlineReviewScore: Math.max(existing.onlineReviewScore || 0, parish.onlineReviewScore || 0),
      liturgyNotes: Array.from(new Set([...(existing.liturgyNotes || []), ...(parish.liturgyNotes || [])])),
      webSignals: Array.from(new Set([...(existing.webSignals || []), ...(parish.webSignals || [])])),
      source: existing.source === parish.source ? existing.source : 'merged'
    };

    byKey.set(key, merged);
  });

  return Array.from(byKey.values());
}

async function main() {
  const diocesan = readJson(DIOCESAN_SEED_PATH).map(makeDiocesanParish);
  const metros = readJson(METRO_SEED_PATH);
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  let google = [];
  if (apiKey) {
    try {
      google = await fetchGooglePlaces(metros, apiKey);
      console.log(`Fetched ${google.length} places from Google Places.`);
    } catch (error) {
      console.warn(`Google fetch failed, continuing with diocesan seed only. ${error.message}`);
    }
  } else {
    console.log('GOOGLE_PLACES_API_KEY not set; generating data from diocesan seed only.');
  }

  const merged = mergeParishes([...diocesan, ...google]);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(merged, null, 2));
  console.log(`Wrote ${merged.length} parishes to ${path.relative(ROOT, OUTPUT_PATH)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
scripts/upgrade_local.sh

\cf0 \});\cell \lastrow\row
}
