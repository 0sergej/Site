const navBtn = document.querySelector('.nav__open');
const heroBtnRight = document.querySelector('.hero__btn--right');
const heroBtnLeft = document.querySelector('.hero__btn--left')

let navOpen = false;

navBtn.addEventListener('click', () =>
{
    if (!navOpen)
    {
        navBtn.classList.add('close');
        navBtn.classList.remove('open');
        heroBtnLeft.classList.remove('disabled');
        heroBtnRight.classList.remove('disabled');
        navOpen = true;
    }
    else
    {
        navBtn.classList.remove('close');
        navBtn.classList.add('open');
        heroBtnLeft.classList.add('disabled');
        heroBtnRight.classList.add('disabled');
        navOpen = false
    }
});