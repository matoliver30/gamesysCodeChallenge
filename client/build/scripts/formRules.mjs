import $ from './query.mjs';

export default [
    {
        name: 'username',
        validate: (el) => {
            const { value } = el;

            if (!value)
                throw new Error('Username is required');

            if (value.length < 3)
                throw new Error('Username is too short')

            if (!/^[a-zA-Z0-9]+$/.test(value))
                throw new Error('Username has invalid characters');

            return true;
        },
        defaultHelp: $('#username-help').innerText,
    },
    {
        name: 'password',
        validate: (el) => {
            const { value } = el;

            if (!value)
                throw new Error('Password is required');

            if (value.length < 7)
                throw new Error('Password is too short, it should have at lease 7 characters');

            if (!/[A-Z]+/g.test(value))
                throw new Error('Password must contain at least one uppercase letter');

            if (!/[a-z]+/g.test(value))
                throw new Error('Password must contain at least one lowercase letter');

            if (!/\d+/g.test(value))
                throw new Error('Password must contain at least one number');

            $('#cpassword').dispatchEvent(new CustomEvent('change'));

            return true;
        }
    },
    {
        name: 'cpassword',
        validate: (el) => {
            const { value } = el;

            if (!value)
                throw new Error('Password Confirmation is required');

            if (!value)
                throw new Error('Password Confirmation is required');

            if (value !== $('#password').value)
                throw new Error('Password Confirmation does not match password field');
        }
    },
    {
        name: 'termsandconditions',
        validate: (el) => {
            const { checked } = el;

            if (!checked)
                throw new Error('You must agree to the terms and conditions before proceeding');
        }
    }
];

