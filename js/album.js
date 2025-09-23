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

const gallery = document.querySelector('.gallery');
gallery.innerHTML = ''; 

let currentRow;
for (let i = 0; i < fotos.length; i++) {
    if (i % photosPerRow === 0) {
        currentRow = document.createElement('div');
        currentRow.className = 'photo-row';
        gallery.appendChild(currentRow);
    }

    const figure = document.createElement('figure');
    figure.className = 'photo-item';
    const img = document.createElement('img');
    img.src = fotos[i];
    img.alt = titles[i];
    img.title = titles[i];
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = titles[i];
    figure.appendChild(img);
    figure.appendChild(figcaption);
    currentRow.appendChild(figure);
}