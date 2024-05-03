// script.js
/* Background Transition */
document.addEventListener("DOMContentLoaded", function () {
  const backgroundElement = document.querySelector(".background-image");
  let currentIndex = parseInt(sessionStorage.getItem("backgroundIndex"), 10) || 0;

  // Preload images to avoid flickering during transitions
  const imageCount = 4;
  const images = [];
  for (let i = 1; i <= imageCount; i++) {
    images[i] = new Image();
    images[i].src = `assets/image-background${i}.jpg`;
  }

  // Apply the initial background image
  backgroundElement.style.backgroundImage = `url('${images[currentIndex + 1].src}')`;

  setInterval(function () {
    currentIndex = (currentIndex + 1) % imageCount;
    backgroundElement.style.backgroundImage = `url('${images[currentIndex + 1].src}')`;
    sessionStorage.setItem("backgroundIndex", currentIndex);
  }, 7000); // change every 7 seconds
});

/* Youtube */
$(document).ready(function() {
  const apiKey = 'AIzaSyDNVB-FtBheiZx_4zaY0tC31Nc9VWaGmM0';
  const channelId = 'UC-YSiZ8LPKGur2MVHN95slQ';

  // Fetch and embed YouTube video
  const fetchVideo = async (targetElement) => {
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
            $(targetElement).html(iframe);
        }
    } catch (error) {
        console.error('Error fetching YouTube video:', error);
    }
};

// Usage:
fetchVideo('.youtube-video');
fetchVideo('.youtube-mobile');


  // Toggle menu visibility
  const menu = document.getElementById("menu");
  menu.style.display = 'none'; // Ensure the menu is hidden at start

  window.toggleMenu = function() {
    menu.style.display = menu.style.display === "none" ? "flex" : "none";
  };
});
