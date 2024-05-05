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

  // Initial setup
  visibleBack.style.backgroundImage = `url('${images[currentIndex].src}')`;

  setInterval(function () {
    currentIndex = (currentIndex + 1) % imageCount;

    // Swap backgrounds
    hiddenBack.style.backgroundImage = `url('${images[currentIndex].src}')`;
    hiddenBack.style.zIndex = 2;
    visibleBack.style.zIndex = 1;
    // Fade effect
    hiddenBack.style.opacity = 1;
    visibleBack.style.opacity = 0;

    // Swap roles
    let temp = visibleBack;
    visibleBack = hiddenBack;
    hiddenBack = temp;
    sessionStorage.setItem("backgroundIndex", currentIndex);
  }, 7000); // Change every 7 seconds
});

/* Youtube */
$(document).ready(function() {
  const apiKey = 'AIzaSyCsGt0RmRMHdgAsQA08GcTjUWKte9N6xAc';
  const channelId = 'UC-YSiZ8LPKGur2MVHN95slQ';

  // Fetch and embed YouTube video
  const fetchVideo = async (targetElements) => {
    try {
        const response = await $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search',
            type: 'GET',
            data: {
                part: 'snippet',
                channelId: channelId,
                maxResults: 1,
                order: 'date',
                type: 'video',
                key: apiKey
            }
        });

        if (response.items.length > 0) {
            const videoId = response.items[0].id.videoId;
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            const iframe = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
            $(targetElements).html(iframe);
        }
    } catch (error) {
        console.error('Error fetching YouTube video:', error);
    }
};

// Usage: Fetch video once and apply to both elements
fetchVideo('.youtube-video, .youtube-mobile');

  // Toggle menu visibility
  const menu = document.getElementById("menu");
  menu.style.display = 'none'; // Ensure the menu is hidden at start

  window.toggleMenu = function() {
    menu.style.display = menu.style.display === "none" ? "flex" : "none";
  };
});