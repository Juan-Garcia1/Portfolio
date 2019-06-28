document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
    document.querySelector(".loader").classList.add("finished-loading");
    document.querySelector("body").style.overflow = "auto";
    // scroll to projects section
    document
      .querySelector(".view-projects-btn")
      .addEventListener("click", function() {
        TweenLite.to(window, 0.75, { scrollTo: "#projects" });
      });
  });
});
