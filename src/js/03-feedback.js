import throttle from 'lodash.throttle';

const ref = {
    inputEmail: document.querySelector('[name = "email"]'),
    inutMessage: document.querySelector('[name="message"]'),
    form: document.querySelector('.feedback-form'),
};
const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
    const parsedData = JSON.parse(savedData);
    ref.inputEmail.value = parsedData.email || '';
    ref.inutMessage.value = parsedData.message || '';
}

ref.form.addEventListener('input', throttle(onFormInput, 500));
ref.form.addEventListener('submit', onFormSubmit);

function onFormInput() {
    const data = {
        email: ref.inputEmail.value.trim(),
        message: ref.inutMessage.value.trim(),
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

function onFormSubmit(event) {
    event.preventDefault();

    const { email, message } = ref.form.elements;
    if (email.value === '' || message.value === '') {
        alert('Please fill in all the fields!');
        return;
    }

    const formData = new FormData(ref.form);
    const data = {};

    formData.forEach((value, name) => {
        data[name] = value;
    });

    console.log(data);
    localStorage.removeItem('feedback-form-state');
    ref.form.reset();
}
