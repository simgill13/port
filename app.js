

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 90
        }
      },
      "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 100,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 50
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  });

function clicks(){

  $('#homeid').click(function() {
    $(".fa-home").css({"color": "#00FFD7"})
    $(".fa-user-secret").css({"color": "#4D4D4E"})
    $(".fa-code").css({"color": "#4D4D4E"})
    $(".fa-picture-o").css({"color": "#4D4D4E"})
    $(".fa-envelope-o").css({"color": "#4D4D4E"})

    $('#homesection').removeClass('hidden')
    $('#aboutsection').addClass('hidden')
    $('#skillssection').addClass('hidden')
    $('#worksection').addClass('hidden')
    $('#contactsection').addClass('hidden')

  }) 
  $('#aboutid').click(function() {
    $(".fa-home").css({"color": "#4D4D4E"})
    $(".fa-user-secret").css({"color": "#00FFD7"})
    $(".fa-code").css({"color": "#4D4D4E"})
    $(".fa-picture-o").css({"color": "#4D4D4E"})
    $(".fa-envelope-o").css({"color": "#4D4D4E"})

    $('#aboutsection').removeClass('hidden')
    $('#homesection').addClass('hidden')
    $('#skillssection').addClass('hidden')
    $('#worksection').addClass('hidden')
    $('#contactsection').addClass('hidden')
  })
  $('#skillsid').click(function() {
    $(".fa-home").css({"color": "#4D4D4E"})
    $(".fa-user-secret").css({"color": "#4D4D4E"})
    $(".fa-code").css({"color": "#00FFD7"})
    $(".fa-picture-o").css({"color": "#4D4D4E"})
    $(".fa-envelope-o").css({"color": "#4D4D4E"})

    $('#skillssection').removeClass('hidden')
    $('#homesection').addClass('hidden')
    $('#aboutsection').addClass('hidden')
    $('#worksection').addClass('hidden')
    $('#contactsection').addClass('hidden')
  })
  $('#workiconid').click(function() {
    $(".fa-home").css({"color": "#4D4D4E"})
    $(".fa-user-secret").css({"color": "#4D4D4E"})
    $(".fa-code").css({"color": "#4D4D4E"})
    $(".fa-picture-o").css({"color": "#00FFD7"})
    $(".fa-envelope-o").css({"color": "#4D4D4E"})

    $('#worksection').removeClass('hidden')
    $('#homesection').addClass('hidden')
    $('#aboutsection').addClass('hidden')
    $('#skillssection').addClass('hidden')
    $('#contactsection').addClass('hidden')
  })
  $('#contactid').click(function() {
    $(".fa-home").css({"color": "#4D4D4E"})
    $(".fa-user-secret").css({"color": "#4D4D4E"})
    $(".fa-code").css({"color": "#4D4D4E"})
    $(".fa-picture-o").css({"color": "#4D4D4E"})
    $(".fa-envelope-o").css({"color": "#00FFD7"})

    $('#contactsection').removeClass('hidden')
    $('#homesection').addClass('hidden')
    $('#aboutsection').addClass('hidden')
    $('#skillssection').addClass('hidden')
    $('#worksection').addClass('hidden')
  })}
  

function zindex(){
  $(".slide-in").css({"z-index": "0"})
}
function slideBack(){ 
 $('.slide-in').toggleClass('show');
 setTimeout('zindex()', 1000);
}


function slide(){
  $('#homeid,#aboutid,#skillsid,#workiconid,#contactid').click(function() {
    var clicked = $(this).attr('id');
    if($('#'+clicked).hasClass('active') === true){
      $('#'+clicked).addClass('activeColor')
      $(".slide-in").css({"z-index": "9"})
      $('.slide-in').toggleClass('show');
      setTimeout('slideBack()', 3000);
    }
  })    
}

function active(){
  $('#homeid,#aboutid,#skillsid,#workiconid,#contactid').click(function() {
    var selectedicon = $(this).attr('id');
    var array= ['homeid','aboutid','skillsid','workiconid','contactid']
    if(selectedicon){
      for (var i = 0; i <array.length; i++) {
        if(array[i] === selectedicon){
          $('#'+array[i]).addClass('active');
          var spliced = array.splice(i, 1); 
        }
      }
      for (var i = 0; i< array.length; i++) {
        $('#'+array[i]).removeClass('active');
      }
    }
  })    
}


active()
slide() 
clicks()   



// function moveToSelected(element) {

//   if (element == "next") {
//     var selected = $(".selected").next();
//   } else if (element == "prev") {
//     var selected = $(".selected").prev();
//   } else {
//     var selected = element;
//   }

//   var next = $(selected).next();
//   var prev = $(selected).prev();
//   var prevSecond = $(prev).prev();
//   var nextSecond = $(next).next();

//   $(selected).removeClass().addClass("selected");

//   $(prev).removeClass().addClass("prev");
//   $(next).removeClass().addClass("next");

//   $(nextSecond).removeClass().addClass("nextRightSecond");
//   $(prevSecond).removeClass().addClass("prevLeftSecond");

//   $(nextSecond).nextAll().removeClass().addClass('hideRight');
//   $(prevSecond).prevAll().removeClass().addClass('hideLeft');

// }

// // Eventos teclado
// $(document).keydown(function(e) {
//     switch(e.which) {
//         case 37: // left
//         moveToSelected('prev');
//         break;

//         case 39: // right
//         moveToSelected('next');
//         break;

//         default: return;
//     }
//     e.preventDefault();
// });

// $('#carousel div').click(function() {
//   moveToSelected($(this));
// });

// $('#prev').click(function() {
//   moveToSelected('prev');
// });

// $('#next').click(function() {
//   moveToSelected('next');
// });

