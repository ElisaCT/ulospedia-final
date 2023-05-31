import { defineRule, configure, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';

defineRule('minLength', (value, [limit]) => {
    if (!value || !value.length) {
        return true;
    }
    if (value.length < limit) {
        return false;
    }
    return true;
});

// Customize the error messages
localize({
    en: {
        messages: {
            minLength: (field, [limit]) =>
                `This field must be at least ${limit} characters`,
        },
    },
});

// Configure VeeValidate
configure({
    validateOnInput: true,
});