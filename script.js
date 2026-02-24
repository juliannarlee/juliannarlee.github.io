const COLUMN_COUNT = 2;
const INDEX = [
  "./assets/gallery/car.png",
  "./assets/gallery/huh.png",
  "./assets/gallery/linux.png",
  "./assets/gallery/lpng.webp",
  "./assets/gallery/rover-street1.jpg",
  "",
  "./assets/gallery/washanapple1.jpg"
];

let galleryClickCallback = (e) => {
  let card = e.target;
  let anchor = card.parentNode;
  let column = anchor.parentNode;

  if (location.href.includes("#" + anchor.id)) {
    location.href = "";
    // cleanup
  } else {
    location.href = "#" + anchor.id;
  }
}

window.onload = () => {
  let gallery = document.getElementById("mainGallery");

  for (let i = 0; i < COLUMN_COUNT; i++) {
    gallery.innerHTML += "<div id=\"galleryCol" + i + "\" class=\"galleryColumn\"></div>";
  }

  let galleryColumns = Array.from(document.querySelectorAll("#mainGallery > .galleryColumn"));

  INDEX.forEach((src, i) => {
    let columnIndex = i % galleryColumns.length;
    let id = "gallery" + i
    galleryColumns[columnIndex].innerHTML += "<a id=\"" + id + "\"><img class=\"galleryCard\" src=\"" + src + "\"></a>";
  });

  Array.from(document.querySelectorAll("a > .galleryCard")).forEach((target) => target.addEventListener("click", galleryClickCallback));
}

/*
  ~~- create columns in DOM~~

  ~~- add to columns as <a id="id"><img src="link"></a>~~
  
  on click image/column
	- resize gallery column to 100%
	- scroll to image anchor id
	- unhide blurb?
	- if selected, unselect
	- big transition forr col width css
*/
