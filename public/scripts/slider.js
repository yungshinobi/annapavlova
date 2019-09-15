$(document).ready(function() {

  var $slider = $(".slider").slick({
    dots: true
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
    $('div.left').css('background', bgs[index]);
  });

});
