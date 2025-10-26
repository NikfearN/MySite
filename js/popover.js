$(document).ready(function() {
    // Создаем стили для popover
    $('<style>')
        .text(`
            .popover {
                position: absolute;
                background: #333;
                color: white;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 14px;
                z-index: 1000;
                max-width: 250px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                opacity: 0;
                transition: opacity 0.3s;
            }
            .popover:after {
                content: '';
                position: absolute;
                border: 6px solid transparent;
            }
            .popover.top:after {
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-top-color: #333;
            }
            .popover.bottom:after {
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-bottom-color: #333;
            }
        `)
        .appendTo('head');

    // Функция для создания popover
    $.fn.popover = function(options) {
        const settings = $.extend({
            content: '',
            position: 'top',
            delay: 2000 // M = 2 секунды по умолчанию
        }, options);

        return this.each(function() {
            const $element = $(this);
            let popover = null;
            let hideTimeout = null;

            $element.on('mouseenter', function() {
                // Отменяем предыдущий таймер скрытия
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    hideTimeout = null;
                }

                // Создаем popover если его нет
                if (!popover) {
                    popover = $('<div class="popover"></div>')
                        .addClass(settings.position)
                        .text(settings.content)
                        .appendTo('body');
                }

                // Позиционируем popover
                positionPopover($element, popover, settings.position);
                
                // Показываем popover
                popover.css('opacity', 1);
            });

            $element.on('mouseleave', function() {
                if (popover) {
                    // Устанавливаем таймер скрытия
                    hideTimeout = setTimeout(() => {
                        popover.css('opacity', 0);
                    }, settings.delay);
                }
            });

            // Функция позиционирования popover
            function positionPopover($element, $popover, position) {
                const elementRect = $element[0].getBoundingClientRect();
                const popoverRect = $popover[0].getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

                let top, left;

                switch (position) {
                    case 'top':
                        top = elementRect.top + scrollTop - popoverRect.height - 10;
                        left = elementRect.left + scrollLeft + (elementRect.width - popoverRect.width) / 2;
                        break;
                    case 'bottom':
                        top = elementRect.bottom + scrollTop + 10;
                        left = elementRect.left + scrollLeft + (elementRect.width - popoverRect.width) / 2;
                        break;
                }

                $popover.css({
                    top: top + 'px',
                    left: left + 'px'
                });
            }
        });
    };

    // Применяем popover к элементам форм
    $('#fullname').popover({
        content: 'Формат: Фамилия Имя Отчество (три слова через пробел)',
        position: 'top',
        delay: 2000
    });

    $('#phone').popover({
        content: 'Формат: +7XXXXXXXXX или +3XXXXXXXXX (9-11 цифр после кода)',
        position: 'top',
        delay: 2000
    });

    $('#email').popover({
        content: 'Формат: example@domain.com',
        position: 'top',
        delay: 2000
    });

    $('#birthdate').popover({
        content: 'Нажмите для выбора даты из календаря',
        position: 'top',
        delay: 2000
    });

    // Для тестовой формы
    $('input[name="question1"]').popover({
        content: 'Выберите один из вариантов ответа',
        position: 'top',
        delay: 2000
    });

    $('select[name="question2"]').popover({
        content: 'Выберите правильный элемент из списка',
        position: 'top',
        delay: 2000
    });

    $('textarea[name="question3"]').popover({
        content: 'Ответ должен содержать не менее 35 слов',
        position: 'top',
        delay: 2000
    });
});