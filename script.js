const body = document.body;
const toggle = document.getElementById("theme-toggle");
const storedTheme = localStorage.getItem("theme");

if (toggle) {
  if (storedTheme === "dark") {
    body.classList.add("dark");
    toggle.textContent = "☀️";
  } else if (storedTheme === "light") {
    body.classList.remove("dark");
    toggle.textContent = "🌙";
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    body.classList.toggle("dark", prefersDark);
    toggle.textContent = prefersDark ? "☀️" : "🌙";
  }
}

if (toggle) {
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const darkMode = body.classList.contains("dark");
    toggle.textContent = darkMode ? "☀️" : "🌙";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  });
}

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formStatus = document.getElementById("form-status");
    if (formStatus) {
      formStatus.textContent = "Thanks! Form submitted successfully (demo mode).";
    }
    event.target.reset();
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
