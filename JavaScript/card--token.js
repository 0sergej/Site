var isInViewportToken = function (elem) {
    var distance = elem.getBoundingClientRect()
    return (
        distance.top <=
        (window.innerHeight || document.documentElement.clientHeight)
    )
}
var textToken = document.querySelector('.card--title--token')
var cardToken = document.querySelector('.about__card--token')

window.addEventListener(
    'scroll',
    function (event) {
        isInViewportToken(textToken) ?
            cardToken.classList.add('visible') : false
    },
    false
)