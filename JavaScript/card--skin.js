var isInViewportSkin = function (elem) {
    var distance = elem.getBoundingClientRect()
    return (
        distance.top <=
        (window.innerHeight || document.documentElement.clientHeight)
    )
}

var textSkin = document.querySelector('.card--text--skin')
var cardSkin = document.querySelector('.about__card--skin')

window.addEventListener(
    'scroll',
    function (event) {
        isInViewportSkin(textSkin) ? cardSkin.classList.add('visible') : false
    },
    false
)
