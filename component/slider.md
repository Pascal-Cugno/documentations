# Slider

## HTML

```html
<div class="slider">
  <div class="slider__content">
    <div class="slider__content__slide active">
      <div class="slider__content__slide__image">
        <img src="https://images.unsplash.com/photo-1668574213268-15c328d44fba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzEwMjE2OTY&ixlib=rb-4.0.3&q=80" alt="">
      </div>
      <h2 class="slider__content__slide__title"><span class="green">Lorem ipsum dolor</span> sit amet consectetur, adipisicing elit.</h2>
    </div>
    <div class="slider__content__slide">
      <div class="slider__content__slide__image">
        <img src="https://images.unsplash.com/photo-1668778304484-a9fac5b3a4a2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzEwMjE2OTY&ixlib=rb-4.0.3&q=80" alt="">
      </div>
      <h2 class="slider__content__slide__title"><span class="green">Lorem ipsum dolor</span> sit amet consectetur, adipisicing elit.</h2>
    </div>
    <div class="slider__content__slide">
      <div class="slider__content__slide__image">
        <img src="https://images.unsplash.com/photo-1668843979335-ead8624b4893?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzEwMjE2OTY&ixlib=rb-4.0.3&q=80" alt="">
      </div>
      <h2 class="slider__content__slide__title"><span class="green">Lorem ipsum dolor</span> sit amet consectetur, adipisicing elit.</h2>
    </div>
  </div>
  <div class="slider__btns"></div>
</div>
```


## SCSS

```scss
body{
  height: 100vh;
  display:flex;
  justify-content: center;
}

img{
  width: 100%;
}

.slider{
  width: 800px;
  height: 300px;
  position: relative;
  
  &__content{
    height: 100%;
    position: relative;
    
    &__slide{
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      transition: all 2s;
      
      &__image{
        overflow: hidden;
        
        img{
          transition: transform 15s;  
          transition-delay: 0.5s;
        }
      }
      
      &.active{
        opacity: 1;
        visibility: visible;
          
          img{
            transform: scale(1.05);
            // animation: zoom 10s linear;
          }
      }
      
      &__image{
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      
      &__title{
        color: green;
        width: 60%;
        padding: 0 0 0 20px;
        
        .green{
          color: white;
          margin-left: -20px;
          padding: 0 10px 0 20px;
          background-color: green;
        }
      }
    }
  }
  
  &__btns{
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    background: green;
    
    .slider__btn{
      width: 10px;
      height: 10px;
      margin: 0 5px;
      padding: 0;
      border: none;
      border-radius: 50%;
      
      &.active{
        animation: slideActiveBtn 0.5s linear alternate infinite;
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.5);
      }
    }
  }
}

@keyframes slideActiveBtn{
  100%{
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
  }
}

@keyframes zoom{
  100%{
    transform: scale(1.3);
  }
}
```

## JavaScript

```js
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider__content__slide');
const sliderBtns = document.querySelector('.slider__btns');
const sliderTime = 6000;
let slideId = 0;

const createSlideBtn = () => {
  slides.forEach((slide, index) => {
    const btn = document.createElement('button');
    btn.className = (index === 0) ? 'slider__btn active' : 'slider__btn';
    btn.setAttribute('data-slide', index);

    sliderBtns.appendChild(btn);
  })
};

const slideHandle = () => {
  const sliderBtns = document.querySelectorAll('.slider__btn');
  
  sliderBtns.forEach(btn => {
    let slideIndex = parseInt(btn.dataset.slide);
    
    btn.addEventListener('click', () => {
      console.log(slideIndex);
      slideActive(slideId = slideIndex);
    });
  })
};

const slideActive = index => {
  console.log(slideId);
  if(index >= slides.length) slideId = 0;
  
  slides.forEach(slide => {
    slide.classList.remove('active');
  })
  slides[slideId].classList.add('active');
  
  const sliderBtns = document.querySelectorAll('.slider__btn');
  sliderBtns.forEach(btn => {
    btn.classList.remove('active')
  })
  sliderBtns[slideId].classList.add('active');
};

const slideAuto = () => {
  setInterval(() => {
    slideActive(slideId = slideId + 1);
  }, sliderTime);
};

createSlideBtn();
slideHandle();
slideAuto();
```
