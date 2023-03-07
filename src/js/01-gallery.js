import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img 
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
         loading="lazy"
         />
    </a>
    </div>
    `;
        })
        .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
    enableKeyboard: true,
    captions: true,
    captionsSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
console.log(galleryItems);
