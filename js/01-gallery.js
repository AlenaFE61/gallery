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
  onUrlClick(selectedUrl);
 }

 gallery.addEventListener("click", onGalleryClick);
 let intance = null;

 function OnUrlClose(event){
  if(event.code ==="Escape") {
    intance.close();
    console.log(event.code);
    document.removeEventListener("keydown", OnUrlClose);
  }
 }

 function onUrlClick(url){
  intance = basicLightbox.create(
    `<img src = "${url}`,
    { onShow: document.addEventListener("keydown", OnUrlClose)}
  );
  intance.show();
 }
