/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class Menu{
  constructor() {
    const thisMenu = this;
    thisMenu.getElement();
    thisMenu.clickHandler();

  }

  getElement() {
    const thisMenu = this;

    thisMenu.sideBarHandler = document.querySelector('.fa-bars');
    thisMenu.mobileBarHandler = document.querySelector('.logo__hamburger--mobile');
    thisMenu.navigation = document.querySelector('.menu');
    thisMenu.navigationMobile = document.querySelector('.menu__list--mobile');
    thisMenu.linkNames = document.querySelectorAll('.menu__text');
    thisMenu.mainSide = document.querySelector('main');
    thisMenu.menuImages = document.querySelectorAll('.menu__image--white');
    thisMenu.messengerName = document.querySelector('.menu__title');
    thisMenu.logoName = document.querySelector('.logo__name');
    thisMenu.messenger = document.querySelector('.menu__messenger');
  }
  
  clickHandler() {
    const thisMenu = this;


    thisMenu.sideBarHandler.addEventListener('click', function(event){
      event.preventDefault();

      thisMenu.navigation.classList.toggle('menu--show');
      thisMenu.mainSide.classList.toggle('main--show');
      thisMenu.messengerName.classList.toggle('menu__title--show');
      thisMenu.logoName.classList.toggle('logo__name--show');
      thisMenu.messenger.classList.toggle('menu__messenger--show');
      
      
      
      for (let linkName of thisMenu.linkNames) {
        linkName.classList.toggle('menu__text--show');
      }
      
      for (let menuImage of thisMenu.menuImages) {
        menuImage.classList.toggle('menu__image--active');
      }
      
    });
      
    thisMenu.mobileBarHandler.addEventListener('click', function() {
      thisMenu.navigationMobile.classList.toggle('menu__list--show');
    });
  }


}
      
export default Menu;
  