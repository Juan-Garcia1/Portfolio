document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function() {
    document.querySelector(".loader").classList.add("finished-loading");
    document.querySelector("body").style.overflow = "auto";

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
      projectsList.style.display = "grid";
    });
    // when email button is clicked, display list of emails projects only
    emailBtn.addEventListener("click", function() {
      webBtn.classList.remove("active");
      landersBtn.classList.remove("active");
      wpBtn.classList.remove("active");
      this.classList.add("active");
      emailsList.style.display = "grid";
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
      landersList.style.display = "grid";
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
      wpList.style.display = "grid";
    });
  });
});

const projects = document.querySelectorAll(".project");

[...projects].forEach(function(project) {
  const tl = new TimelineMax({ paused: true });
  const projectBackground = project.querySelector(".project__background");
  const projectContent = project.querySelector(".project__content");

  tl.to(projectBackground, 0.5, {
    scale: 18
  }).to(projectContent, 0.4, { opacity: 1 }, "+=.04");

  project.addEventListener("mouseenter", function() {
    tl.play().timeScale(1.3);
  });

  project.addEventListener("mouseleave", function() {
    tl.reverse().timeScale(1.7);
  });
});
