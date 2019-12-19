// document.addEventListener("DOMContentLoaded", function(event){
//     const modal = document.querySelector('.modal');
//     const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//     const closeBtn = document.querySelector('.modal__close');
    
  
//     modalBtn.forEach(element => {
//         element.addEventListener('click', () => {
//             modal.classList.toggle('modal--visible');
//         });
//     }); 
   
//     closeBtn.addEventListener('click', function() {
//         modal.classList.toggle('modal--visible');
//     });

//     window.addEventListener('click', function(event) {
//         if (event.target == modal) {
//           modal.classList.toggle('modal--visible');
//         }
//       });
    
//     document.addEventListener('keydown', function(event) {
//         if (event.keyCode == 27) {
//             modal.classList.toggle('modal--visible', false);
            
//         }
//       });
   
// });

$(document).ready(function() {	
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function() {
        modal.toggleClass('modal--visible'); 
    });

    closeBtn.on('click', function() {
        modal.toggleClass('modal--visible'); 
    });

    $(document).keydown(function(e) {
		if (e.keyCode === 27) {
            modal.toggleClass('modal--visible', false);  
		}
	});
    
    $('.modal').click(function(e) {
		if ($(e.target).closest('.modal__dialog').length == 0) {
			$(this).toggleClass('modal--visible');		
        }
    });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');
    

    next.css('left', prev.width() + 35 + bullets.width() + 35)
    bullets.css('left', prev.width() + 35)
    
});

