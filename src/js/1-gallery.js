// My images
import  {galleryItems} from "./gallery-items";

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



const galleryContainer = document.querySelector(".gallery");
const galleryCardsSet = createGallery(galleryItems);

function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
        <img class="gallery-image"
        src="${preview}"
        alt="${description}"
        />
        </a>
            </li>`;
        })
        .join('');
};

galleryContainer.insertAdjacentHTML('beforeend', galleryCardsSet);



const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});
