import throttle from 'lodash.throttle';

const ref = {
    inputEmail: document.querySelector('[name="email"]'),
    inutMessage: document.querySelector('[name="message"]'),
    form: document.querySelector('.feedback-form'),
};
const STORAGE_KEY = 'feedback-form-state';

ref.form.addEventListener('input', throttle(onFormInput, 500));
ref.form.addEventListener('submit', onFormSubmit);

let savedData;
try {
    savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
} catch(error) {
    console.error('Error parsing saved data:', error);
}

if (savedData) {
    ref.inputEmail.value = savedData.email || '';
    ref.inutMessage.value = savedData.message || '';
}

ref.form.addEventListener('input', throttle(onFormInput, 500));
ref.form.addEventListener('submit', onFormSubmit);

function onFormInput() {
    const data = {
        email: ref.inputEmail.value.trim(),
        message: ref.inutMessage.value.trim(),
    };

   try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch(error) {
    console.log('Error saving data to localStorage:', error);
  }
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
        data[name] = value.trim();
    });

    console.log(data);

    try {
    localStorage.removeItem(STORAGE_KEY);
    } catch(error) {
        console.log('Error removing saved data from localStorage:', error);
    }
    
    ref.form.reset();
}
