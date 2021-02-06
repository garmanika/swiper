$(function(){

// Иницилизация слайдера
new Swiper('.image-slider',{
  // Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Навигация
  pagination: {
    el: '.swiper-pagination',
    // clickable: true,
    // type: 'bullets',
    // // Динамические Буллеты
    // dynamicBullets: true,
    // // Кастомные Буллеты
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
    // // Фракция
    type: 'fraction',
    // // Кастомный вывод фракции
     renderFraction: function (currentClass, totalClass) {
       return 'Слайд <span class="' + currentClass + '"></span>' +
           ' из ' +
           '<span class="' + totalClass + '"></span>';
     },
    // ПрогрессБар
    // type:'progressbar',
    // Скролл
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      // Возможность перетаскивать
      draggable: true,
        },
      // Вкл/выкл
      // Перетаскивание на пк
      simulateTouch: true,
      // Чувствительность свайпа
      touchRatio: 1,
      // Угол срабатывния свайпа
      touchAngle: 45,
      // Курсор перетаскивания
      grabCursor: true,
        // Переключение при клике
        slideToClickedSlide: true,
      // Навигация по хешу
      hashNavigation: {
        // Отслеживать состояние
        watchState: true,
      },
      // Управление клавиатурой
      keyboard:{
        // только в пределах видимости
        onlyInViewport: true,
      },
      // Управление мышью
      mousewheel:{
        // Чувствительность
        sensitivity: 1, 
      },
      // Автовысота
      autoHeight: true,
      // Количество слайдов для показа
      slidesPerView: 1, 
      // если нужно, чтобы контент сам настривал количество - auto / в css .swiper-slide width auto
      // Отключение если слайдов меньше, чем нужно
      watchOverflow: true,
      // Отступ между слайдами
      spaceBetween: 30,
      // Количество пролистывемых слайдов 
      slidesPerGroup: 1,
      // Активный слайд по центру
      centerSlides: true,
      // Стартовый слайд
      initialSlide: 0,
      // Мультирядность, при этом выключается автовысота
      // slidesPerColumn: 2,
      // Бесконечный слайдер
      loop: false,
      // Кол-во дублир слайдов
      loopSlides: 0,
      // Свбодный режим
      freeMode: true,
      // Автопрокрутка
      autoplay:{
        // пауза
        delay:1000,
        // закончить на посл слайде
        stopOnLastSlide: true,
        // Отсключить после ручного переключения
        disableOnInteraction:false,
      },
      // Скорость
      speed: 300,
      // Вертикальный слайдер
      // direction: 'vertical',
      // Эффекты переключения сдайжов
      // effect: 'fade',
      // fadeEffect: {
      //   // Параллейная смена прозрачности
      //   crossfade: true,
      // },
      // effect: 'flip',
      // flipEffect:{
      //   // тень
      //   slideShadows: true,
      //   // показ только активного слайда
      //   limitRotation: true,
      // }
      // effect: 'cube',
      // cubeEffect: {
      //   // Настройка тени
      //   slideShadows: true,
      //   shadow: true,
      //   Shadowoffset: 20,
      //   shadowScale: 0.94
      // },
      // поток
      // effect: 'coverflow',
      // coverflowEffect:{
      //   rotate: 20,
      //   stretch: 50,
      //   slideShadows: true,
      // },
      // Адаптивность
      breakpoints: {
        320:{},
        480:{},
        992:{},
      },
      // Миниатюры https://codepen.io/hagiang1305/pen/apxvEZ
      // thumb:{
      //   // Свайпер с миниатюр и его насторойкамм
      // swiper:{
      //   el: '.image-mini-slider',
      //   slidesPerView: 6,
      // }
      }
    });

});