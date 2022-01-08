const headerNav = document.querySelector('.header__nav');

let headerNavOpen = true;

navBtn.addEventListener('click', () =>
{
    if (!headerNavOpen)
    {
        headerNav.classList.add('close');
        headerNav.classList.remove('open');
        headerNavOpen = true;
    }
    else
    {
        headerNav.classList.remove('close');
        headerNav.classList.add('open');
        headerNavOpen = false;
    }
});