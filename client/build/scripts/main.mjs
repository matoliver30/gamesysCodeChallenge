import $ from './query.mjs';
import validate from './validate.mjs';
import formRules from './formRules.mjs';

formRules.forEach(({ name }) => {
    const el = $(`#${name}`);

    el.addEventListener('change', () => validate(name));
});

$('#form').addEventListener('submit', evt => {
    evt.preventDefault();

    const valid = formRules
        .reduce((prev, { name }) => {
            const isValid = validate(name);
            return prev && isValid;
        }, true);

    if (valid) {
        $('#form').innerHTML = `
            <h1>Success!</h1>
            <p>
                You have been successfully registered!
            </p>
        `;
    }
});