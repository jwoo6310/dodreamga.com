// script.js
/* Background Transition */
document.addEventListener("DOMContentLoaded", function () {
  const backgroundElement = document.querySelector(".background-image");
  let currentIndex = parseInt(sessionStorage.getItem("backgroundIndex")) || 1;
  function changeBackgroundImage(backgroundNumber) {
    backgroundElement.style.backgroundImage = `url('../assets/image-background${backgroundNumber}.jpg')`;
    currentIndex = backgroundNumber;
    sessionStorage.setItem("backgroundIndex", currentIndex);
  }
  setInterval(function () {
    currentIndex = (currentIndex % 3) + 1;
    changeBackgroundImage(currentIndex);
  }, 10000); // Change image every 10 seconds
  changeBackgroundImage(currentIndex);
});
