const popupBtnElement = document.querySelector('.header__menu-toggle');
const bodyElement = document.querySelector('.body');
const bodyWrapElement = bodyElement.querySelector('.body-wrap');
const closePopupBtnElement = document.querySelector('.close-btn-container');
const header = document.querySelector('.header');
const collageSectionElement = bodyWrapElement.querySelector('.collage');
const collageImageElement = collageSectionElement.querySelector('.collage__image-wrapper')
const collageImageRowElements = collageImageElement.querySelectorAll('.collage__image-line');
const collageBreakpoint = collageSectionElement.offsetTop - collageImageElement.offsetHeight - 200;
const fadeElements = bodyWrapElement.querySelectorAll("[data-fade]");

var Visible = function (target) {
  // Все позиции элемента
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    target.style.cssText += 'transform: translate(0, 0); opacity: 1;';

} else {
    // Если элемент не видно, то запускаем этот код
    target.style.cssText = '';
};
};

// Запускаем функцию при прокрутке страницы
bodyWrapElement.addEventListener('scroll', function() {
    fadeElements.forEach(function(element){
        Visible(element);
    });
});



const translateCollageRow = function(row){
    let directionBase = 0;
    let directionChange = 1;

    if(row.dataset.direction === 'left'){
        directionBase = 10;
        directionChange = -1;
    } 

    row.style.cssText += `transform: translate(${directionChange * bodyWrapElement.scrollTop/250 + directionBase}%, 0);`;
};

bodyWrapElement.addEventListener('scroll', function(){
    if (bodyWrapElement.scrollTop <= collageBreakpoint || bodyWrapElement.scrollTop > (collageSectionElement.offsetTop + collageImageElement.offsetHeight)) return;

    collageImageRowElements.forEach(function(row){
        translateCollageRow(row);
    });
});

bodyWrapElement.addEventListener('scroll', function(){
    const currentPosition = bodyWrapElement.scrollTop;

    if(currentPosition > 500){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    };
});

const popupBtnClickHandler = function(){
    bodyElement.classList.toggle('menu-open');
};

popupBtnElement.addEventListener('click', popupBtnClickHandler);
closePopupBtnElement.addEventListener('click', popupBtnClickHandler);

$('#form').validate();