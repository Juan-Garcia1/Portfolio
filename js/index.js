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
    const webBtn = document.querySelector("#web-btn");
    const emailBtn = document.querySelector("#email-btn");
    const projectsList = document.querySelector("#projects-list");
    const emailsList = document.querySelector("#emails-list");

    // when web button is clicked, display list of web projects only
    webBtn.addEventListener("click", function() {
      emailBtn.classList.remove("active");
      this.classList.add("active");
      emailsList.style.display = "none";
      projectsList.style.display = "";
    });
    // when email button is clicked, display list of emails projects only
    emailBtn.addEventListener("click", function() {
      webBtn.classList.remove("active");
      this.classList.add("active");
      emailsList.style.display = "";
      projectsList.style.display = "none";
    });
  });
});
