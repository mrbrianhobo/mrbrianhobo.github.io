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

    var typed = new Typed('#typed', {
        strings: ['a blockchain enthusiast 🔗', 'a Solidity wizard 🧙', 'a CryptoKitties collector 🐱', 'an amateur cypherpunk 🔐','a pizza lover 🍕', 'an anime otaku 🇯🇵'],
        loop: true,
        backDelay: 1000,
        backSpeed: 30,
        typeSpeed: 50
    });

  $("#bio").click(function(e) {
    e.preventDefault();
    var content = "<p>Hi, I'm Brian! I was born and raised in SoCal, but I'm currently a rising "+
                  "third-year undergrad at UC Berkeley studying Electrical Engineering & Computer Science (EECS).</p>"+
                  "<p>On campus, I'm heavily involved with Blockchain at Berkeley and its education side, helping "+
                  "lead a course on <a href=\"https://blockchain.berkeley.edu/decal/\">Blockchain Fundamentals</a> "+
                  "which covers a variety of topics in the cryptocurrency and the wider blockchain space (go check it out!). "+
                  "Some of things I'm particularly interested in include cybersecurity (particularly smart contract security), "+
                  "cryptoeconomics & protocol design, and non-fungible tokens (NFTs aka CryptoKitties)."+
                  "<p>This summer, I'm interning at <a href=\"https://consensys.net/\">ConsenSys</a> with the "+
                  "<a href=\"https://bounties.network/\">Bounties Network</a> team, improving the way we collaborate and "+
                  "creating a standard for outsourcing tasks online. I'm also helping out as an Expert-in-Residence for Udacity's "+
                  "<a href=\"https://www.udacity.com/course/blockchain-developer-nanodegree--nd1309\">Blockchain Developer Nanodegree</a> "+
                  "program, answering questions and offering students guidance about working in the blockchain space!</p>"+
                  "<p>While I'm not busy coding away on my computer, "+
                  "you might find me napping (99% of the time), (still) playing Pokemon Go, drooling over food/cooking "+
                  "videos (Buzzfeed/Tasty videos anyone?), or clicking \"Going\" to random events on Facebook.</p>";
    $('.about').replaceWith('<div class="about animated fadeIn"><p>' + content + '</p></div>');
  });

  $("#edu").click(function(e) {
    e.preventDefault();
    var content = '<h2>University of California, Berkeley (2016 - 2020)</h2>'+
                  '<p class="first-elem"> - B.S. Electrical Engineering & Computer Science (EECS)</p>'+
                  '<p class="last-elem"> - Regents’ & Chancellor’s Scholar</p>'+
                  '<p class="course">Courses:</p>'+
                  '<ul class="course">'+
                        '<li class="course"><p>Structure & Interpretation of Computer Programs (CS 61A)</p></li>'+
                        '<li class="course"><p>Data Structures (CS 61B)</p></li>'+
                        '<li class="course"><p>Computer Architecture (CS 61C)</p></li>'+
                        '<li class="course"><p>Discrete Math & Probability Theory (CS 70)</p></li>'+
                        '<li class="course"><p>Algorithms & CS Theory (CS 170)</p></li>'+
                        '<li class="course"><p>Computer Security (CS 161)</p></li>'+
                        '<li class="course"><p>Artificial Intelligence (CS 188)</p></li>'+
                        '<li class="course"><p>Information Devices & Systems I/II (EE 16A/EE 16B)</p></li>'+
                        '<li class="course"><p>Multivariable Calculus (MATH 53)</p></li>'+
                        '<li class="course"><p>Linear Algebra & Differential Equations (MATH 54)</p></li>'+
                        '<li class="course"><p>Microeconomic Theory (ECON 101A)</p></li>'+
                  '</ul>';
    $('.about').replaceWith('<div class="about animated fadeIn">' + content + '</div>');
  });

  $("#work").click(function(e) {
    e.preventDefault();
    var content = '<a href="https://consensys.net/"><img class="logo" src="img/consensys.png"></img></a>'+
                  '<h2 class="role"><a href="https://bounties.network/">Bounties Network</a> Intern @ <a href="https://consensys.net/">ConsenSys</a></h2>'+
                  '<p class="date">June 2018 – Present</p>'+
                  '<a href="https://www.udacity.com/"><img class="logo" src="img/udacity.png"></img></a>'+
                  '<h2 class="role">Expert-in-Residence @ <a href="https://www.udacity.com/">Udacity</a></h2>'+
                  '<p class="date">June 2018 – Present</p>'+
                  '<a href="https://blockchain.berkeley.edu/"><img class="logo" src="img/bab.png"></img></a>'+
                  '<h2 class="role">Education @ <a href="https://blockchain.berkeley.edu/">Blockchain at Berkeley</a></h2>'+
                  '<p class="date">January 2017 – Present</p>'+
                  '<a href="http://www.dailycal.org/"><img class="logo" src="img/dc.png"></img></a>'+
                  '<h2 class="role">Infrastructure @ <a href="http://www.dailycal.org/">The Daily Cal</a></h2>'+
                  '<p class="date">June 2018 – Present</p>';
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