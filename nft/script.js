// Функция для отображения разрешения экрана
function displayScreenResolution() {
   // Получаем ширину и высоту экрана с помощью объекта window
   var screenWidth = window.screen.width;
   var screenHeight = window.screen.height;
   
   // Выводим разрешение на странице или в консоли
   var resolutionString = "Разрешение экрана: " + screenWidth + "x" + screenHeight;
   console.log(resolutionString);
   // Здесь вы можете выбрать, куда выводить разрешение, например, на страницу или в модальное окно
   
   // Если вы хотите обновлять разрешение при изменении размеров окна браузера, добавьте обработчик события resize:
   window.addEventListener("resize", function() {
     screenWidth = window.screen.width;
     screenHeight = window.screen.height;
     resolutionString = "Разрешение экрана: " + screenWidth + "x" + screenHeight;
     console.log(resolutionString);
     // Обновите разрешение при изменении размеров окна
   });
 }
 
 // Вызываем функцию для отображения разрешения экрана при загрузке страницы
 displayScreenResolution();
 