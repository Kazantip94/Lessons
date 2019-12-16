  
$(function() {
    // Кнопка "Наверх"
    let pageup = $('#pageup');
    $(window).scroll(function() {
      // Если отступ сверху больше 50px то показываем кнопку "Наверх"
      if ($(this).scrollTop() > 50) {
        pageup.fadeIn();
        $('.button__pageup').css('display', 'flex');
      } else {
        pageup.fadeOut();
      }
    });
    
    // При нажатии на кнопку мы перемещаемся к началу страницы
    pageup.on('click', function() {
      $('body, html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });