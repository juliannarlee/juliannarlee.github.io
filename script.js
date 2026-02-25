const COLUMN_COUNT = 3;
const INDEX = [
  "./assets/gallery/IMG_4628.JPG",
  "./assets/gallery/IMG_3942.JPG",
  "./assets/gallery/IMG_4693.JPG",
  "./assets/gallery/IMG_4694.JPG",
  "./assets/gallery/IMG_7244.jpeg",
  "./assets/gallery/IMG_7224.jpeg",
  "./assets/gallery/IMG_2642.JPG",
  "./assets/gallery/IMG_6629.jpg",
  "./assets/gallery/IMG_6630.jpg",
  "./assets/gallery/IMG_6631.jpg",
];

let gallery, galleryHead, galleryHeadImg;
let focusedElement;

let galleryClickCallback = (e) => {
  let img = e.target;

  // FIXME a dedicated backbutton would be less of an antipattern
  // and clean up the callback
  if (img == galleryHeadImg) {
   // Scroll the original back into view and hide the head
    galleryHead.hidden = true;
    focusedElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    focusedElement = null;
  } else {
    // Set te marker to jump back, then show the head and scroll
    focusedElement = img;
    galleryHead.hidden = false;
    galleryHeadImg.src = img.src;
    galleryHeadImg.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }
}

window.onload = () => {
  gallery = document.getElementById("mainGallery");
  galleryHead = document.getElementById("galleryHead");
  galleryHeadImg = document.getElementById("galleryHeadImg");

  for (let i = 0; i < COLUMN_COUNT; i++) {
    gallery.innerHTML += "<div class=\"galleryColumn\"></div>";
  }

  let galleryColumns = Array.from(document.querySelectorAll("#mainGallery > .galleryColumn"));

  INDEX.forEach((src, i) => {
    let columnIndex = i % galleryColumns.length;
    galleryColumns[columnIndex].innerHTML += "<div class=\"galleryCard\"><img class=\"galleryImg\" src=\"" + src + "\"></div>";
  });

  Array.from(document.querySelectorAll("img")).forEach((target) => target.addEventListener("click", galleryClickCallback));
}
