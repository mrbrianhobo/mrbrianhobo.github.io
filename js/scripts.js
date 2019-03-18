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
    // var content = "<p>Hi, I'm Brian! I was born and raised in SoCal, and I'm currently a rising "+
    //               "third-year undergrad at UC Berkeley studying Electrical Engineering & Computer Science (EECS).</p>"+
    //               "<p>On campus, I'm heavily involved with Blockchain at Berkeley and its education side, helping "+
    //               "lead a course on <a href=\"https://blockchain.berkeley.edu/decal/\">Blockchain Fundamentals</a> "+
    //               "which covers a variety of topics in the cryptocurrency and the wider blockchain space (go check it out!). "+
    //               "Some of the things I'm particularly interested in include cybersecurity (particularly smart contract security), "+
    //               "cryptoeconomics & protocol design, and non-fungible tokens (NFTs aka CryptoKitties)."+
    //               "<p>This past summer, I was interning at <a href=\"https://consensys.net/\">ConsenSys</a> with the "+
    //               "<a href=\"https://bounties.network/\">Bounties Network</a> team, improving the way we collaborate and "+
    //               "creating a standard for outsourcing tasks online. I've also helped out as an Expert-in-Residence for Udacity's "+
    //               "<a href=\"https://www.udacity.com/course/blockchain-developer-nanodegree--nd1309\">Blockchain Developer Nanodegree</a> "+
    //               "program, answering questions and offering students guidance about working in the blockchain space!</p>"+
    //               "<p>While I'm not busy coding away on my computer, "+
    //               "you might find me napping (99% of the time), (still) playing Pokemon Go, drooling over food/cooking "+
    //               "videos (Buzzfeed/Tasty videos anyone?), or clicking \"Going\" to random events on Facebook.</p>";
    $('.about').replaceWith('<div class="about animated fadeIn"><p>' + content + '</p></div>');
  });

  $("#edu").click(function(e) {
    e.preventDefault();
    var content = json.edu.join('\n');
    // var content = '<h2>University of California, Berkeley (2016 - 2020)</h2>'+
    //               '<p class="first-elem"> - B.S. Electrical Engineering & Computer Science (EECS)</p>'+
    //               '<p class=\"elem\"> - B.A. Economics</p>'+
    //               '<p class="last-elem"> - Regents’ & Chancellor’s Scholar</p>'+
    //               '<p class="course">Courses (<a id="eecs">EECS</a>/<a id="econ">Economics</a>):</p>'+
    //               '<ul class="courses">'+
    //                     '<li class="course"><p>Structure & Interpretation of Computer Programs (CS 61A)</p></li>'+
    //                     '<li class="course"><p>Data Structures (CS 61B)</p></li>'+
    //                     '<li class="course"><p>Computer Architecture (CS 61C)</p></li>'+
    //                     '<li class="course"><p>Discrete Math & Probability Theory (CS 70)</p></li>'+
    //                     '<li class="course"><p>Computer Security (CS 161)</p></li>'+
    //                     '<li class="course"><p>Algorithms & CS Theory (CS 170)</p></li>'+
    //                     '<li class="course"><p>Database Systems (CS 186)</p></li>'+
    //                     '<li class="course"><p>Artificial Intelligence (CS 188)</p></li>'+
    //                     '<li class="course"><p>Cryptography (CS 194-34)</p></li>'+
    //                     '<li class="course"><p>Social Implications of Computer Technology (CS 195)</p></li>'+
    //                     '<li class="course"><p>Blockchain, Cryptoeconomics, and the Future of Technology, Business, and Law (CS 294-144)</p></li>'+
    //                     '<li class="course"><p>Blockchain and Cryptoeconomics (CS 294-151)</p></li>'+
    //                     '<li class="course"><p>Information Devices & Systems I/II (EE 16A/EE 16B)</p></li>'+
    //               '</ul>';
    $('.about').replaceWith('<div class="about animated fadeIn">' + content + '</div>');

    $("#eecs").click(function(e) {
      console.log("eecs was clicked")
      e.preventDefault();
      var content = json.eecs.join('\n');
      // var content = '<li class="course"><p>Structure & Interpretation of Computer Programs (CS 61A)</p></li>'+
      //               '<li class="course"><p>Data Structures (CS 61B)</p></li>'+
      //               '<li class="course"><p>Computer Architecture (CS 61C)</p></li>'+
      //               '<li class="course"><p>Discrete Math & Probability Theory (CS 70)</p></li>'+
      //               '<li class="course"><p>Computer Security (CS 161)</p></li>'+
      //               '<li class="course"><p>Algorithms & CS Theory (CS 170)</p></li>'+
      //               '<li class="course"><p>Database Systems (CS 186)</p></li>'+
      //               '<li class="course"><p>Artificial Intelligence (CS 188)</p></li>'+
      //               '<li class="course"><p>Cryptography (CS 194-34)</p></li>'+
      //               '<li class="course"><p>Social Implications of Computer Technology (CS 195)</p></li>'+
      //               '<li class="course"><p>Blockchain, Cryptoeconomics, and the Future of Technology, Business, and Law (CS 294-144)</p></li>'+
      //               '<li class="course"><p>Blockchain and Cryptoeconomics (CS 294-151)</p></li>'+
      //               '<li class="course"><p>Information Devices & Systems I/II (EE 16A/EE 16B)</p></li>';
      $('.courses').replaceWith('<ul class="courses animated fadeIn">' + content + '</ul>');
    });

    $("#econ").click(function(e) {
      console.log("econ was clicked")
      e.preventDefault();
      var content = json.econ.join('\n');
      // var content = '<li class="course"><p>Microeconomic Theory (ECON 101A)</p></li>'+
      //               '<li class="course"><p>Macroeconomic Analysis (ECON 100B)</p></li>'+
      //               '<li class="course"><p>Game Theory in the Social Sciences (POLISCI 135/ECON C110)</p></li>'+
      //               '<li class="course"><p>The International Economy of the 20th Century (HISTORY 160)</p></li>';
      $('.courses').replaceWith('<ul class="courses animated fadeIn">' + content + '</ul>');
    });
  });

  $("#work").click(function(e) {
    e.preventDefault();
    var content = json.work.join('\n');
    // var content = '<a href="https://consensys.net/"><img class="logo consensys" src="img/consensys.png"></img></a>'+
    //               '<h2 class="role"><a href="https://bounties.network/">Bounties Network</a> Intern @ <a href="https://consensys.net/">ConsenSys</a></h2>'+
    //               '<p class="date">May 2018 – Aug 2018</p>'+
    //               '<a href="https://www.udacity.com/"><img class="logo udacity" src="img/udacity.png"></img></a>'+
    //               '<h2 class="role">Expert-in-Residence @ <a href="https://www.udacity.com/">Udacity</a></h2>'+
    //               '<p class="date">June 2018 – Nov 2018</p>'+
    //               '<a href="https://blockchain.berkeley.edu/"><img class="logo bab" src="img/bab.png"></img></a>'+
    //               '<h2 class="role">Education @ <a href="https://blockchain.berkeley.edu/">Blockchain at Berkeley</a></h2>'+
    //               '<p class="date">January 2017 – Present</p>'+
    //               '<a href="https://innovativedesign.club/"><img class="logo innod" src="img/innod.png"></img></a>'+
    //               '<h2 class="role">Web @ <a href="https://innovativedesign.club/">Innovative Design</a></h2>'+
    //               '<p class="date">Aug 2018 – Present</p>'+
    //               '<a href="http://www.dailycal.org/"><img class="logo" src="img/dc.png"></img></a>'+
    //               '<h2 class="role">Infrastructure @ <a href="http://www.dailycal.org/">The Daily Cal</a></h2>'+
    //               '<p class="date">May 2018 – Aug 2018</p>';
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
