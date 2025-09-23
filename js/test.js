document.getElementById("testForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const elements = form.elements;

    for (let el of elements) {
        if (el.hasAttribute("required") && !el.value.trim()) {
            alert("Заполните все обязательные поля!");
            el.focus();
            return;
        }
        if (el.type === "radio") {
            const radios = form.querySelectorAll(`input[name="${el.name}"]`);
            if (![...radios].some(r => r.checked)) {
                alert("Выберите ответ для " + el.name);
                el.focus();
                return;
            }
        }
    }

    const fullname = form.fullname.value.trim();
    if (!/^\S+\s\S+\s\S+$/.test(fullname)) {
        alert("ФИО должно содержать три слова, разделённые одним пробелом");
        form.fullname.focus();
        return;
    }

    const q3 = form.question3.value.trim();
    const wordCount = q3.split(/\s+/).filter(w => w).length;
    if (wordCount < 35) {
        alert("Ответ на 3-й вопрос должен содержать не менее 35 слов");
        form.question3.focus();
        return;
    }

    const group = form.group.value;
    const q1 = form.question1.value;
    const q2 = form.question2.value;

    const subject = encodeURIComponent("Результаты теста");
    const body = encodeURIComponent(
        `ФИО: ${fullname}\nГруппа: ${group}\n\n` +
        `Вопрос 1: ${q1}\n` +
        `Вопрос 2: ${q2}\n` +
        `Вопрос 3: ${q3}`
    );

    window.location.href = `mailto:example@example.example?subject=${subject}&body=${body}`;
});
