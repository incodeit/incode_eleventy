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

function consoleEasterEgg() {
  const logoStyle =
    'color: #000; background: #fff; font-family: Impact, Haettenschweiler, "Arial Black", "Helvetica Neue", sans-serif; font-size: 64px; font-weight: 900; letter-spacing: 0.04em; padding: 16px 12px 8px; line-height: 1;';
  const textStyle =
    'color: #000; background: #fff; font-family: Courier, "Courier New", monospace; font-size: 12px; padding: 8px 12px 16px;';

  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "A SQL query walks into a bar, walks up to two tables and asks: \"Can I join you?\"",
    "There are only 10 kinds of people: those who understand binary and those who don't.",
    "Why did the developer go broke? He used up all his cache.",
    "!false — it's funny because it's true.",
    "To understand recursion, you must first understand recursion.",
    "It works on my machine.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
    "I'd tell you a UDP joke, but you might not get it.",
    "A programmer's wife says: \"Buy a loaf of bread. If they have eggs, get a dozen.\" He comes home with 12 loaves.",
    "Debugging: being the detective in a crime movie where you are also the murderer.",
    "Why was the function sad after the party? Too many arguments, and no return.",
    "A good programmer looks both ways before crossing a one-way street.",
  ];
  const joke = jokes[Math.floor(Math.random() * jokes.length)];

  const body =
    "Hello everyone, it's great that you've come to visit us here :-) drop us a line at info@incode.it\nand remember:\n" +
    joke;

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
      backSpeed: 80,
      smartBackspace: true,
      fadeOut: false,
      loop: true,
      backDelay: 2500,
    });
  }
});
