
const social = document.querySelector(".social")

let socialOpen = false;

social.addEventListener('click', () =>
{
    if (!socialOpen)
    {
        social.classList.add('open');
        social.classList.remove('close');
        socialOpen = true;
    }
    else
    {
        social.classList.add('close');
        social.classList.remove('open');
        socialOpen = false;
    }
});