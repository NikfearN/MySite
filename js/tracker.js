function trackPageView() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageName = getPageName(currentPage);
    
    console.log(`Tracking: ${pageName}`);
 
    let sessionHistory = JSON.parse(sessionStorage.getItem('sessionHistory')) || {};
    sessionHistory[pageName] = (sessionHistory[pageName] || 0) + 1;
    sessionStorage.setItem('sessionHistory', JSON.stringify(sessionHistory));

    let allTimeHistory = JSON.parse(localStorage.getItem('allTimeHistory')) || {};
    allTimeHistory[pageName] = (allTimeHistory[pageName] || 0) + 1;
    localStorage.setItem('allTimeHistory', JSON.stringify(allTimeHistory));
    
    console.log('Session History:', sessionHistory);
    console.log('All Time History:', allTimeHistory);
}

function getPageName(pageFile) {
    const pageNames = {
        'index.html': 'Главная',
        'about.html': 'Обо мне',
        'interests.html': 'Мои интересы',
        'study.html': 'Учеба',
        'album.html': 'Фотоальбом',
        'contact.html': 'Контакт',
        'test.html': 'Тест',
        'history.html': 'История просмотра'
    };
    
    return pageNames[pageFile] || pageFile;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackPageView);
} else {
    trackPageView();
}