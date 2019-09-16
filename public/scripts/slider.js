$(document).ready(function() {

  var $slider = $(".slider").slick({
    dots: true,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows : false
  });
  
  //массив с фонами
  var bgs = [
    'coral',
    'red',   //фон при переходе на 1 слайдер
    'green', //фон при переходе на 2 слайдер
    'blue',  //фон при переходе на 3 слайдер
    // .....
  ];

  $slider.on('afterChange', function(e, slick, index) {
    $('ul.slider').css('background', bgs[index]);
  });

});
