document.addEventListener("DOMContentLoaded", function(event){
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    
  
    modalBtn.forEach(element => {
        element.addEventListener('click', () => {
            modal.classList.toggle('modal--visible');
        });
    }); 
   
    closeBtn.addEventListener('click', function() {
        modal.classList.toggle('modal--visible');
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
          modal.classList.toggle('modal--visible');
        }
      });
    
    document.addEventListener('keydown', function(event) {
        if (event.keyCode == 27) {
            modal.classList.toggle('modal--visible', false);
            
        }
      });
   
});

// $(document).ready(function(){	
//     var modal = $('.modal'),
//         modalBtn = $('[data-toggle="modal"]'),
//         closeBtn = $('.modal__close');
//         modalDialog = $('.modal__dialog')

//     modalBtn.on('click', function(){
//         modal.show(); 
//         modalDialog.show();
//     });

//     closeBtn.on('click', function(){
//         modal.hide();
//         modalDialog.hide();
//     });
//     $(document).keydown(function(e) {
// 		if (e.keyCode === 27) {
//             modal.hide();  
//             modalDialog.hide();
// 		}
// 	});
    
//     $('.modal').click(function(e) {
// 		if ($(e.target).closest('.modal__dialog').length == 0) {
// 			$(this).hide();		
//         }
//     });
// });
