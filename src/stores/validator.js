import { defineRule, configure } from 'vee-validate';
//import en from 'vee-validate/dist/locale/en.json';

defineRule('minLength', (value, [limit]) => {
    if (!value || !value.length) {
        return true;
    }
    if (value.length < limit) {
        return false;
    }
    return true;
});

defineRule('fileType', (value) => {
    if (!value) {
        return true;
    }
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    const fileExtension = value.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
        return 'format gambar harus .png, .jpg, jpeg'
    }
    return true;
})

defineRule('fileSize', (value) => {
    if (!value) {
        return true;
    }
    const maxSizeInBytes = 5 * 1024 * 1024;
    if (value.size > maxSizeInBytes) {
        return 'Ukuran gambar tidak boleh lebih dari 5 MB'
    }
    return true;
})

// Customize the error messages
// localize({
//     en: {
//         messages: {
//             minLength: (field, [limit]) =>
//                 `This field must be at least ${limit} characters`,
//         },
//     },
// });

// Configure VeeValidate
configure({
    validateOnInput: true,
});