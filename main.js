const slideList = [{
    img: "images/img1.jpg",
    text: 'Pierwszy tekst'
}, {
    img: "images/img2.jpg",
    text: 'Drugi tekst'
}, {
    img: "images/img3.jpg",
    text: 'Trzeci tekst'
}]

const image = document.querySelector('img.slider')
const h1 = document.querySelector('h1.slider')
const dots = [...document.querySelectorAll('.dots span')]
// interface
const time = 3000
let active = 0
let inter
// implementacja

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'))
    dots[activeDot].classList.remove('active')
    dots[active].classList.add('active')
}

const changeSlide = () => {
    active++
    if (active >= slideList.length) {
        active = 0
    } else if (active < 0) {
        active = 2
    }
    image.src = slideList[active].img
    h1.textContent = slideList[active].text
    console.log(active);
    changeDot()

}

const keyChangeSlide = (e) => {
    clearInterval(inter)
    if (e.keyCode === 37) { //do tyłu w lewo
        if (active <= 0) {
            active = 1
            changeSlide()

        } else if (active === 2 || active === 1) {
            active -= 2
            changeSlide() // +1
        }

    } else if (e.keyCode === 39) {
        changeSlide()
        console.log('prawo');

    }
    inter = setInterval(changeSlide, time)
}

inter = setInterval(changeSlide, time)

window.addEventListener('keydown', keyChangeSlide)
