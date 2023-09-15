// // Функция для отображения разрешения экрана
// function displayScreenResolution() {
//    // Получаем ширину и высоту экрана с помощью объекта window
//    var screenWidth = window.screen.width;
//    var screenHeight = window.screen.height;
   
//    // Выводим разрешение на странице или в консоли
//    var resolutionString = "Разрешение экрана: " + screenWidth + "x" + screenHeight;
//    console.log(resolutionString);
//    // Здесь вы можете выбрать, куда выводить разрешение, например, на страницу или в модальное окно
   
//    // Если вы хотите обновлять разрешение при изменении размеров окна браузера, добавьте обработчик события resize:
//    window.addEventListener("resize", function() {
//      screenWidth = window.screen.width;
//      screenHeight = window.screen.height;
//      resolutionString = "Разрешение экрана: " + screenWidth + "x" + screenHeight;
//      console.log(resolutionString);
//      // Обновите разрешение при изменении размеров окна
//    });
//  }
 
//  // Вызываем функцию для отображения разрешения экрана при загрузке страницы
//  displayScreenResolution();
 

//Slider
// const left = document.querySelector('.btn-sl-left')
// const right = document.querySelector('.btn-sl-right')

// function handleClick(){
//   console.log('click')
// }

// left.addEventListener('click', handleClick)
// right.addEventListener('click', handleClick)

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