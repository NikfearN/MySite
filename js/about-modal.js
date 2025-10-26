$(document).ready(function() {
    const techInfo = {
        'html': {
            title: 'HTML',
            content: `
                <div class="tech-modal-content">
                    <p><strong>HTML (HyperText Markup Language)</strong> - стандартный язык разметки для создания веб-страниц. Использую семантическую верстку для улучшения доступности и SEO-оптимизации.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Семантические теги HTML5</li>
                        <li>Доступность (ARIA-атрибуты)</li>
                        <li>Формы и валидация</li>
                        <li>Мультимедийные элементы</li>
                        <li>Оптимизация для поисковых систем</li>
                    </ul>
                </div>
            `
        },
        'css': {
            title: 'CSS',
            content: `
                <div class="tech-modal-content">
                    <p><strong>CSS (Cascading Style Sheets)</strong> - язык стилей для описания внешнего вида веб-страниц. Создаю адаптивные и современные интерфейсы.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Flexbox и Grid Layout</li>
                        <li>Адаптивный дизайн (Mobile First)</li>
                        <li>CSS анимации и transitions</li>
                        <li>CSS переменные (Custom Properties)</li>
                        <li>Препроцессоры SASS/SCSS</li>
                        <li>Методология БЭМ</li>
                    </ul>
                </div>
            `
        },
        'javascript': {
            title: 'JavaScript',
            content: `
                <div class="tech-modal-content">
                    <p><strong>JavaScript</strong> - язык программирования для создания интерактивных веб-страниц. Пишу чистый и поддерживаемый код.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>ES6+ синтаксис</li>
                        <li>Асинхронное программирование</li>
                        <li>Работа с DOM и событиями</li>
                        <li>ООП и функциональное программирование</li>
                        <li>Модульная архитектура</li>
                        <li>Работа с REST API</li>
                    </ul>
                </div>
            `
        },
        'react': {
            title: 'React.js',
            content: `
                <div class="tech-modal-content">
                    <p><strong>React.js</strong> - JavaScript-библиотека для создания пользовательских интерфейсов. Разрабатываю компонентные приложения.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Функциональные компоненты и хуки</li>
                        <li>React Router для навигации</li>
                        <li>Управление состоянием приложения</li>
                        <li>Работа с формами и валидацией</li>
                        <li>Оптимизация производительности</li>
                    </ul>
                </div>
            `
        },
        'vue': {
            title: 'Vue.js',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Vue.js</strong> - прогрессивный фреймворк для создания пользовательских интерфейсов. Изучаю для расширения навыков фронтенд разработки.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Composition API</li>
                        <li>Реактивная система данных</li>
                        <li>Vue Router и Vuex</li>
                        <li>Однофайловые компоненты</li>
                        <li>Директивы и фильтры</li>
                    </ul>
                </div>
            `
        },
        'nodejs': {
            title: 'Node.js',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Node.js</strong> - среда выполнения JavaScript на стороне сервера. Использую для создания серверных приложений.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Создание REST API</li>
                        <li>Работа с файловой системой</li>
                        <li>Асинхронное программирование</li>
                        <li>Потоки и буферы</li>
                        <li>Создание CLI приложений</li>
                    </ul>
                </div>
            `
        },
        'express': {
            title: 'Express.js',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Express.js</strong> - минималистичный веб-фреймворк для Node.js. Использую для быстрой разработки серверных приложений.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Создание RESTful API</li>
                        <li>Middleware функции</li>
                        <li>Роутинг и параметры URL</li>
                        <li>Обработка ошибок</li>
                        <li>Шаблонизаторы</li>
                    </ul>
                </div>
            `
        },
        'python': {
            title: 'Python',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Python</strong> - высокоуровневый язык программирования с простым синтаксисом. Использую для различных задач разработки.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Веб-разработка (Django, Flask)</li>
                        <li>Анализ данных и научные вычисления</li>
                        <li>Автоматизация задач и скрипты</li>
                        <li>Объектно-ориентированное программирование</li>
                        <li>Работа с базами данных</li>
                    </ul>
                </div>
            `
        },
        'django': {
            title: 'Django',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Django</strong> - высокоуровневый Python веб-фреймворк. Использую для создания полнофункциональных веб-приложений.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>MVC архитектура (MTV в Django)</li>
                        <li>ORM для работы с базами данных</li>
                        <li>Django REST Framework</li>
                        <li>Встроенная админ-панель</li>
                        <li>Система аутентификации</li>
                    </ul>
                </div>
            `
        },
        'php': {
            title: 'PHP',
            content: `
                <div class="tech-modal-content">
                    <p><strong>PHP</strong> - серверный язык программирования для веб-разработки. Использую для создания динамических сайтов.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Создание веб-приложений</li>
                        <li>Работа с базами данных</li>
                        <li>Сессии и cookies</li>
                        <li>Интеграция с HTML</li>
                        <li>Объектно-ориентированное программирование</li>
                    </ul>
                </div>
            `
        },
        'java': {
            title: 'Java',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Java</strong> - объектно-ориентированный язык программирования. Изучаю для создания кроссплатформенных приложений.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Кроссплатформенность (JVM)</li>
                        <li>Объектно-ориентированное программирование</li>
                        <li>Многопоточность</li>
                        <li>Безопасность типов</li>
                        <li>Богатая стандартная библиотека</li>
                    </ul>
                </div>
            `
        },
        'mysql': {
            title: 'MySQL',
            content: `
                <div class="tech-modal-content">
                    <p><strong>MySQL</strong> - реляционная система управления базами данных. Использую для хранения и управления данными приложений.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Создание и оптимизация SQL-запросов</li>
                        <li>Проектирование схемы базы данных</li>
                        <li>Транзакции и ACID свойства</li>
                        <li>Индексы и их оптимизация</li>
                        <li>JOIN операции и подзапросы</li>
                    </ul>
                </div>
            `
        },
        'postgresql': {
            title: 'PostgreSQL',
            content: `
                <div class="tech-modal-content">
                    <p><strong>PostgreSQL</strong> - продвинутая объектно-реляционная СУБД. Использую для сложных проектов с требованием к надежности.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Расширенные типы данных</li>
                        <li>Поддержка JSON и JSONB</li>
                        <li>Сложные запросы и оконные функции</li>
                        <li>Геопространственные данные</li>
                        <li>Триггеры и хранимые процедуры</li>
                    </ul>
                </div>
            `
        },
        'sqlite': {
            title: 'SQLite',
            content: `
                <div class="tech-modal-content">
                    <p><strong>SQLite</strong> - встраиваемая реляционная СУБД. Использую для мобильных приложений и небольших проектов.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Безсерверная архитектура</li>
                        <li>Легковесность и простота</li>
                        <li>Локальное хранение данных</li>
                        <li>Идеально для прототипирования</li>
                        <li>Кроссплатформенность</li>
                    </ul>
                </div>
            `
        },
        'redis': {
            title: 'Redis',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Redis</strong> - хранилище структур данных в памяти. Использую для кэширования и повышения производительности.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Кэширование данных</li>
                        <li>Хранение сессий</li>
                        <li>Очереди сообщений</li>
                        <li>Публикация/подписка</li>
                        <li>Структуры данных в памяти</li>
                    </ul>
                </div>
            `
        },
        'git': {
            title: 'Git & GitHub',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Git & GitHub</strong> - система контроля версий и платформа для хостинга проектов. Использую для командной разработки.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Ветвление и слияние кода</li>
                        <li>Code review и Pull Requests</li>
                        <li>GitHub Actions (CI/CD)</li>
                        <li>Управление проектами</li>
                        <li>Решение конфликтов</li>
                    </ul>
                </div>
            `
        },
        'docker': {
            title: 'Docker',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Docker</strong> - платформа для контейнеризации приложений. Использую для создания изолированных сред разработки.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Контейнеризация приложений</li>
                        <li>Docker Compose для оркестрации</li>
                        <li>Создание образов Docker</li>
                        <li>Управление контейнерами</li>
                        <li>Деплой приложений</li>
                    </ul>
                </div>
            `
        },
        'vscode': {
            title: 'VS Code',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Visual Studio Code</strong> - текстовый редактор с богатыми возможностями. Основной инструмент для разработки.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Интегрированный отладчик</li>
                        <li>Git интеграция</li>
                        <li>Богатая экосистема расширений</li>
                        <li>IntelliSense и автодополнение</li>
                        <li>Терминал и интеграция с CLI</li>
                    </ul>
                </div>
            `
        },
        'figma': {
            title: 'Figma',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Figma</strong> - инструмент для дизайна интерфейсов. Использую для прототипирования и создания макетов.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Создание прототипов и макетов</li>
                        <li>Collaboration в реальном времени</li>
                        <li>Компоненты и стили</li>
                        <li>Экспорт ресурсов</li>
                        <li>Интерактивные прототипы</li>
                    </ul>
                </div>
            `
        },
        'rest': {
            title: 'REST API',
            content: `
                <div class="tech-modal-content">
                    <p><strong>REST API</strong> - архитектурный стиль для веб-сервисов. Использую для создания API серверов.</p>
                    <p>Основные принципы:</p>
                    <ul>
                        <li>HTTP методы (GET, POST, PUT, DELETE)</li>
                        <li>Статус коды ответов</li>
                        <li>JSON форматы данных</li>
                        <li>Безсостояние (stateless)</li>
                        <li>Единообразие интерфейса</li>
                    </ul>
                </div>
            `
        },
        'graphql': {
            title: 'GraphQL',
            content: `
                <div class="tech-modal-content">
                    <p><strong>GraphQL</strong> - язык запросов для API. Использую для эффективного получения данных.</p>
                    <p>Основные возможности:</p>
                    <ul>
                        <li>Запросы только нужных данных</li>
                        <li>Единая конечная точка (endpoint)</li>
                        <li>Строгая типизация</li>
                        <li>Интроспекция схемы</li>
                        <li>Клиент-определяемые запросы</li>
                    </ul>
                </div>
            `
        },
        'responsive': {
            title: 'Responsive Web Design',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Responsive Web Design</strong> - подход к созданию сайтов, которые корректно отображаются на различных устройствах.</p>
                    <p>Основные принципы:</p>
                    <ul>
                        <li>Mobile First подход</li>
                        <li>Медиа-запросы CSS</li>
                        <li>Гибкие сетки и изображения</li>
                        <li>Адаптивная типографика</li>
                        <li>Тестирование на разных устройствах</li>
                    </ul>
                </div>
            `
        },
        'crossbrowser': {
            title: 'Cross-browser compatibility',
            content: `
                <div class="tech-modal-content">
                    <p><strong>Cross-browser compatibility</strong> - обеспечение одинакового отображения сайта в разных браузерах.</p>
                    <p>Основные подходы:</p>
                    <ul>
                        <li>Тестирование в различных браузерах</li>
                        <li>Использование вендорных префиксов</li>
                        <li>Полифиллы для старых браузеров</li>
                        <li>Прогрессивное улучшение</li>
                        <li>Graceful degradation</li>
                    </ul>
                </div>
            `
        }
    };

    // Обработчики для ссылок технологий
    $('.tech-link').on('click', function(e) {
        e.preventDefault();
        const tech = $(this).data('tech');
        if (techInfo[tech]) {
            $(this).customModal({
                title: techInfo[tech].title,
                content: techInfo[tech].content
            });
        } else {
            // Если информации нет, показываем общее сообщение
            $(this).customModal({
                title: 'Информация о технологии',
                content: '<p>Подробная информация об этой технологии будет добавлена в ближайшее время.</p>'
            });
        }
    });

    // Добавляем стили для модального контента
    $('<style>')
        .text(`
            .tech-modal-content p {
                margin-bottom: 15px;
                line-height: 1.6;
            }
            .tech-modal-content ul {
                margin: 15px 0;
                padding-left: 25px;
            }
            .tech-modal-content li {
                margin-bottom: 8px;
                line-height: 1.5;
            }
            .tech-modal-content strong {
                color: #2c3e50;
                font-weight: 600;
            }
        `)
        .appendTo('head');
});