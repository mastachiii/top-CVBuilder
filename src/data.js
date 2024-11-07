const personalInfo = {
    fullName: '',
    email: '',
    phone: '',
    gitHub: '',
    linkedIn: '',
};

function toggleActiveClass({ callback, className, targetClass, targetIndex }) {
    return () => {
        const prevElement = document.querySelector(`.${targetClass}`);
        const targetElement = document.querySelectorAll(`.${className}`);
        const editor = document.querySelector('.editor'); // Re-style the editor to acommmodate form.

        editor.classList.toggle('editor-active');
        targetElement[targetIndex].classList.add(targetClass);
        targetElement.forEach((element, index) => {
            if (index !== targetIndex) element.style.display = 'none';
        });
        if (prevElement) prevElement.classList.remove(targetClass);

        callback();
    };
}

export { personalInfo, toggleActiveClass };
