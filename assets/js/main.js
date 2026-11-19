// This class enables the optional reveal animation only when JavaScript is available.
document.documentElement.classList.replace("no-js", "js");

/* Small interactions for the portfolio: navigation, theme, and reveal effects. */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const themeButton = document.querySelector(".theme-toggle");
const yearLabel = document.querySelector("[data-current-year]");

// Keep the copyright year current.
if (yearLabel) {
  yearLabel.textContent = new Date().getFullYear();
}

// Mobile navigation opens and closes from the menu button.
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("is-open");
    });
  });
}

// The dark theme is the default. The selected theme is remembered in this browser.
let savedTheme = null;
try {
  savedTheme = window.localStorage.getItem("portfolio-theme");
} catch {
  // Theme selection still works for this page even when browser storage is unavailable.
}

if (savedTheme === "light") {
  document.documentElement.dataset.theme = "light";
}

function updateThemeButton() {
  if (!themeButton) return;
  const isLight = document.documentElement.dataset.theme === "light";
  themeButton.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  themeButton.setAttribute("aria-pressed", String(isLight));
}

updateThemeButton();

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const isLight = document.documentElement.dataset.theme === "light";

    if (isLight) {
      delete document.documentElement.dataset.theme;
      try { window.localStorage.setItem("portfolio-theme", "dark"); } catch { /* Storage is optional. */ }
    } else {
      document.documentElement.dataset.theme = "light";
      try { window.localStorage.setItem("portfolio-theme", "light"); } catch { /* Storage is optional. */ }
    }

    updateThemeButton();
  });
}

// Reveal content gently as it enters the screen. Reduced-motion preferences are respected in CSS.
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Apply the editable email and GitHub details from site-config.js.
const config = window.PORTFOLIO_CONFIG || {};

document.querySelectorAll("[data-email-link]").forEach((link) => {
  if (config.email) link.href = `mailto:${config.email}`;
});

document.querySelectorAll("[data-github-link]").forEach((link) => {
  if (config.github) link.href = config.github;
});

// Optional social links stay hidden until a public URL is added to site-config.js.
const profileLinks = [
  ["[data-linkedin]", config.linkedin],
  ["[data-youtube]", config.youtube],
  ["[data-x]", config.x]
];

profileLinks.forEach(([selector, url]) => {
  document.querySelectorAll(selector).forEach((link) => {
    if (url) {
      link.href = url;
      link.hidden = false;
    } else {
      link.hidden = true;
    }
  });
});
