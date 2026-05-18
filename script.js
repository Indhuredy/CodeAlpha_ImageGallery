const images = [
  "https://picsum.photos/id/1015/800/600",
  "https://picsum.photos/id/1016/800/600",
  "https://picsum.photos/id/1018/800/600",
  "https://picsum.photos/id/1020/800/600"
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex];
}