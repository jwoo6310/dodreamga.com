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
    images[i].src = `assets/image-background${i + 1}.jpg`;
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



$(document).ready(function() {
  // Gallery image hover
  $(".img-wrapper").hover(
    function() {
      $(this).find(".img-overlay").animate({ opacity: 1 }, 600);
    },
    function() {
      $(this).find(".img-overlay").animate({ opacity: 0 }, 600);
    }
  );

  // Lightbox
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
  var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
  var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$overlay
  .append($image)
  .prepend($prevButton)
  .append($nextButton)
  .append($exitButton);
$("#gallery").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
$(".img-overlay").click(function (event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $image.attr("src", imageLocation);
  // Fade in the overlay
  $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function () {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function (event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $images = $("#image-gallery img");
  // If there is a next image
  if ($nextImg.length > 0) {
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function (event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function () {
  // Fade out the overlay
  $("#overlay").fadeOut("slow");
});

});

document.addEventListener('DOMContentLoaded', function() {
  var menu = document.getElementById("menu");
  menu.style.display = 'none'; // Ensures the menu is hidden at the start
});
function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "none" ? "flex" : "none";
}
