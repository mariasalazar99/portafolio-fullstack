// Efecto de escritura automática estilo tecnológico
document.addEventListener("DOMContentLoaded", () => {
  const text = "Desarrolladora Full Stack. ¿En qué te puedo ayudar? :D";
  const textElement = document.querySelector("#hero p");
  textElement.textContent = "";

  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      textElement.textContent = text.substring(0, index + 1);
      index++;
      setTimeout(typeEffect, 60);
    } else {
      textElement.classList.add("typed-done");
    }
  }

  typeEffect();
});

// Scroll reveal suave
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

document.querySelectorAll("section").forEach(el => observer.observe(el));

// Botón para subir al inicio
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "⬆️";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.display = "none";
scrollBtn.style.background = "#f48fb1";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.width = "45px";
scrollBtn.style.height = "45px";
scrollBtn.style.color = "#fff";
scrollBtn.style.fontSize = "1.2rem";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
scrollBtn.style.transition = "0.3s";

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 500 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
