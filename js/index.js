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
    const wpBtn = document.querySelector("#wordpress-btn");
    const projectsList = document.querySelector("#projects-list");
    const landersList = document.querySelector("#landers-list");
    const emailsList = document.querySelector("#emails-list");
    const wpList = document.querySelector("#wordpress-list");

    // when web button is clicked, display list of web projects only
    webBtn.addEventListener("click", function() {
      emailBtn.classList.remove("active");
      landersBtn.classList.remove("active");
      wpBtn.classList.remove("active");
      this.classList.add("active");
      emailsList.style.display = "none";
      landersList.style.display = "none";
      wpList.style.display = "none";
      projectsList.style.display = "";
    });
    // when email button is clicked, display list of emails projects only
    emailBtn.addEventListener("click", function() {
      webBtn.classList.remove("active");
      landersBtn.classList.remove("active");
      wpBtn.classList.remove("active");
      this.classList.add("active");
      emailsList.style.display = "block";
      projectsList.style.display = "none";
      landersList.style.display = "none";
      wpList.style.display = "none";
    });
    // when lander button is clicked, display list of landing projects only
    landersBtn.addEventListener("click", function() {
      webBtn.classList.remove("active");
      emailBtn.classList.remove("active");
      wpBtn.classList.remove("active");
      this.classList.add("active");
      landersList.style.display = "block";
      emailsList.style.display = "none";
      projectsList.style.display = "none";
      wpList.style.display = "none";
    });
    // when wp button is clicked, display wp projects only
    wpBtn.addEventListener("click", function() {
      webBtn.classList.remove("active");
      landersBtn.classList.remove("active");
      emailBtn.classList.remove("active");
      this.classList.add("active");
      projectsList.style.display = "none";
      landersList.style.display = "none";
      emailsList.style.display = "none";
      wpList.style.display = "block";
    });
  });
});
