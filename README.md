# Rooted

**Stop wandering. Start growing.**

Rooted helps Catholics compare local parishes for liturgical reverence using a weighted Reverence Meter, structured parish details, and community testimony.

## What it does

- Shows parish cards with a **Reverence Meter** out of 100.
- Supports searching by **city or ZIP code**.
- Supports detail filtering for:
  - Latin
  - Ad Orientem
  - Communion on the tongue
  - Altar rail
- Scores each parish using confession, adoration, online signals, image cues, and community notes.
- Lets users submit comments + ratings for each parish.
- Persists user notes in browser localStorage.

## Run locally

```bash
npm start
```

Then open <http://localhost:3000>.

## If you still see the old version

1. Stop the server with `Control + C`.
2. Pull latest code from your GitHub default branch:

```bash
git fetch origin
git checkout main
git pull origin main
```

If `main` is not your default branch, run `git branch -a` and switch to the branch that exists on your repo.

3. Start again:

```bash
npm start
```

4. Hard-refresh browser cache:
   - **Mac Chrome**: `Command + Shift + R`
   - **Mac Safari**: `Option + Command + E` then refresh

The server sends `no-cache` headers to reduce stale-file issues. If your terminal still prints `ReverentMass Finder running...`, you are likely still on older code from your local clone, not the latest Rooted update.


## Verify you are on the updated build

After `npm start`, you should see this exact startup pattern in terminal:

```
Rooted v1.1.0 running at http://0.0.0.0:3000
```

You can also verify with:

```bash
curl http://localhost:3000/__version
```

Expected output:

```json
{"app":"Rooted","version":"1.1.0"}
```

You should also see a small label at the top of the page:

```
Build: Rooted v1.1.0
```

If you still see `ReverentMass Finder running ...`, your local machine is still running older files from GitHub and not the updated Rooted code.

## Emergency fix (if GitHub/main still looks old)

If your terminal still shows `ReverentMass Finder running ...`, run this inside your project folder:

```bash
bash scripts/upgrade_local.sh
npm start
```

Then verify in a second terminal:

```bash
curl http://localhost:3000/__version
```

Expected output:

```json
{"app":"Rooted","version":"1.1.0"}
```

## Product copy

### Headline
Stop Parish Shopping. Start Putting Down Roots.

### Description
Finding a reverent liturgy shouldn't feel like a gamble. You want a parish where the homilies challenge you, the music lifts you, and the reverence draws you in—not a place you have to endure.

Rooted takes the guesswork out of Sunday morning. We crowd-source data on altar rails, confession availability, chant, and silence to give every parish a Reverence Score.
