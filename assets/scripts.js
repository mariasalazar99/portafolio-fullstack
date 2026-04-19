// Efecto de escritura automática estilo tecnológico
document.addEventListener("DOMContentLoaded", () => {
  const text = "Desarrolladora Full Stack Javascript.";
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

document.addEventListener("DOMContentLoaded", () => {
  const text = "María Teresa Salazar";
  const textElement = document.querySelector("#nombre h1 span");
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
scrollBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
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

// Loader al cargar la página
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide-loader');
  }, 1400);
});

// Cuando termina de cargar la página
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Reveal //
const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const cards = document.querySelectorAll('.project-card');

function animateOnScroll(){
  const trigger = window.innerHeight * 0.88;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < trigger){
      el.classList.add('active');
    }
  });

  cards.forEach((card,index)=>{
    const top = card.getBoundingClientRect().top;
    if(top < trigger){
      setTimeout(()=>{
        card.classList.add('show');
      }, index * 140);
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);