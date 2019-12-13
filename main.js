const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const auto = true
const intervalTime = 5000
let slideInterval

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current')

    //Remove current class
    current.classList.remove('current')
    
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current')
    } else {
        slides[0].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'))
}


const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current')

    //Remove current class
    current.classList.remove('current')
    
    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current')
    } else {
        slides[slides.length - 1].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'))
}

next.addEventListener('click', e => {
    nextSlide()
    if(auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime)
    }
})

prev.addEventListener('click', e => {
    prevSlide()
    if(auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime)
    }
})

//Auto Slide
if(auto) {
    //Run next slide at interval time
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide,intervalTime)
}
