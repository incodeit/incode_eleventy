import Typed from 'typed.js';

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function revealEmails() {
  document.querySelectorAll("[data-email]").forEach((el) => {
    try {
      const email = atob(el.getAttribute("data-email"));
      el.setAttribute("href", `mailto:${email}`);
      if (el.hasAttribute("data-email-show")) {
        el.textContent = email;
      }
      el.removeAttribute("data-email");
      el.removeAttribute("data-email-show");
    } catch {
      // ignore malformed payloads
    }
  });
}

async function consoleEasterEgg() {
  const logoStyle =
    'color: #000; background: #fff; font-family: Impact, Haettenschweiler, "Arial Black", "Helvetica Neue", sans-serif; font-size: 64px; font-weight: 900; letter-spacing: 0.04em; padding: 16px 12px 8px; line-height: 1;';
  const textStyle =
    'color: #000; background: #fff; font-family: Courier, "Courier New", monospace; font-size: 12px; padding: 8px 12px 16px;';

  let body =
    "Hello everyone, it's great that you've come to visit us here :-) drop us a line at info@incode.it\nand remember:";

  try {
    const res = await fetch("https://geek-jokes.sameerkumar.website/api?format=json");
    if (res.ok) {
      const { joke } = await res.json();
      if (joke) {
        body += `\n${joke}\n— source: geek-jokes.sameerkumar.website`;
      }
    }
  } catch {
    // silently skip joke if the request fails
  }

  console.log(`%cincode%c${body}`, logoStyle, textStyle);
}

if ('requestIdleCallback' in window) {
  requestIdleCallback(() => consoleEasterEgg(), { timeout: 5000 });
} else {
  window.addEventListener('load', () => setTimeout(consoleEasterEgg, 1500));
}

document.addEventListener("DOMContentLoaded", () => {
  revealEmails();

  const container = document.getElementById('works-container');
  if (container) {
    const works = Array.from(container.querySelectorAll('.work'));
    shuffleArray(works).forEach((work) => container.appendChild(work));
  }

  if (document.querySelector(".hero__typewrite")) {
    new Typed(".hero__typewrite", {
      strings: ["We build.", "We code.", "We design."],
      typeSpeed: 150,
      smartBackspace: false,
      fadeOut: true,
      loop: true,
      backDelay: 2500,
    });
  }
});
