const toggleModal = () => {
    document.querySelector('.modal--hidden').classList.toggle('.modal');
};

document.querySelector('.checking-out').addEventListener('click', toggleModal);

