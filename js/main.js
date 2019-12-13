document.addEventListener("DOMContentLoaded", function(event){
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const modalDialog = document.querySelector('.modal-dialog');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }

    modalBtn.forEach(element =>{
        element.addEventListener('click', switchModal);
    }); 

    closeBtn.addEventListener('click', switchModal);

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
          modal.classList.toggle('modal--visible');
          modalDialog.classList.toggle('modal-dialog--visible');
          document.body.style.overflow = "auto";
        }
      }); 

    window.onkeyup = function (event) {
        if (event.keyCode == 27) {
            modal.classList.toggle('modal--visible');
            modalDialog.classList.toggle('modal-dialog--visible');
            document.body.style.overflow = "auto";
        }
       }   
});
