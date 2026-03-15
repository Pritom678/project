// menu toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// FAQ toggle

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqCard = button.parentElement;
    faqCard.classList.toggle("active");

    const icon = button.querySelector(".icon");
    icon.textContent = faqCard.classList.contains("active") ? "-" : "+";
  });
});
