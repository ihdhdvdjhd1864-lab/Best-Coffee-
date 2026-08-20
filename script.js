let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});









let openbtn = document.querySelector(".openbtn");
let navul = document.querySelector("nav ul");
openbtn.addEventListener("click", () => {
  navul.classList.toggle("active");
});