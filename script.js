const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => {
  sidebar.classList.toggle("close");

  // When closing the sidebar, reset the submenu state
  menuItems.forEach((item) => {
    item.classList.remove("show-submenu");
  });
  menu.classList.remove("submenu-active");
});

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    // When clicking a submenu title, close all submenus and reset the submenu state
    menuItems.forEach((item) => {
      item.classList.remove("show-submenu");
    });
    menu.classList.remove("submenu-active");
  });
});

const sidebarCloseIcon = document.getElementById('sidebar-close');
const hiddenMobileLink = document.getElementById('logo');

// Function to check and update the "hidden-mobile" link
function updateHiddenMobileLink() {
  const sidebar = document.querySelector('.sidebar');
  // Check if the menu is open (i.e., if the "show" class is present in the sidebar)
  const isMenuOpen = sidebar.classList.contains('show');

  if (isMenuOpen) {
    hiddenMobileLink.style.display = 'none'; // Hide the "hidden-mobile" element
  } else {
    hiddenMobileLink.style.display = 'inline-block'; // Show the "hidden-mobile" element
  }
}

// Call the function on page load to initialize the link visibility
updateHiddenMobileLink();

// Add an event listener to the sidebar close icon
sidebarCloseIcon.addEventListener('click', () => {
  // Toggle the "show" class on the sidebar when the menu is clicked
  document.querySelector('.sidebar').classList.toggle('show');
  // Call the function to update the link visibility when the menu is toggled
  updateHiddenMobileLink();
});

// Add an event listener to the window resize event to update the link visibility when the screen size changes
window.addEventListener('resize', () => {
  // Call the function to update the link visibility when the screen size changes
  updateHiddenMobileLink();
});
const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");
const cancelButton = document.getElementById("cancel-button");
const blurOverlay = document.getElementById("blur-overlay");

searchIcon.addEventListener("click", () => {
  // Hide the search icon
  searchIcon.style.display = "none";

  // Show the search input and cancel button
  searchInput.style.display = "inline-block";
  cancelButton.style.display = "inline-block";

  // Show the blur overlay
  blurOverlay.style.display = "block";
});

cancelButton.addEventListener("click", () => {
  // Hide the search input and cancel button
  searchInput.style.display = "none";
  cancelButton.style.display = "none";

  // Show the search icon
  searchIcon.style.display = "inline-block";

  // Hide the blur overlay
  blurOverlay.style.display = "none";
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatically change slides every 1 second
function autoSlide() {
  plusSlides(1);
}

// Start the automatic slideshow
let slideInterval = setInterval(autoSlide, 3500);

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Get the height of the navbar
  const navbarHeight = document.querySelector(".navbar").offsetHeight;

  // Get the slideshow container
  const slideshowContainer = document.querySelector(".slideshow-container");

  // Set the top position of the slideshow container
  slideshowContainer.style.top = `${28}px`;

  // Set the negative margin-top value to overlap the navbar
  slideshowContainer.style.marginTop = `-${28}px`;
  
});

  