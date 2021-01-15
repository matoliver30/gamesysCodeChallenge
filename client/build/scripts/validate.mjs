import $ from './query.mjs';
import formRules from './formRules.mjs';

const createFormHelp = (name, message, error = false) => {
    const help = document.createElement('small');
    help.id = `${name}-help`;
    help.innerText = message;
    help.classList.add('form-text');
    help.classList.add(`text-${error ? 'danger' : 'muted'}`);

    return help;
}

export default name => {
    const input = $(`#${name}`);

    try {
        const rule = formRules.find(f => f.name === name);
        rule.validate(input);

        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        let help = $(`#${name}-help`);
        
        if (rule.defaultHelp) {
            if (help) {
                help.innerText = rule.defaultHelp;
                help.classList.remove('text-danger');
                help.classList.add('text-muted');
            } else {
                help = createFormHelp(name, rule.defaultHelp);
            }
        } else {
            if (help) help.parentNode.removeChild(help);
        }

        return true;
    } catch (e) {
        let help = $(`#${name}-help`);

        if (help) {
           help.innerText = e.message;
           help.classList.remove('text-muted');
           help.classList.add('text-danger');
        } else {
            help = createFormHelp(name, e.message, true);
            input.parentNode.appendChild(help);
        }

        input.classList.remove('is-valid');
        input.classList.add('is-invalid');

        return false;
    }
}