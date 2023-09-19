//timer
function countTimer(targertDate, targetId){

  const elements = document.querySelectorAll('.bid-timer')
  //Обновление каждую секунду
  setInterval (function (){
      //Переменные в виде времени сейчас и конечного времени отсчета
    let nowData = new Date().getTime()
    let distance = targertDate - nowData
  
  //Преобразуем данные времени в привычный формат
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = (days * 24) + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  //Цикл подсчета и присвоения каждому элементу класса .bid-timer уникального id
  for(let i = 0; i < elements.length; i++){
    elements[i].id = 'element_' + i
    }
    //Форматирование элемента
    const formattedTime = `${hours.toString()}:${minutes.toString()}:${seconds.toString()}`;
    //Подставление отформатированного элемента
    document.getElementById(targetId).innerHTML = formattedTime;
  }, 1000)
}

let count1= new Date('Oct 21, 2023 10:39:25').getTime();
let count2 = new Date('Oct 13, 2023 16:39:25').getTime();
let count3 = new Date('Oct 9, 2023 16:39:25').getTime();

countTimer(count1, 'element_0');
countTimer(count2, 'element_1');
countTimer(count3, 'element_2');



//navigation bar
const openBtn = document.querySelector('.nav-open')
const closeBtn = document.querySelector('.nav-close')
const nav = document.querySelectorAll('.nav')

openBtn.addEventListener('click', () => {
  nav.forEach(navEl => {
    navEl.classList.add('visible')
  })
})

closeBtn.addEventListener('click', () => {
  nav.forEach(navEl => {
    navEl.classList.remove('visible')
  })
})

async function setupSlider(sliderClass, rightBtnClass, leftBtnClass) {
  const sliders = [...document.querySelectorAll(sliderClass)];
  const rightBtns = [...document.querySelectorAll(rightBtnClass)];
  const leftBtns = [...document.querySelectorAll(leftBtnClass)];

  sliders.forEach((slider, i) => {
    let containerDimension = slider.getBoundingClientRect();
    let containerWidth = containerDimension.width;


    rightBtns[i].addEventListener('click', () => {
      slider.scrollLeft += containerWidth;
    });

    leftBtns[i].addEventListener('click', () => {
      slider.scrollLeft -= containerWidth;
    });
  });
}

// Используем функцию для настройки слайдеров и кнопок
setupSlider('.bid-slider-elem', '.btn-sl-right', '.btn-sl-left');
setupSlider('.popular-elements', '.arr-right', '.arr-left');