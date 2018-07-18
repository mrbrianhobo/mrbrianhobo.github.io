$(document).ready(function() {
  $('.chaffle').chaffle();
  $('#particles').particleground({
    dotColor: '#9C8DF7',
    lineColor: '#9C8DF7'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
  $('#typed').typed({
    strings: ['problem solving.', 'blockchain.', 'crypto.', 'building things.', 'breaking things.', 'anime.'],
    showCursor: true,
    typeSpeed: 40,
    backSpeed: 20,
    shuffle: true,
    startDelay: 1000,
    backDelay: 1000, 
    loop: true,  
  });
});
