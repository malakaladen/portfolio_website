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

// Hero Typing Animation
const roles = [
    "web experiences.",
    "thoughtful interfaces.",
    "things that help people."
];

const typingElement = document.getElementById("typing-text");

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
            setTimeout(animateRole, 1500);
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

    setTimeout(animateRole, deleting ? 40 : 75);
}

if (typingElement) {
    setTimeout(animateRole, 500);
}
