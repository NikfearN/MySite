function initNavigation() {
    let datetimeElement = document.getElementById('datetime');
    if (!datetimeElement) {
        const header = document.querySelector('header');
        if (header) {
            datetimeElement = document.createElement('div');
            datetimeElement.className = 'datetime';
            datetimeElement.id = 'datetime';
            header.insertBefore(datetimeElement, header.querySelector('nav'));
        }
    }
    
    const nav = document.querySelector('nav ul');
    if (nav) {

        let hasHistoryItem = false;
        nav.querySelectorAll('a').forEach(link => {
            if (link.getAttribute('href') === 'history.html') {
                hasHistoryItem = true;
            }
        });
        
        if (!hasHistoryItem) {
            const historyItem = document.createElement('li');
            historyItem.innerHTML = '<a href="history.html">История просмотра</a>';
            nav.appendChild(historyItem);
        }
        
        const interestsItem = nav.querySelector('a[href="interests.html"]');
        if (interestsItem && !interestsItem.parentElement.classList.contains('dropdown')) {
            const interestsLi = interestsItem.parentElement;
            interestsLi.className = 'dropdown';
            
            const dropdownMenu = document.createElement('ul');
            dropdownMenu.className = 'dropdown-menu';
            dropdownMenu.innerHTML = `
                <li><a href="interests.html#hobby">Мое хобби</a></li>
                <li><a href="interests.html#books">Любимые книги</a></li>
                <li><a href="interests.html#music">Любимая музыка</a></li>
                <li><a href="interests.html#games">Любимые игры</a></li>
                <li><a href="interests.html#sports">Спорт и активность</a></li>
            `;
            
            interestsLi.appendChild(dropdownMenu);
        }
    }
}

document.addEventListener('DOMContentLoaded', initNavigation);