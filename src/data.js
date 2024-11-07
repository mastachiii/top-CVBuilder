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
        console.log(targetElement);
        targetElement[targetIndex].classList.add(targetClass);
        if (prevElement) prevElement.classList.remove(targetClass);

        callback();
    };
}

export { personalInfo, toggleActiveClass };
