const revealables = document.querySelectorAll(".section, .metric-card, .site-footer");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealables.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
