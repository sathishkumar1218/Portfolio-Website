/*  Resume Button hide And Show Function */
document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var resumeButton = document.getElementById("resumeButton");

  navbarToggler.addEventListener("click", function () {
    if (window.innerWidth < 992) {
      resumeButton.classList.toggle("d-none");
    }
  });
});

/*  Alert message for get in touch section */


document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event triggered");

  // Handle contact form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
      alert("Message sent successfully!");
      this.reset(); // Clear the form fields
    });
  }

  // Handle navigation link styling
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Apply base style to all nav links
  navLinks.forEach(link => {
    link.style.textDecoration = "none";
  });

  // Get current page filename (e.g., "about.html")
  const currentPage = window.location.pathname.split("/").pop().toLowerCase();

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    const linkPage = href.split("/").pop().toLowerCase();

    if (
      currentPage === linkPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.style.textDecoration = "underline";
      link.style.textDecorationColor = "red";
      link.style.textUnderlineOffset = "6px";
      link.style.fontWeight = "bold";
      link.style.padding = "5px";
      link.style.fontSize = "1.3rem"; // Highlight active
    } else {
      link.style.fontSize = "1rem"; // Normal for others
    }
  });
});



