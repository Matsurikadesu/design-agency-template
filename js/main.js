
const popupBtnElement = document.querySelector('.header__menu-toggle');
const bodyElement = document.querySelector('.body');
const bodyWrapElement = bodyElement.querySelector('.body-wrap');
const closePopupBtnElement = document.querySelector('.close-btn-container');
const header = document.querySelector('.header');
const fadeLeftElements = bodyWrapElement.querySelectorAll('.fade-left');
const fadeTopElements = bodyWrapElement.querySelectorAll('.fade-top');
const fadeBottomElements = bodyWrapElement.querySelectorAll('.fade-bottom');
const fadeRightElements = bodyWrapElement.querySelectorAll('.fade-right');
const collageSectionElement = bodyWrapElement.querySelector('.collage');
const collageImageElement = collageSectionElement.querySelector('.collage__image-wrapper')
const collageImageRowElements = collageImageElement.querySelectorAll('.collage__image-line');
const collageBreakpoint = collageSectionElement.offsetTop - collageImageElement.offsetHeight - 200;

document.addEventListener('mousedown', (evt) => evt.preventDefault());

const translateCollageRow = function(row){
    let directionChange = 1;
    let directionBase = 0;

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

    fadeLeftElements.forEach(element => {
        if(element.closest('section').offsetTop  <= (currentPosition + element.closest('section').offsetHeight / 1.4 - element.offsetHeight + bodyWrapElement.offsetHeight / 2)){
            element.classList.remove('fade-left');
        }else{
            element.classList.add('fade-left');
        }
    });

    fadeTopElements.forEach(element => {
        if(element.closest('section').offsetTop <= (currentPosition + element.closest('section').offsetHeight / 1.4 - element.offsetHeight + bodyWrapElement.offsetHeight / 2)){
            element.classList.remove('fade-top');
        }else{
            element.classList.add('fade-top');
        }
    });
    
    fadeBottomElements.forEach(element => {
        if(element.closest('section').offsetTop <= (currentPosition + element.closest('section').offsetHeight / 1.4 - element.offsetHeight + bodyWrapElement.offsetHeight / 2)){
            element.classList.remove('fade-bottom');
        }else{
            element.classList.add('fade-bottom');
        }
    });

    fadeRightElements.forEach(element => {
        if(element.closest('section').offsetTop <= (currentPosition + element.closest('section').offsetHeight / 1.4 - element.offsetHeight + bodyWrapElement.offsetHeight / 2)){
            element.classList.remove('fade-right');
        }else{
            element.classList.add('fade-right');
        }
    });
});

const popupBtnClickHandler = function(){
    bodyElement.classList.toggle('menu-open');
};

popupBtnElement.addEventListener('click', popupBtnClickHandler);
closePopupBtnElement.addEventListener('click', popupBtnClickHandler);
