const seedParishes = [
  { name: "St. John Vianney Parish", location: "Dallas, TX", score: 92 },
  { name: "Holy Trinity Catholic Church", location: "Irving, TX", score: 81 }
];

const parishList = document.getElementById("parishList");
const resultsMeta = document.getElementById("resultsMeta");

function render(parishes) {
  parishList.innerHTML = "";
  parishes.forEach((p) => {
    const card = document.createElement("div");
    card.style.background = "#fff";
    card.style.border = "1px solid #dbe0ef";
    card.style.borderRadius = "10px";
    card.style.padding = "1rem";
    card.style.marginBottom = "0.75rem";
    card.innerHTML = `<strong>${p.name}</strong><br>${p.location}<br>Reverence Meter: ${p.score}/100`;
    parishList.appendChild(card);
  });
  resultsMeta.textContent = `Showing ${parishes.length} parishes.`;
}

document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = document.getElementById("locationInput").value.trim().toLowerCase();
  if (!q) return render(seedParishes);
  render(seedParishes.filter((p) => p.location.toLowerCase().includes(q)));
});

render(seedParishes);
