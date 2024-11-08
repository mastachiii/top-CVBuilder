const personalInfo = {
    fullName: 'John Doe',
    email: 'johndoenotfound@hotmail.com',
    phone: '123456789',
    gitHub: 'gitDoe',
    linkedIn: 'linkedDoe',
};

function activateForm({ callback, className, targetClass, targetIndex }) {
    return () => {
        const activeElement = document.querySelector(`.${targetClass}`);
        const targetElements = document.querySelectorAll(`.${className}`);
        const editor = document.querySelector('.editor'); // Re-style the editor to acommmodate form.

        editor.classList.toggle('editor-active');
        targetElements[targetIndex].classList.add(targetClass);
        targetElements.forEach((element, index) => {
            if (index !== targetIndex) element.style.display = 'none';
        });
        if (activeElement) activeElement.classList.remove(targetClass);

        callback();
    };
}

// Basically the previous function in reverse, I could refactor the previous one and add conditionals
// but that would make it messier than it already is.
function disableForm({ callback, className, targetClass }) {
    return () => {
        const activeElement = document.querySelector(`.${targetClass}`);
        const targetElements = document.querySelectorAll(`.${className}`);
        const editor = document.querySelector('.editor');

        editor.classList.remove('editor-active');
        if (activeElement) activeElement.classList.toggle(targetClass);
        targetElements.forEach((element) => {
            element.style.display = 'flex';
        });

        callback();
    };
}

export { personalInfo, activateForm, disableForm };
