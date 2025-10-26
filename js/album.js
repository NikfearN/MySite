$(document).ready(function() {
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
        "Стикер 1 - Веселый стикер с улыбкой",
        "Стикер 2 - Стикер с сердечком", 
        "Стикер 3 - Стикер с котиком",
        "Стикер 4 - Стикер с собакой",
        "Стикер 5 - Стикер с пандой",
        "Стикер 6 - Стикер с единорогом",
        "Стикер 7 - Стикер с радугой",
        "Стикер 8 - Стикер со звездами",
        "Стикер 9 - Стикер с луной",
        "Стикер 10 - Стикер с солнцем",
        "Стикер 11 - Стикер с облаками",
        "Стикер 12 - Стикер с деревом",
        "Стикер 13 - Стикер с цветком",
        "Стикер 14 - Стикер с бабочкой",
        "Стикер 15 - Стикер с птичкой"
    ];

    const photosPerRow = 4;
    let currentImageIndex = 0;

    const gallery = $('.gallery');
    gallery.empty();

    for (let i = 0; i < fotos.length; i += photosPerRow) {
        const row = $('<div class="photo-row"></div>');

        for (let j = i; j < i + photosPerRow && j < fotos.length; j++) {
            const photoItem = $('<figure class="photo-item"></figure>');
            
            const img = $('<img>')
                .attr('src', fotos[j])
                .attr('alt', titles[j])
                .attr('title', titles[j]);
            
            const caption = $('<figcaption></figcaption>').text(titles[j].split(' - ')[0]);
            
            photoItem.append(img);
            photoItem.append(caption);
            row.append(photoItem);
        }

        gallery.append(row);
    }

    // Создание модального окна с навигацией
    const modal = $(`
        <div class="modal">
            <span class="modal-close">&times;</span>
            <button class="modal-nav modal-prev">‹</button>
            <div class="modal-image-container">
                <img class="modal-image">
                <div class="modal-caption"></div>
            </div>
            <button class="modal-nav modal-next">›</button>
        </div>
    `);
    $('body').append(modal);

    // Функция показа изображения в модальном окне с анимацией
    function showModalImage(index) {
        const modalImage = $('.modal-image');
        const modalCaption = $('.modal-caption');
        
        // Анимация смены изображения
        modalImage.fadeOut(200, function() {
            $(this).attr({
                'src': fotos[index],
                'alt': titles[index],
                'title': titles[index]
            });
            modalCaption.text(titles[index]);
            $(this).fadeIn(200);
        });
    }

    // Обработчики для миниатюр
    $('.photo-item img').on('click', function() {
        const index = $('.photo-item img').index(this);
        currentImageIndex = index;
        showModalImage(currentImageIndex);
        modal.fadeIn(300);
    });

    // Навигация вперед
    $('.modal-next').on('click', function() {
        currentImageIndex = (currentImageIndex + 1) % fotos.length;
        showModalImage(currentImageIndex);
    });

    // Навигация назад  
    $('.modal-prev').on('click', function() {
        currentImageIndex = (currentImageIndex - 1 + fotos.length) % fotos.length;
        showModalImage(currentImageIndex);
    });

    // Закрытие модального окна
    $('.modal-close, .modal').on('click', function(e) {
        if (e.target === this || $(e.target).hasClass('modal-close')) {
            modal.fadeOut(300);
        }
    });

    // Предотвращение закрытия при клике на изображение или навигацию
    $('.modal-image-container, .modal-nav').on('click', function(e) {
        e.stopPropagation();
    });

    // Навигация с клавиатуры
    $(document).on('keydown', function(e) {
        if (modal.is(':visible')) {
            switch(e.key) {
                case 'ArrowLeft':
                    $('.modal-prev').click();
                    break;
                case 'ArrowRight':
                    $('.modal-next').click();
                    break;
                case 'Escape':
                    modal.fadeOut(300);
                    break;
            }
        }
    });

    console.log('Галерея с навигацией инициализирована. Изображений: ' + fotos.length);
});