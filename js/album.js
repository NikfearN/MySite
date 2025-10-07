const fotos = [
    "./src/album/sticker.webp",
    "./src/album/sticker1.webp",
    "./src/album/sticker2.webp",
    "./src/album/sticker3.webp",
    "./src/album/sticker4.webp",
    "./src/album/sticker5.webp",
    "./src/album/sticker6.webp",
    "./src/album/sticker7.webp",
    "./src/album/sticker8.webp",
    "./src/album/sticker9.webp",
    "./src/album/sticker10.webp",
    "./src/album/sticker11.webp",
    "./src/album/sticker12.webp",
    "./src/album/sticker13.webp",
    "./src/album/sticker14.webp"
];

const titles = [
    "Стикер 1", "Стикер 2", "Стикер 3", "Стикер 4", "Стикер 5",
    "Стикер 6", "Стикер 7", "Стикер 8", "Стикер 9", "Стикер 10",
    "Стикер 11", "Стикер 12", "Стикер 13", "Стикер 14", "Стикер 15"
];

const photosPerRow = 4;

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; 

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="modal-close">&times;</span>
        <img class="modal-content">
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('.modal-content');
    const closeBtn = modal.querySelector('.modal-close');

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    for (let i = 0; i < fotos.length; i += photosPerRow) {
        const row = document.createElement('div');
        row.className = 'photo-row';

        for (let j = i; j < i + photosPerRow && j < fotos.length; j++) {
            const photoItem = document.createElement('figure');
            photoItem.className = 'photo-item';
            
            const img = document.createElement('img');
            img.src = fotos[j];
            img.alt = titles[j];
            img.loading = "lazy";

            const caption = document.createElement('figcaption');
            caption.textContent = titles[j];

            img.addEventListener('click', function() {
                modalImg.src = this.src;
                modal.style.display = 'flex';
            });

            photoItem.appendChild(img);
            photoItem.appendChild(caption);
            row.appendChild(photoItem);
        }

        gallery.appendChild(row);
    }
});