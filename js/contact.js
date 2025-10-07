document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    initCalendar();
    
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
            updateSubmitButton();
        });
        
        if (input.type === 'radio') {
            input.addEventListener('change', function() {
                const groupName = this.name;
                const group = form.querySelectorAll(`input[name="${groupName}"]`);
                validateRadioGroup(group);
                updateSubmitButton();
            });
        }
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            const subject = encodeURIComponent("Сообщение с сайта");
            const body = encodeURIComponent(
                `ФИО: ${data.fullname}\nТелефон: ${data.phone}\nПол: ${data.gender}\n` +
                `Дата рождения: ${data.birthdate}\nВозраст: ${data.age}\n` +
                `Email: ${data.email}\nСообщение:\n${data.message}`
            );
            
            window.location.href = `mailto:example@example.example?subject=${subject}&body=${body}`;
        }
    });
    
    form.addEventListener('reset', function() {
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
        });
   
        inputs.forEach(input => {
            input.classList.remove('valid', 'invalid');
        });
        
        submitBtn.disabled = true;
    });
});

function validateField(field) {
    const errorElement = document.getElementById(`${field.name}-error`);
    
    field.classList.remove('valid', 'invalid');
    if (errorElement) errorElement.style.display = 'none';
    
    let isValid = true;
    let errorMessage = '';
    
    switch (field.name) {
        case 'fullname':
            if (!field.value.trim()) {
                errorMessage = 'Поле обязательно для заполнения';
                isValid = false;
            } else if (!/^\S+\s\S+\s\S+$/.test(field.value.trim())) {
                errorMessage = 'ФИО должно содержать три слова, разделённые одним пробелом';
                isValid = false;
            }
            break;
            
        case 'phone':
            if (!field.value.trim()) {
                errorMessage = 'Поле обязательно для заполнения';
                isValid = false;
            } else if (!/^\+([37]\d{8,10})$/.test(field.value.trim())) {
                errorMessage = 'Телефон должен начинаться с +7 или +3, содержать только цифры и иметь 9–11 цифр после кода';
                isValid = false;
            }
            break;
            
        case 'email':
            if (!field.value.trim()) {
                errorMessage = 'Поле обязательно для заполнения';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                errorMessage = 'Введите корректный email адрес';
                isValid = false;
            }
            break;
            
        case 'age':
            if (!field.value) {
                errorMessage = 'Поле обязательно для заполнения';
                isValid = false;
            }
            break;
            
        case 'message':
            if (!field.value.trim()) {
                errorMessage = 'Поле обязательно для заполнения';
                isValid = false;
            } else if (field.value.trim().length < 10) {
                errorMessage = 'Сообщение должно содержать не менее 10 символов';
                isValid = false;
            }
            break;
            
        case 'birthdate':
            if (!field.value) {
                errorMessage = 'Поле обязательно для заполнения';
                isValid = false;
            }
            break;
    }
    
    if (isValid) {
        field.classList.add('valid');
    } else {
        field.classList.add('invalid');
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
        }
    }
    
    return isValid;
}

function validateRadioGroup(radioGroup) {
    const groupName = radioGroup[0].name;
    const errorElement = document.getElementById(`${groupName}-error`);
    const isChecked = Array.from(radioGroup).some(radio => radio.checked);
    
    if (errorElement) {
        if (!isChecked) {
            errorElement.textContent = 'Выберите один из вариантов';
            errorElement.style.display = 'block';
        } else {
            errorElement.style.display = 'none';
        }
    }
    
    return isChecked;
}

function updateSubmitButton() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    let allValid = true;
    
    inputs.forEach(input => {
        if (input.type === 'radio') {
            const groupName = input.name;
            const group = form.querySelectorAll(`input[name="${groupName}"]`);
            if (!validateRadioGroup(group)) {
                allValid = false;
            }
        } else {
            if (!validateField(input)) {
                allValid = false;
            }
        }
    });
    
    submitBtn.disabled = !allValid;
}

