const navBtn = document.querySelector('.nav__open');
let navOpen = false;

navBtn.addEventListener('click', () =>
{
    if (!navOpen)
    {
        navBtn.classList.add('close');
        navBtn.classList.remove('open');
        navOpen = true;
    }
    else
    {
        navBtn.classList.remove('close');
        navBtn.classList.add('open');
        navOpen = false;
    }
});