var isInViewportGamaplay = function (elem) {
    var distance = elem.getBoundingClientRect()
    return (
        distance.top <=
        (window.innerHeight || document.documentElement.clientHeight)
    )
}
var textGameplay = document.querySelector('.card--text--gameplay')
var cardGameplay = document.querySelector('.about__card--gameplay')

window.addEventListener(
    'scroll',
    function (event) {
        isInViewportGamaplay(textGameplay)
            ? cardGameplay.classList.add('visible')
            : false
    },
    false
)