function initCalendar() {
    const birthdateInput = document.getElementById('birthdate');
    const calendar = document.getElementById('calendar');
    
    birthdateInput.addEventListener('focus', function() {
        calendar.style.display = 'block';
        renderCalendar(new Date());
    });
    
    document.addEventListener('click', function(e) {
        if (!birthdateInput.contains(e.target) && !calendar.contains(e.target)) {
            calendar.style.display = 'none';
        }
    });
    
    calendar.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

function renderCalendar(date) {
    const calendar = document.getElementById('calendar');
    const currentDate = new Date(date);
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const monthNames = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    
    calendar.innerHTML = `
        <div class="calendar-header">
            <button onclick="changeMonth(-1)">‹</button>
            <div>
                <select onchange="changeYear(this.value)">
                    ${generateYearOptions(year)}
                </select>
                <select onchange="changeMonthBySelect(this.value)">
                    ${generateMonthOptions(month)}
                </select>
            </div>
            <button onclick="changeMonth(1)">›</button>
        </div>
        <div class="calendar-grid">
            <div class="calendar-day">Пн</div>
            <div class="calendar-day">Вт</div>
            <div class="calendar-day">Ср</div>
            <div class="calendar-day">Чт</div>
            <div class="calendar-day">Пт</div>
            <div class="calendar-day">Сб</div>
            <div class="calendar-day">Вс</div>
            ${generateCalendarDays(year, month)}
        </div>
    `;
}

function generateYearOptions(currentYear) {
    let options = '';
    for (let year = currentYear - 100; year <= currentYear; year++) {
        options += `<option value="${year}" ${year === currentYear ? 'selected' : ''}>${year}</option>`;
    }
    return options;
}

function generateMonthOptions(currentMonth) {
    const monthNames = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    
    let options = '';
    monthNames.forEach((name, index) => {
        options += `<option value="${index}" ${index === currentMonth ? 'selected' : ''}>${name}</option>`;
    });
    return options;
}

function generateCalendarDays(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    

    let firstDayOfWeek = firstDay.getDay();
    if (firstDayOfWeek === 0) firstDayOfWeek = 7; 
    firstDayOfWeek--; 
    
    let daysHtml = '';
    
    for (let i = 0; i < firstDayOfWeek; i++) {
        daysHtml += `<div class="calendar-day other-month"></div>`;
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        daysHtml += `<div class="calendar-day" onclick="selectDate(${day}, ${month}, ${year})">${day}</div>`;
    }
    
    return daysHtml;
}

function changeMonth(delta) {
    const calendar = document.getElementById('calendar');
    const yearSelect = calendar.querySelector('select:first-child');
    const monthSelect = calendar.querySelector('select:last-child');
    
    let year = parseInt(yearSelect.value);
    let month = parseInt(monthSelect.value) + delta;
    
    if (month < 0) {
        month = 11;
        year--;
    } else if (month > 11) {
        month = 0;
        year++;
    }
    
    yearSelect.value = year;
    monthSelect.value = month;
    renderCalendar(new Date(year, month));
}

function changeYear(newYear) {
    const calendar = document.getElementById('calendar');
    const monthSelect = calendar.querySelector('select:last-child');
    const month = parseInt(monthSelect.value);
    
    renderCalendar(new Date(newYear, month));
}

function changeMonthBySelect(newMonth) {
    const calendar = document.getElementById('calendar');
    const yearSelect = calendar.querySelector('select:first-child');
    const year = parseInt(yearSelect.value);
    
    renderCalendar(new Date(year, newMonth));
}

function selectDate(day, month, year) {
    const birthdateInput = document.getElementById('birthdate');
    const calendar = document.getElementById('calendar');
    
    const formattedDate = `${String(day).padStart(2, '0')}.${String(month + 1).padStart(2, '0')}.${year}`;
    birthdateInput.value = formattedDate;
    calendar.style.display = 'none';
    
    validateField(birthdateInput);
    updateSubmitButton();
}