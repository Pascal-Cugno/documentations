const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider-content-slide')
const sliderBtns = document.querySelector('.slider-btns')
const sliderSpeed = 6000;
let index = 0;

const app = () => {
    const createBtns = () => {
        slides.forEach((slide, index) => {
            const btn = document.createElement('button');
            btn.className = 'slider-btn';
            btn.setAttribute('data-slide', index);
            sliderBtns.appendChild(btn);
        })
    }
    
    const slideHandle = () => {
        const btns = document.querySelectorAll('.slider-btn');
        btns.forEach(btn => {
            let slideIndex = parseInt(btn.dataset.slide);

            btn.addEventListener('click', () => {
                slideActive(index = slideIndex);
            })
        })
    }
    
    const slideActive = (id) => {
        if(id >= slides.length) 0;

        slides.forEach(slide => {
            slide.classList.remove('active');
        })

        slides[index].classList.add('active');
    }
    
    createBtns();
    slideHandle();
}

document.addEventListener('DOMContentLoaded', app);