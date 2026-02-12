const seedParishes = [
  {
    id: "st-john-vianney",
    name: "St. John Vianney Parish",
    location: "Dallas, TX",
    zip: "75230",
    details: ["latin", "ad-orientem", "tongue", "altar-rail"],
    confessionHoursPerWeek: 8,
    adorationHoursPerWeek: 30,
    reverentImageSignals: 4,
    onlineReviewScore: 4.6,
    liturgyNotes: [
      "Kneelers well maintained and broadly used",
      "Regular use of incense and chant",
      "Homilies frequently reference Church teaching"
    ],
    webSignals: [
      "Google reviews mention reverence 26 times",
      "Parish Instagram shows ad orientem liturgies",
      "Website posts weekly confession schedule updates"
    ],
    communityNotes: [
      { rating: 5, comment: "Very prayerful atmosphere before and after Mass." },
      { rating: 4, comment: "Music supports worship instead of performance." }
    ]
  },
  {
    id: "holy-trinity",
    name: "Holy Trinity Catholic Church",
    location: "Irving, TX",
    zip: "75039",
    details: ["tongue"],
    confessionHoursPerWeek: 4,
    adorationHoursPerWeek: 12,
    reverentImageSignals: 3,
    onlineReviewScore: 4.2,
    liturgyNotes: [
      "Frequent confessions before weekend Masses",
      "Communion paten used during major feasts"
    ],
    webSignals: [
      "Parish bulletin includes confession reminders",
      "Public photos show modest sanctuary decor",
      "Recent reviews praise respectful liturgical tone"
    ],
    communityNotes: [{ rating: 4, comment: "Confession lines are steady and priests are available." }]
  },
  {
    id: "our-lady-angel",
    name: "Our Lady of the Angels",
    location: "Plano, TX",
    zip: "75074",
    details: ["latin"],
    confessionHoursPerWeek: 2,
    adorationHoursPerWeek: 6,
    reverentImageSignals: 2,
    onlineReviewScore: 3.8,
    liturgyNotes: [
      "Quiet adoration chapel open most weekdays",
      "Growing young family attendance"
    ],
    webSignals: [
      "Mixed review sentiment around music choices",
      "Photos show occasional incense use",
      "Website lists monthly adoration nights"
    ],
    communityNotes: [{ rating: 3, comment: "Good parish, but reverence can vary by Mass time." }]
  }
];

const localStorageKey = "reverentmass-user-notes";
const parishList = document.getElementById("parishList");
const resultsMeta = document.getElementById("resultsMeta");
const template = document.getElementById("parishCardTemplate");
const loadingState = document.getElementById("loadingState");

const controls = {
  confessionWeight: document.getElementById("confessionWeight"),
  adorationWeight: document.getElementById("adorationWeight"),
  reviewWeight: document.getElementById("reviewWeight")
};

function loadUserNotes() {
  try {
    return JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
  } catch {
    return {};
  }
}

function saveUserNotes(notes) {
  localStorage.setItem(localStorageKey, JSON.stringify(notes));
}

function normalize(value, max) {
  return Math.min(value / max, 1);
}

function buildReverenceScore(parish, weights) {
  const confessionScore = normalize(parish.confessionHoursPerWeek, 10) * weights.confessionWeight;
  const adorationScore = normalize(parish.adorationHoursPerWeek, 40) * weights.adorationWeight;
  const reviewScore = normalize(parish.onlineReviewScore, 5) * weights.reviewWeight;
  const imageScore = normalize(parish.reverentImageSignals, 5) * weights.reviewWeight;

  const crowdAverage = parish.communityNotes.length
    ? parish.communityNotes.reduce((sum, note) => sum + note.rating, 0) / parish.communityNotes.length
    : 0;
  const crowdScore = normalize(crowdAverage, 5) * 2;

  const weightedTotal = confessionScore + adorationScore + reviewScore + imageScore + crowdScore;
  const maxPossible =
    weights.confessionWeight + weights.adorationWeight + weights.reviewWeight + weights.reviewWeight + 2;

  return Math.round((weightedTotal / maxPossible) * 100);
}

function renderCommunityNotes(noteItems, target) {
  target.innerHTML = "";
  if (!noteItems.length) {
    const item = document.createElement("li");
    item.textContent = "No community notes yet. Be the first to share your experience.";
    target.appendChild(item);
    return;
  }

  noteItems.forEach((note) => {
    const item = document.createElement("li");
    item.textContent = `(${note.rating}/5) ${note.comment}`;
    target.appendChild(item);
  });
}

function getWeights() {
  return {
    confessionWeight: Number(controls.confessionWeight.value),
    adorationWeight: Number(controls.adorationWeight.value),
    reviewWeight: Number(controls.reviewWeight.value)
  };
}

function hydrateWeightOutputs() {
  Object.keys(controls).forEach((key) => {
    const output = document.getElementById(`${key}Value`);
    output.textContent = controls[key].value;
  });
}

function getSelectedDetails() {
  return Array.from(document.querySelectorAll('input[name="detail"]:checked')).map((item) => item.value);
}

function setLoadingState(visible) {
  loadingState.hidden = !visible;
}

