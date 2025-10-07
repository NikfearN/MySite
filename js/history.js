document.addEventListener('DOMContentLoaded', function() {
    displayHistory();
    initClearButtons();
});

function displayHistory() {
    const sessionHistory = JSON.parse(sessionStorage.getItem('sessionHistory')) || {};
    displayTable('sessionHistory', sessionHistory, 'История текущего сеанса пуста');
    
    const allTimeHistory = JSON.parse(localStorage.getItem('allTimeHistory')) || {};
    displayTable('allTimeHistory', allTimeHistory, 'История за все время пуста');
}

function displayTable(tableId, history, emptyMessage) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    
    if (Object.keys(history).length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="2" class="empty-history">${emptyMessage}</td>`;
        tbody.appendChild(row);
    } else {
        const sortedEntries = Object.entries(history).sort((a, b) => b[1] - a[1]);
        
        sortedEntries.forEach(([page, count]) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${page}</td><td>${count}</td>`;
            tbody.appendChild(row);
        });
    }
}

function initClearButtons() {
    document.getElementById('clearSession')?.addEventListener('click', function() {
        if (confirm('Очистить историю текущего сеанса?')) {
            sessionStorage.removeItem('sessionHistory');
            displayHistory();
            alert('История сеанса очищена');
        }
    });
    
    document.getElementById('clearAll')?.addEventListener('click', function() {
        if (confirm('Очистить всю историю?')) {
            sessionStorage.removeItem('sessionHistory');
            localStorage.removeItem('allTimeHistory');
            displayHistory();
            alert('Вся история очищена');
        }
    });
}