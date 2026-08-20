let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});

let openbtn = document.querySelector(".openbtn");
let navul = document.querySelector("nav ul");
let ovluq = document.querySelector(".ovluq");
openbtn.addEventListener("click", () => {
  navul.classList.toggle("active");
  ovluq.classList.toggle("active");
  if (navul.classList.contains("active")) {
    openbtn.innerHTML = `<i class="fa fa-times"></i>`;
  } else {
    openbtn.innerHTML = `<i class="fa fa-bars"></i>`;
  }
});
ovluq.addEventListener("click", () => {
  navul.classList.remove("active");
  ovluq.classList.remove("active");
  openbtn.innerHTML = `<i class="fa fa-bars"></i>`;
})
