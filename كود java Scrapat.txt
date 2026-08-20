const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // لو عايز الأنميشن يحصل مرة واحدة بس سيب السطر اللي تحت
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15, // هيبدأ يظهر لما 15% من العنصر يبان
  },
);

// بنقول له راقب كل العناصر اللي واخدة كلاس hidden
document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});
