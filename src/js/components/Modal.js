/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
class Modal{
  constructor() {
    const thisModal = this;
    thisModal.getElement();
    thisModal.renderOverlay();
    thisModal.closeHandler();
  }

  getElement() {
    const thisModal = this;
    thisModal.modalLinks = document.querySelectorAll('.menu__item--modal');
  }


  renderOverlay() {
    const thisModal = this;

    for(let modalLink of thisModal.modalLinks) {
      modalLink.addEventListener('click', function(event){
        event.preventDefault();
        const clickedElement = this;

        clickedElement.classList.add('menu__item--active');
        const modalSelector = clickedElement.querySelector('.menu__link').getAttribute('href').slice(1);
        const targetModal = `.overlay__modal--${modalSelector}`;

        thisModal.openModal(targetModal);
      });
    }
  }

  openModal(modal) {
    document.querySelectorAll('.overlay > *').forEach(function(modal) {
      modal.classList.remove('overlay__modal--show');
      console.log(modal);
    });
    document.querySelector('.overlay').classList.add('overlay--show');
    document.querySelector(modal).classList.add('overlay__modal--show');
  }

  closeHandler(){
    const thisModal = this;
      
    document.querySelectorAll('.button__overlay--close').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        thisModal.closeModal();
      });
    });
      
    document.querySelector('.overlay').addEventListener('click', function(e) {
      if(e.target === this) {
        thisModal.closeModal();
      }
    });
      
    document.addEventListener('keyup', function(e) {
      if(e.keyCode === 27) {
        thisModal.closeModal();
      }
    });
      
  }

  closeModal() {
    document.querySelector('.overlay').classList.remove('overlay--show');
    document.querySelector('.menu__item--active').classList.remove('menu__item--active');
  }
}
    
export default Modal;


// function closeModal() {
//   document.querySelector('.overlay').classList.remove('overlay--show');
//   document.querySelector('.menu__item--active').classList.remove('menu__item--active');
// }
  
// document.querySelectorAll('.button__overlay--close').forEach(function(btn) {
//   btn.addEventListener('click', function(e) {
//     e.preventDefault();
//     closeModal();
//   });
// });
  
// document.querySelector('.overlay').addEventListener('click', function(e) {
//   if(e.target === this) {
//     closeModal();
//   }
// });
  
// document.addEventListener('keyup', function(e) {
//   if(e.keyCode === 27) {
//     closeModal();
//   }
// });
  
//   function showModal(event) {
//     event.preventDefault();
//     const clickedElement = this;
//     clickedElement.classList.add('menu__item--active');
//     const modalSelector = clickedElement.querySelector('.menu__link').getAttribute('href').slice(1);
//     const targetModal = `.overlay__modal--${modalSelector}`;
//     openModal(targetModal);
  
//   }
  
//   const modalLinks = document.querySelectorAll('.menu__item--modal');
  
//   for(let modalLink of modalLinks) {
//     modalLink.addEventListener('click', showModal);
//   }
  
//   function openModal(modal) {
//     document.querySelectorAll('.overlay > *').forEach(function(modal) {
//       modal.classList.remove('overlay__modal--show');
//       console.log(modal);
//     });
//     document.querySelector('.overlay').classList.add('overlay--show');
//     document.querySelector(modal).classList.add('overlay__modal--show');
//   }