function formatDetailLabel(detail) {
  return detail
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function render(parishes, activeQuery = "") {
  parishList.innerHTML = "";
  const weights = getWeights();

  if (!parishes.length) {
    const message = activeQuery
      ? `No sanctuaries matched "${activeQuery}" yet. Try a nearby city, ZIP, or fewer detail filters.`
      : "No sanctuaries available yet.";
    resultsMeta.textContent = message;
    return;
  }

  const sortedParishes = parishes
    .slice()
    .sort((a, b) => buildReverenceScore(b, weights) - buildReverenceScore(a, weights));

  sortedParishes.forEach((parish) => {
    const node = template.content.cloneNode(true);
    const score = buildReverenceScore(parish, weights);

    node.querySelector(".parish-name").textContent = parish.name;
    node.querySelector(".parish-location").textContent = `${parish.location} ${parish.zip}`;
    node.querySelector(".meter-value").textContent = score;
    node.querySelector(".meter-fill").style.width = `${score}%`;
    const detailChips = node.querySelector(".detail-chips");
    parish.details.forEach((detail) => {
      const chip = document.createElement("span");
      chip.className = "detail-chip";
      chip.textContent = formatDetailLabel(detail);
      detailChips.appendChild(chip);
    });

    const facts = node.querySelector(".facts");
    [
      `Confession: ${parish.confessionHoursPerWeek} hrs/week`,
      `Adoration: ${parish.adorationHoursPerWeek} hrs/week`,
      `Reviews: ${parish.onlineReviewScore}/5`
    ].forEach((fact) => {
      const li = document.createElement("li");
      li.textContent = fact;
      facts.appendChild(li);
    });

    const signals = node.querySelector(".online-signals");
    [...parish.liturgyNotes, ...parish.webSignals].forEach((signal) => {
      const li = document.createElement("li");
      li.textContent = signal;
      signals.appendChild(li);
    });

    const communityNotesEl = node.querySelector(".community-notes");
    renderCommunityNotes(parish.communityNotes, communityNotesEl);

    const form = node.querySelector(".note-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const comment = String(formData.get("comment") || "").trim();
      const rating = Number(formData.get("rating"));

      if (!comment || rating < 1 || rating > 5) {
        return;
      }

      parish.communityNotes.push({ comment, rating });
      const stored = loadUserNotes();
      stored[parish.id] = parish.communityNotes;
      saveUserNotes(stored);
      render(sortedParishes, activeQuery);
    });

    parishList.appendChild(node);
  });

  resultsMeta.textContent = `Showing ${sortedParishes.length} sanctuaries. Current top match: ${sortedParishes[0].name} (${buildReverenceScore(sortedParishes[0], weights)}/100).`;
}

function mergeSavedNotes(parishes) {
  const stored = loadUserNotes();
  return parishes.map((parish) => ({
    ...parish,
    communityNotes: stored[parish.id]?.length ? stored[parish.id] : parish.communityNotes
  }));
}

async function loadBaseParishes() {
  try {
    const response = await fetch('/api/parishes');
    if (!response.ok) {
      return seedParishes;
    }

    const payload = await response.json();
    if (!Array.isArray(payload) || !payload.length) {
      return seedParishes;
    }

    return payload;
  } catch {
    return seedParishes;
  }
}

async function searchLiveParishes(query) {
  try {
    const response = await fetch(`/api/search-parishes?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      return [];
    }
    const payload = await response.json();
    return Array.isArray(payload) ? payload : [];
  } catch {
    return [];
  }
}

function applySearch(parishes, query, details) {
  const normalizedQuery = query.trim().toLowerCase();

  return parishes.filter((parish) => {
    const locationMatch =
      !normalizedQuery ||
      parish.location.toLowerCase().includes(normalizedQuery) ||
      parish.zip.includes(normalizedQuery);

    const detailMatch = details.every((detail) => parish.details.includes(detail));
    return locationMatch && detailMatch;
  });
}


function hydrateBuildStamp() {
  const target = document.getElementById("buildStamp");
  if (!target) {
    return;
  }

  fetch("/__version")
    .then((response) => response.json())
    .then((payload) => {
      if (!payload?.app || !payload?.version) {
        target.textContent = "Build: version unknown";
        return;
      }
      target.textContent = `Build: ${payload.app} v${payload.version}`;
    })
    .catch(() => {
      target.textContent = "Build: version unavailable";
    });
}

async function initialize() {
  hydrateBuildStamp();

  const baseParishes = await loadBaseParishes();
  let workingSet = mergeSavedNotes(baseParishes);
  render(workingSet);
  if (baseParishes !== seedParishes) {
    resultsMeta.textContent += " Source: synced parish dataset.";
  }

  Object.values(controls).forEach((input) => {
    input.addEventListener("input", () => {
      hydrateWeightOutputs();
    });
  });

  document.getElementById("recalculateBtn").addEventListener("click", () => {
    render(workingSet);
  });

  document.querySelectorAll('input[name="detail"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const query = document.getElementById("locationInput").value;
      workingSet = applySearch(mergeSavedNotes(baseParishes), query, getSelectedDetails());
      render(workingSet, query.trim());
    });
  });

  document.getElementById("searchForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const location = document.getElementById("locationInput").value;

    setLoadingState(true);
    const liveParishes = await searchLiveParishes(location);
    const selectedDetails = getSelectedDetails();

    if (liveParishes.length) {
      workingSet = applySearch(mergeSavedNotes(liveParishes), location, selectedDetails);
      render(workingSet, location.trim());
      resultsMeta.textContent += " Source: live Google Places search.";
    } else {
      workingSet = applySearch(mergeSavedNotes(baseParishes), location, selectedDetails);
      render(workingSet, location.trim());
    }

    setLoadingState(false);
  });

  hydrateWeightOutputs();
}

initialize();
