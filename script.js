// Nabídka bytů – plochy podle zadání klienta, stav: "volny" | "rezervace" | "prodano"
const BYTY = [
  { cislo: 1, plocha: 107.88, stav: "volny" },
  { cislo: 2, plocha: 117.77, stav: "volny" },
  { cislo: 3, plocha: 105.86, stav: "volny" },
  { cislo: 4, plocha: 79.58, stav: "volny" },
  { cislo: 5, plocha: 123.73, stav: "volny" },
  { cislo: 6, plocha: 120.77, stav: "volny" },
  { cislo: 7, plocha: 105.86, stav: "volny" },
  { cislo: 8, plocha: 106, stav: "volny" },
];

// Vizualizace: doplňte cesty k obrázkům, sekce se pak sama zobrazí.
// Příklad: { src: "assets/vizualizace/exterier.jpg", popis: "Pohled na dům z ulice" }
const VIZUALIZACE = [];

const STAVY = { volny: "Volný", rezervace: "Rezervace", prodano: "Prodáno" };
const formatPlocha = (m2) =>
  m2.toLocaleString("cs-CZ", { minimumFractionDigits: Number.isInteger(m2) ? 0 : 2 }) + " m²";

/* Header: solid background once the hero scrolls away */
const header = document.querySelector("[data-header]");
const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* Mobile menu */
const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  header.classList.toggle("menu-open", !open);
});
menu.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    toggle.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
  }
});

/* Unit selector */
const list = document.querySelector("[data-unit-list]");
const detail = document.querySelector("[data-unit-detail]");
const dName = detail.querySelector("[data-d-name]");
const dArea = detail.querySelector("[data-d-area]");
const dMail = detail.querySelector("[data-d-mail]");

list.innerHTML = BYTY.map(
  (b) => `
  <li id="byt-${b.cislo}">
    <button type="button" class="unit-row" aria-pressed="false" data-unit="${b.cislo}">
      <span class="unit-name">Byt ${b.cislo}</span>
      <span class="unit-area"><span class="sr">plocha </span>${formatPlocha(b.plocha)}</span>
      <span><span class="status status-${b.stav}">${STAVY[b.stav]}</span></span>
    </button>
  </li>`
).join("");

function selectUnit(cislo, { scroll = false } = {}) {
  const byt = BYTY.find((b) => b.cislo === cislo);
  if (!byt) return;
  list.querySelectorAll("[data-unit]").forEach((row) => {
    const active = Number(row.dataset.unit) === cislo;
    row.setAttribute("aria-pressed", String(active));
  });
  detail.classList.remove("is-swapping");
  void detail.offsetWidth;
  detail.classList.add("is-swapping");
  dName.textContent = `Byt ${byt.cislo}`;
  dArea.textContent = formatPlocha(byt.plocha);
  dMail.href = `mailto:buildhaven@post.cz?subject=${encodeURIComponent(`Zájem o Byt ${byt.cislo}`)}`;
  if (scroll) {
    const narrow = window.matchMedia("(max-width: 900px)").matches;
    (narrow ? detail : document.getElementById("byty")).scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

list.addEventListener("click", (e) => {
  const row = e.target.closest("[data-unit]");
  if (!row) return;
  const cislo = Number(row.dataset.unit);
  history.replaceState(null, "", `#byt-${cislo}`);
  selectUnit(cislo, { scroll: window.matchMedia("(max-width: 900px)").matches });
});

function fromHash() {
  const m = location.hash.match(/^#byt-(\d)$/);
  if (m) selectUnit(Number(m[1]), { scroll: true });
}
selectUnit(1);
fromHash();
window.addEventListener("hashchange", fromHash);

/* Floor-plan tabs */
const tabs = [...document.querySelectorAll("[data-tab]")];
function activateTab(tab) {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
  });
}
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => activateTab(tab));
  tab.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
    activateTab(next);
    next.focus();
  });
});

/* Visualisations: the section appears once images are listed above */
if (VIZUALIZACE.length) {
  const gallery = document.querySelector("[data-gallery]");
  gallery.querySelector("[data-gallery-grid]").innerHTML = VIZUALIZACE.map(
    (v) => `<figure><img src="${v.src}" alt="${v.popis}" loading="lazy"><figcaption>${v.popis}</figcaption></figure>`
  ).join("");
  gallery.hidden = false;
  // The first visualisation replaces the plan in the hero frame
  const heroImg = document.querySelector("[data-hero-frame] img");
  heroImg.src = VIZUALIZACE[0].src;
  heroImg.alt = VIZUALIZACE[0].popis;
  document.querySelector("[data-hero-frame]").classList.add("is-photo");
  document.querySelector("[data-hero-frame] figcaption").textContent = "Vizualizace";
  // A second visualisation replaces the logo mark in the "O nás" frame
  if (VIZUALIZACE[1]) {
    const aboutFrame = document.querySelector("[data-about-frame]");
    const aboutImg = aboutFrame.querySelector("img");
    aboutImg.src = VIZUALIZACE[1].src;
    aboutImg.alt = VIZUALIZACE[1].popis;
    aboutFrame.classList.add("is-photo");
  }
}
