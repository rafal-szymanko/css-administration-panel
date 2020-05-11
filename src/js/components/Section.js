class Section{
  constructor() {
    const thisSection = this;
    thisSection.getElement();
    thisSection.render();
  }

  getElement() {
    const thisSection = this;
    thisSection.menuLinks = document.querySelectorAll('.menu__item--section'); 
    thisSection.navigationMobile = document.querySelector('.menu__list--mobile');

  }
    
    
  render() {  
    const thisSection = this;

    for(let menuLink of thisSection.menuLinks) {
      menuLink.addEventListener('click', function(event){
        event.preventDefault();
        const clickedElement = this;
        thisSection.activeLinks = document.querySelectorAll('.menu__item--active');


        for (let activeLink of thisSection.activeLinks) {
          activeLink.classList.remove('menu__item--active');
          // activeLink.style.background = '#191919';
          thisSection.navigationMobile.classList.remove('menu__list--show');
        }

        clickedElement.classList.add('menu__item--active');
        // clickedElement.style.background = '#282828';

        const sectionSelector = clickedElement.querySelector('.menu__link').getAttribute('href').slice(1);
        thisSection.activeSections = document.querySelectorAll('.section--active');


        for (let activeSection of thisSection.activeSections) {
          activeSection.classList.remove('section--active');

        }
        const targetSection = document.querySelector(`.section--${sectionSelector}`);
        targetSection.classList.add('section--active');

      });
    }

  }
}
    
export default Section;

// function showSection(event) {
//     event.preventDefault();
//     const clickedElement = this;
  
//     const activeLinks = document.querySelectorAll('.menu__item--active');
  
//     for (let activeLink of activeLinks) {
//       activeLink.classList.remove('menu__item--active');
//       navigationMobile.classList.remove('menu__list--show');
//     }
  
//     clickedElement.classList.add('menu__item--active');
  
//     const sectionSelector = clickedElement.querySelector('.menu__link').getAttribute('href').slice(1);
  
//     const activeSections = document.querySelectorAll('.section--active');
  
// for (let activeSection of activeSections) {
//   activeSection.classList.remove('section--active');
// }
  
//     const targetSection = document.querySelector(`.section--${sectionSelector}`);
  
//     targetSection.classList.add('section--active');
//   }
  
//   const menuLinks = document.querySelectorAll('.menu__item--section');
//   console.log(menuLinks);
//   for (let menuLink of menuLinks) {
//     menuLink.addEventListener('click', showSection);
//   }