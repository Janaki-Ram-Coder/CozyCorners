"use strict";

// add event on element

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.bdoy.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);


// Header & back to top btn active when window scroll down to 100px

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const showElemOnScroll = function () {
   if (window.scrollY > 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
   } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
   }
}

addEventOnElem(window, "scroll", showElemOnScroll);

// Login page Script 
// Toggle Login Modal
document.querySelector('[aria-label="user"]').addEventListener('click', () => {
  document.getElementById('loginModal').classList.toggle('hidden');
});

// Dummy login
function loginUser() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user && pass) {
    alert(`Welcome, ${user}!`);
    document.getElementById('loginModal').classList.add('hidden');
  } else {
    alert("Please enter username and password.");
  }
}


// Product filter

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterBox = document.querySelector("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
   lastClickedFilterBtn.classList.remove("active");
   this.classList.add("active");
   lastClickedFilterBtn = this;

   filterBox.setAttribute("data-filter", this.dataset.filterBtn)
}

addEventOnElem(filterBtns, "click", filter);