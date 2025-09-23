function createList(containerId, type = "ul", ...items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const list = document.createElement(type);

    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
    });

    container.appendChild(list);
}

createList("hobby-list", "ul",
    "Разрабатывать pet-проекты на JavaScript и Python",
    "Изучать новые фреймворки и библиотеки",
    "Читать техническую литературу и документацию"
);

createList("books-list", "ol",
    "<strong>\"Грокаем алгоритмы\"</strong> - Адитья Бхаргава",
    "<strong>\"Чистый код\"</strong> - Роберт Мартин",
    "<strong>\"Пикник на обочине\"</strong> - Братья Стругацкие",
    "<strong>\"Похоже, я доигрался\"</strong> - Николай Новиков"
);

createList("music-list", "ul",
    "<strong>Рок:</strong> Three Days Grace, Linkin Park, Twenty One Pilots",
    "<strong>Металл:</strong> Bring Me The Horizon, Five Finger Death Punch, Disturbed",
    "<strong>Эпическая оркестровая:</strong> Two Steps From Hell, Audiomachine, Really Slow Motion"
);

createList("games-list", "ul",
    "<strong>The Witcher 3: Wild Hunt</strong> - за глубину сюжета",
    "<strong>Cyberpunk 2077</strong> - за геймдизайн и юмор",
    "<strong>Baldur's Gate 3</strong> - за сюжет и геймплей",
    "<strong>Sekiro: Shadow Die Twice</strong> - для релаксации",
    "<strong>Hollow Knight</strong> - за визуальную составляющую"
);

createList("sports-list", "ul",
    "Занятия в зале 2 раза в неделю",
    "Плавание в летний период",
    "Пешие походы в горы Крыма"
);
