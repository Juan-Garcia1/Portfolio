document
  .querySelector(".view-projects-btn")
  .addEventListener("click", function() {
    TweenLite.to(window, 0.75, { scrollTo: "#projects" });
  });
