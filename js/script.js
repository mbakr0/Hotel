$(document).ready(function()
  	{
  		$('.carousel.carousel-slider').carousel({fullWidth: true});
  		$('select').formSelect();
  		$('.datepicker').datepicker();
	});


var slider = document.getElementById('price-slider');
noUiSlider.create(slider, 
 {
   start: [200, 400],
   connect: true,
   tooltips: true,
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     		'min': 100,
     		'max': 1000
  		  }
 }
 );

var priceValue = [
    document.getElementById('from'),
    document.getElementById('to')
];

slider.noUiSlider.on('update', function (values, handle) {
    priceValue[handle].innerHTML = values[handle];
});