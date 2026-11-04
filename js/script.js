const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuButton.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

const roles = ["web experiences.", "thoughtful interfaces.", "things that help people."];
const typingElement = document.querySelector(".typing");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function animateRole() {
  if (!typingElement) return;
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typingElement.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      window.setTimeout(animateRole, 1500);
      return;
    }
  } else {
    charIndex--;
    typingElement.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  window.setTimeout(animateRole, deleting ? 38 : 75);
}
if (typingElement) window.setTimeout(animateRole, 500);

// Hero Typing Animation
const typingText = document.getElementById("typing-text");

if (typingText) {
    const phrases = [
        "Front-End Developer",
        "IT Student",
        "Creative Problem Solver"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingText.textContent = currentPhrase.substring(0, charIndex);

        let speed = isDeleting ? 45 : 90;

        if (!isDeleting && charIndex === currentPhrase.length) {
            speed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}
