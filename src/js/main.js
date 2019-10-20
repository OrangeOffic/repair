new WOW().init();

$(document).ready(function () {

  // Валидация формы brif
  $('#brif-form').validate({
    errorClass: 'invalid',
    errorElement: 'div',
    rules: {
      nameuser: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      }
    },
    messages: {
      nameuser: {
        required: 'Заполните поле',
        minlength: 'Не менее 2 букв',
        maxlength: 'Не более 15 букв',
      },
      email: {
        required: 'Заполните поле',
        email: 'Введите корректный email',
      },
      phone: {
        required: 'Заполните поле',
      }
    }
  });

  // Валидация формы offer
  $('#offer-form').validate({
    errorClass: 'invalid',
    errorElement: 'div',
    rules: {
      nameuser: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: {
        required: true,
      }
    },
    messages: {
      nameuser: {
        required: 'Заполните поле',
        minlength: 'Не менее 2 букв',
        maxlength: 'Не более 15 букв',
      },
      phone: {
        required: 'Заполните поле',
      }
    }
  });
  // Валидация формы modal
  $('#modal-form').validate({
    errorClass: 'invalid',
    errorElement: 'div',
    rules: {
      nameuser: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      phone: {
        required: true,
      }
    },
    messages: {
      nameuser: {
        required: 'Заполните поле',
        minlength: 'Не менее 2 букв',
        maxlength: 'Не более 15 букв',
      },
      phone: {
        required: 'Заполните поле',
      }
    }
  });

  // Маска для телефона
  $('#brif-phone').mask('8 (999) 999-99-99');
  $('#offer-phone').mask('8 (999) 999-99-99');
  $('#modal-phone').mask('8 (999) 999-99-99');

  $('#offer-form').on('submit', function name(event) {
    event.preventDefault();
    const offerName = document.getElementById('offerName'),
    offerPhone = document.getElementById('offer-phone');
    
      if (offerName.value !== '' && offerPhone.value !== '') {
        $.ajax({
          type: "POST",
          url: "mail2.php",
          data: $(this).serialize(),
          success: function (response) {
            $('.send').addClass('send_active'); 
            $('#offer-form')[0].reset();
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(`${jqXHR} ${textStatus}`);        
          },
        });
        
      }
  });

  $('#modal-form').on('submit', function name(event) {
    event.preventDefault();
    const modalName = document.getElementById('modalName'),
    modalPhone = document.getElementById('modal-phone'),
    modalBlock = document.querySelector('.modal');
    
      if (modalName.value !== '' && modalPhone.value !== '') {
        $.ajax({
          type: "POST",
          url: "mail2.php",
          data: $(this).serialize(),
          success: function (response) {
            console.log(`Прибыли данные: ${response}`); 
            $('.send').addClass('send_active'); 
            $('.modal').removeClass('modal_active'); 
            $('#modal-form')[0].reset();
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(`${jqXHR} ${textStatus}`);        
          },
        });
        
      }
  });


  $('#brif-form').on('submit', function name(event) {
    event.preventDefault();
    const inputName = document.getElementById('brifName'),
      inputPhone = document.getElementById('brif-phone'),
      inputEmail = document.getElementById('brifEmail');
    
      if (inputName.value !== '' && inputPhone.value !== '' && inputEmail.value !== '') {
        $.ajax({
          type: "POST",
          url: "mail3.php",
          data: $(this).serialize(),
          success: function (response) {
            $('.send').addClass('send_active'); 
            $('#brif-form')[0].reset();
          },
          error: function (jqXHR, textStatus, errorThrown) {
            console.error(`${jqXHR} ${textStatus}`);        
          },
        });
      }
  });

  // Подгрузка карты

  var brif = $('.brif');
  var brifTop = brif.offset().top;
  
  $(window).bind('scroll', function() {
    var windowTop = $(this).scrollTop();

    if (windowTop > brifTop) {
      $('.map').html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A42992090af084f8cdb300a4ac37f85f7067ee67fa603a25d220af68439c1403c&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind('scroll');
    }
  })
});