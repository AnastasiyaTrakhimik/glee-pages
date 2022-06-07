$(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('.header').addClass('fixed');
      $(`.header__inner`).addClass("sticky");
    } else {
      $('.header').removeClass('fixed');
      $(`.header__inner`).removeClass("sticky");
    }
  });

  $('.menu-btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  var containerEl1 = document.querySelector('[data-ref="mixitup-1"]');
  var containerEl2 = document.querySelector('[data-ref="mixitup-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    speed: 500,
  });

  $('.slider-suppliers__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});

