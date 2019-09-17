$(document).ready(function() {

  var $slider = $(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows : false
  });
  
  //массив с фонами
  var bgs = [
    '#f97248',
    '#f76c59',   //фон при переходе на 1 слайдер
    '#e15d5e', //фон при переходе на 2 слайдер
    '#b74268',  //фон при переходе на 3 слайдер
    '#781877',
    '#58037f',
    '#7f2362',
    '#bd5732',
    '#eb7d0f',
    '#ff8e01',
    '#fc831e'
  ];

  $slider.on('afterChange', function(e, slick, index) {
    $('ul.slider').css('background', bgs[index]);
  });

});
