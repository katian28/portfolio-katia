// Get the elements
const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu");

// Toggle the side navigation
menuBtn.onclick = function () {
  // Check if the sideNav is hidden (off-screen)
  if (sideNav.style.right === "-250px" || sideNav.style.right === "") {
    // Show the sideNav
    sideNav.style.right = "0";
    // Change the menu icon to close
    menu.src = "/images/close.png";
  } else {
    // Hide the sideNav
    sideNav.style.right = "-250px";
    // Change the menu icon back to menu
    menu.src = "/images/menu.png";
  }
};


var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 700,
  speedAsDuration: true,
});
