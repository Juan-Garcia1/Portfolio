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
    const landersBtn = document.querySelector("#landers-btn");
    const emailBtn = document.querySelector("#email-btn");
    const projectsList = document.querySelector("#projects-list");
    const landersList = document.querySelector("#landers-list");
    const emailsList = document.querySelector("#emails-list");

    // when web button is clicked, display list of web projects only
    webBtn.addEventListener("click", function() {
      emailBtn.classList.remove("active");
      landersBtn.classList.remove("active");
      this.classList.add("active");
      emailsList.style.display = "none";
      landersList.style.display = "none";
      projectsList.style.display = "";
    });
    // when email button is clicked, display list of emails projects only
    emailBtn.addEventListener("click", function() {
      webBtn.classList.remove("active");
      landersBtn.classList.remove("active");
      this.classList.add("active");
      emailsList.style.display = "block";
      projectsList.style.display = "none";
      landersList.style.display = "none";
    });
    // when lander button is clicked, display list of landing projects only
    landersBtn.addEventListener("click", function() {
      webBtn.classList.remove("active");
      emailBtn.classList.remove("active");
      this.classList.add("active");
      landersList.style.display = "block";
      emailsList.style.display = "none";
      projectsList.style.display = "none";
    });
  });
});
