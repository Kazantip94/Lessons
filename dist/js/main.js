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

    $('input[type="checkbox"]').click(function(){
        if( $(this).is(':checked') ) {
            $('.policy__label').html('<span>Я соглашаюсь с обработкой данных</span>');
        } else {
            $('.policy__label').html('<span style="color: red;">Галочка <strong>не</strong> стоит</span>')
        }
    });

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


    new WOW().init();

    // Валидация формы
    $('.modal__form').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            // правило-обьект(блок)
            userEmail: {
                required: true,
                email: true
            }
        }, 
        //Сообщения
        messages: {
            userName: {
                required: "Имя обязателньо",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не больше 15 букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате: name@domain.com"
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    window.location.href = "thanks.html";
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                }
            });
        }
    });

    $('.control__form').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
        }, 
        //Сообщения
        messages: {
            userName: {
                required: "Имя обязателньо",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не больше 15 букв"
            },
            userPhone: "Телефон обязателен",
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    window.location.href = "thanks.html";
                    $(form)[0].reset();
                    
                }
            });
        }
    });

    $('.footer__form').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
            // строчное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            // правило-обьект(блок)
            userEmail: {
                required: true,
                email: true
            }
        }, 
        //Сообщения
        messages: {
            userName: {
                required: "Имя обязателньо",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не больше 15 букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате: name@domain.com"
            }
            
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    window.location.href = "thanks.html";
                    $(form)[0].reset();
                    
                }
            });
        }
    });

    // маска для телефона

    $('[type="tel"]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});

    var player;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '465',
            width: '100%',
            videoId: 'RHzzLqJWqHs',
            events: {
                'onReady': videoPlay,
            }
        });
    })

    function videoPlay(event) {
        event.target.playVideo();
    }
    // подключение карты
    // ymaps.ready(function () {
    //     var myMap = new ymaps.Map('map', {
    //             center: [55.751574, 37.573856],
    //             zoom: 9
    //         }, {
    //             searchControlProvider: 'yandex#search'
    //         }),
    
    //         // Создаём макет содержимого.
    //         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    //             '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    //         ),
    
    //         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    //             hintContent: 'Наш офис',
    //             balloonContent: 'Вход со двора'
    //         }, {
    //             // Опции.
    //             // Необходимо указать данный тип макета.
    //             iconLayout: 'default#image',
    //             // Своё изображение иконки метки.
    //             iconImageHref: 'img/location.jpg',
    //             // Размеры метки.
    //             iconImageSize: [32, 32],
    //             // Смещение левого верхнего угла иконки относительно
    //             // её "ножки" (точки привязки).
    //             iconImageOffset: [-5, -38]
    //         });
    
    //     myMap.geoObjects
    //         .add(myPlacemark)
    // });
    
});

