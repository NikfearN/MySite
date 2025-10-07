function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    if (!datetimeElement) return;
    
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const month = months[now.getMonth()];
    
    const year = now.getFullYear().toString().slice(-2);
    
    datetimeElement.textContent = `${hours}:${minutes}:${seconds} ${month} ${year}`;
}

setInterval(updateDateTime);
updateDateTime();