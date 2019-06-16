$(window).load(function() {
/*-----------------------------------------------------------------------------------*/
/*   INIT SKROLLR
/*-----------------------------------------------------------------------------------*/
    var s = skrollr.init({
        forceHeight: false
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        skrollr.init().destroy();
    }
});

(function($) {
/*-----------------------------------------------------------------------------------*/
/*   SMOOTH SCROLLING
/*-----------------------------------------------------------------------------------*/
    $.scrollTo = $.fn.scrollTo = function(o, t, n) {
        return this instanceof $ ? (n = $.extend({}, {
            gap: {
                x: 0,
                y: 0
            },
            animation: {
                easing: "swing",
                duration: 800,
                complete: $.noop,
                step: $.noop
            }
        }, n), this.each(function() {
            var a = $(this);
            a.stop().animate({
                scrollLeft: isNaN(Number(o)) ? $(t).offset().left + n.gap.x : o,
                scrollTop: isNaN(Number(t)) ? $(t).offset().top + n.gap.y : t
            }, n.animation)
        })) : $.fn.scrollTo.apply($("html, body"), arguments)
    };
    $('.smoothscroll a').on('click',function(e) {
        $('html,body').scrollTo(this.hash, this.hash, {
            'axis': 'y'
        });
        e.preventDefault();
    });
})(jQuery);

$(function() {

  var json;

  $.getJSON( "https://brianho.io/js/data.json", function( data ) {
    json = data;
  });

  var typed = new Typed('#typed', {
      strings: ['a blockchain enthusiast 🔗', 'a Solidity wizard 🧙', 'a CryptoKitties collector 🐱', 'an amateur cypherpunk 🔐','a pizza lover 🍕', 'an anime otaku 🇯🇵'],
      loop: true,
      backDelay: 1000,
      backSpeed: 30,
      typeSpeed: 50
  });

  $("#bio").click(function(e) {
    e.preventDefault();
    var content = json.bio.join('\n');
    $('.about').replaceWith('<div class="about animated fadeIn"><p>' + content + '</p></div>');
  });

  $("#edu").click(function(e) {
    e.preventDefault();
    var content = json.edu.join('\n');
    $('.about').replaceWith('<div class="about animated fadeIn">' + content + '</div>');

    $("#eecs").click(function(e) {
      console.log("eecs was clicked")
      e.preventDefault();
      var content = json.eecs.join('\n');
      $('.courses').replaceWith('<ul class="courses animated fadeIn">' + content + '</ul>');
    });

    $("#econ").click(function(e) {
      console.log("econ was clicked")
      e.preventDefault();
      var content = json.econ.join('\n');
      $('.courses').replaceWith('<ul class="courses animated fadeIn">' + content + '</ul>');
    });
  });

  $("#work").click(function(e) {
    e.preventDefault();
    var content = json.work.join('\n');
    $('.about').replaceWith('<div class="about animated fadeIn">' + content + '</div>');
  });

});

(function() {
  [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
    var menuItems = menu.querySelectorAll('.menu__link'),
      setCurrent = function(ev) {
        ev.preventDefault();
        var item = ev.target.parentNode; // li
        // return if already current
        if (classie.has(item, 'menu__item--current')) {
          return false;
        }
        // remove current
        classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
        // set current
        classie.add(item, 'menu__item--current');
      };
    [].slice.call(menuItems).forEach(function(el) {
      el.addEventListener('click', setCurrent);
    });
  });
})(window);
