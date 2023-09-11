const buttons = document.querySelectorAll('.button');

document.body.addEventListener('click', (event) => {
    buttons.forEach((button) => {
        const buttonLabel = button.querySelector('.button__label');
        const buttonIcon = button.querySelector('.button__button-icon');

        if (!button.contains(event.target)) {
            buttonLabel.classList.remove('show');
            buttonIcon.classList.remove('show');
        }
    });
});

buttons.forEach((button) => {
    const buttonLabel = button.querySelector('.button__label');
    const buttonIcon = button.querySelector('.button__button-icon');

    const onClickEvent = () => {
        buttonLabel.classList.toggle('show');
        buttonIcon.classList.toggle('show');
    }

    button.addEventListener('click', onClickEvent);
});