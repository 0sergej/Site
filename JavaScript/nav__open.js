const navBtn = document.querySelector('.nav__open--background');
const navAdd = document.querySelector('.nav__open')
const heroBtnRight = document.querySelector('.hero__btn--right');
const heroBtnLeft = document.querySelector('.hero__btn--left')

let navOpen = false;

navBtn.addEventListener('click', () =>
{
    if (!navOpen)
    {
        navAdd.classList.add('close');
        navAdd.classList.remove('open');
        heroBtnLeft.classList.remove('disabled');
        heroBtnRight.classList.remove('disabled');
        navOpen = true;
    }
    else
    {
        navAdd.classList.remove('close');
        navAdd.classList.add('open');
        heroBtnLeft.classList.add('disabled');
        heroBtnRight.classList.add('disabled');
        navOpen = false
    }
});