import { galleryItems } from './gallery-items.js';
// Change code below this line
 const gallery = document.querySelector(".gallery");
 
 const markup = galleryItems.map(
  (galleryItem) => 
  `<div class = "gallery__item">
    <a class = "gallery__link" href = ${galleryItem.original}>
    <img class = "gallery__image"
    src = ${galleryItem.preview}
    data-source = ${galleryItem.original}
    alt = '${galleryItem.description}'
    />
    </a>
  </div>`
 );
 gallery.insertAdjacentHTML("beforeend",markup.join(""));
 function onGalleryClick(event){
  event.preventDefault();
  const {target} = event;
  const selectedUrl = target.dataset.source;

  if(target.nodeName !=='IMG'){
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${selectedUrl}" width="800" height="600">
`)

    instance.show()
 }

 gallery.addEventListener("click", onGalleryClick);

