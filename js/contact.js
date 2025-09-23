document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const elements = form.elements;

    for (let el of elements) {
        if (el.hasAttribute("required") && !el.value.trim()) {
            alert("Пожалуйста, заполните все обязательные поля!");
            el.focus();
            return;
        }
        if (el.type === "radio") {
            const radios = form.querySelectorAll(`input[name="${el.name}"]`);
            if (![...radios].some(r => r.checked)) {
                alert("Пожалуйста, выберите значение для поля " + el.name);
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

    const phone = form.phone ? form.phone.value.trim() : "";
    if (phone) {
        if (!/^\+([37]\d{8,10})$/.test(phone)) {
            alert("Телефон должен начинаться с +7 или +3, содержать только цифры и иметь 9–11 цифр после кода");
            form.phone.focus();
            return;
        }
    }


    const gender = form.gender.value;
    const age = form.age.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent("Сообщение с сайта");
    const body = encodeURIComponent(
        `ФИО: ${fullname}\nТелефон: ${phone}\nПол: ${gender}\nВозраст: ${age}\nEmail: ${email}\nСообщение:\n${message}`
    );

    window.location.href = `mailto:example@example.example?subject=${subject}&body=${body}`;
});
