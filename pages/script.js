// script.js
document.addEventListener("DOMContentLoaded", function () {
  const backgroundContainer = document.querySelector(".background-image");
  let currentIndex = parseInt(sessionStorage.getItem("backgroundIndex"), 10) || 0;
  const imageCount = 4;

  // Create two divs for double buffering
  const back1 = document.createElement("div");
  const back2 = document.createElement("div");
  back1.className = back2.className = "background-cover";
  backgroundContainer.appendChild(back1);
  backgroundContainer.appendChild(back2);

  // Preload images
  const images = [];
  for (let i = 0; i < imageCount; i++) {
    images[i] = new Image();
    images[i].src = `../assets/image-background${i + 1}.jpg`;
  }

  let visibleBack = back1, hiddenBack = back2;

  // Load the initial image
  visibleBack.style.backgroundImage = `url('${images[currentIndex].src}')`;
  visibleBack.style.opacity = 1;
  hiddenBack.style.opacity = 0;

  // Function to handle the transition
  function changeBackground() {
    currentIndex = (currentIndex + 1) % imageCount;

    // Set the next image on the hidden background
    hiddenBack.style.backgroundImage = `url('${images[currentIndex].src}')`;

    // Transition effect
    visibleBack.style.opacity = 0;
    hiddenBack.style.opacity = 1;

    // Swap the roles of visible and hidden backgrounds
    let temp = visibleBack;
    visibleBack = hiddenBack;
    hiddenBack = temp;
  }

  // Delay the first transition
  setTimeout(function() {
    setInterval(changeBackground, 7000); // Change every 7 seconds
  }, 7000);
});

// Toggle menu visibility
const menu = document.getElementById("menu");
menu.style.display = 'none'; // Ensure the menu is hidden at start

window.toggleMenu = function() {
  menu.style.display = menu.style.display === "none" ? "flex" : "none";
};
