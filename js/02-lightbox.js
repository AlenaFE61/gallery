import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function createGalleryMarkup(array) {
  return array.map((item) =>
  `<a class= "gallery__item" href="${item.original}">
  <img class ="gallery__image" src="${item.preview}"
  alt="${item.description}"/>
  </a>`).join("");
}

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

let lightbox = new SimpleLightbox(".gallery a");
