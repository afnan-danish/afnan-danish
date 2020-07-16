// Canvas Initialisation
var canvasDiv = document.getElementById('particle-canvas');
var options = {
	particleColor: '#888',
  	/*background: 'https://raw.githubusercontent.com/JulianLaval/canvas-particle-network/master/img/demo-bg.jpg',*/
  	background: 'images/banner.jpg',
  	interactive: true,
  	speed: 'medium',
  	density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


