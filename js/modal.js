$(document).ready(function() {
    // Функция для создания модального окна
    $.fn.customModal = function(options) {
        const settings = $.extend({
            title: 'Модальное окно',
            content: 'Содержимое модального окна',
            onClose: null
        }, options);

        // Удаляем предыдущее модальное окно если есть
        $('.custom-modal-overlay').remove();

        // Создаем модальное окно
        const modalOverlay = $('<div class="custom-modal-overlay"></div>');
        const modal = $(`
            <div class="custom-modal">
                <button class="custom-modal-close">&times;</button>
                <h2 class="custom-modal-title">${settings.title}</h2>
                <div class="custom-modal-content">${settings.content}</div>
            </div>
        `);

        modalOverlay.append(modal);
        $('body').append(modalOverlay);

        // Показываем модальное окно с анимацией
        modalOverlay.fadeIn(300, function() {
            setTimeout(() => {
                modal.addClass('show');
            }, 50);
        });

        // Обработчики закрытия
        const closeModal = function() {
            modal.removeClass('show');
            setTimeout(() => {
                modalOverlay.fadeOut(300, function() {
                    $(this).remove();
                    if (typeof settings.onClose === 'function') {
                        settings.onClose();
                    }
                });
            }, 200);
        };

        $('.custom-modal-close, .custom-modal-overlay').on('click', function(e) {
            if (e.target === this || $(e.target).hasClass('custom-modal-close')) {
                closeModal();
            }
        });

        // Закрытие по ESC
        $(document).on('keydown.modal', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Предотвращаем закрытие при клике на само модальное окно
        modal.on('click', function(e) {
            e.stopPropagation();
        });

        // Убираем обработчик при уничтожении модального окна
        modalOverlay.on('remove', function() {
            $(document).off('keydown.modal');
        });

        return this;
    };

    // Автоматическая инициализация для элементов с data-modal
    $(document).on('click', '[data-modal]', function(e) {
        e.preventDefault();
        const $this = $(this);
        const title = $this.data('modal-title') || 'Информация';
        const content = $this.data('modal-content') || 'Содержимое модального окна';

        $(this).customModal({
            title: title,
            content: content,
            onClose: function() {
                console.log('Модальное окно закрыто');
            }
        });
    });
});