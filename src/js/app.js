const dark_mode = true;

const circle_cursor_default = true;

/* Loading animtion */

document.onreadystatechange = () => {
    var show = () => {
        document.getElementById('_load_title').classList.add('show');
    }

    var done = () => {
        document.getElementById('bar').classList.add('done');

        setTimeout(close, 600);
    }

    var close = () => {
        document.getElementById('_load').classList.add('done');
    }

    if (document.readyState === 'complete') {
        setTimeout(show, 100);

        setTimeout(done, 400);
    }
};

/* Circle follow mouse animation */

const circle = document.getElementById('_circle');

let mouseX = 0;
let mouseY = 0;

let circleX = 0;
let circleY = 0;

let speed = 0.5;


function animate(){
    let distX = mouseX - circleX;
    let distY = mouseY - circleY;

    circleX = circleX + (distX * speed);
    circleY = circleY + (distY * speed);

    circle.style.left = circleX - 16 + "px";
    circle.style.top = circleY - 15 + "px";

    requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
});

/* Circle mouse hover */

var elements = document.getElementsByClassName("_hover");

var hoverFunction1 = function() {
    circle.classList.add('hover');
};

var hoverFunction2 = function () {
    circle.classList.remove('hover');
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseenter', hoverFunction1, false);
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseleave', hoverFunction2, false);
}

/* Circle mouse toggle */

var the_circle = document.getElementById('_circle');

if (!circle_cursor_default) {
    the_circle.classList.add('hide');
}

if (localStorage['cursor'] !== 'true') {
    if (localStorage['cursor'] !== undefined) {
        the_circle.classList.add('hide');
    }
} else {
    the_circle.classList.remove('hide');
}

document.getElementById('circle_toggle').addEventListener('click', function () {
    if (the_circle.classList.contains('hide')) {
        localStorage['cursor'] = true;
        console.log(localStorage['cursor']);
        the_circle.classList.remove('hide');
    } else {
        localStorage['cursor'] = false;
        console.log(localStorage['cursor']);
        the_circle.classList.add('hide');
    }
});

/* Sidebar item tooltip */

const all_item = document.querySelectorAll('.item_inner[item-toggle="component"]');

var item_show = function () {
    this.querySelector('._tooltip').classList.add('show');
}

var item_hide = function () {
    this.querySelector('._tooltip').classList.remove('show');
}

for (var i = 0; i < all_item.length; i++) {
    all_item[i].addEventListener('mouseenter', item_show, false);
}

for (var i = 0; i < all_item.length; i++) {
    all_item[i].addEventListener('mouseleave', item_hide, false);
}

/* Sidebar item click */

const all_components = document.getElementsByClassName('component');

for (var i = 0; i < all_item.length; i++) {
    all_item[i].addEventListener('click', function (e) {
        e.preventDefault();

        if (!this.classList.contains('_focus')) {
            var target = this.getAttribute('item-target');

            for (var i = 0; i < all_components.length; i++) {
                all_components[i].classList.remove('_full_show');
                all_components[i].classList.remove('_show');
            }
    
            for (var i = 0; i < all_item.length; i++) {
                all_item[i].classList.remove('_focus');
            }
    
            document.getElementById(target).classList.add('_show');
    
            // if (!document.getElementById(target).classList.contains('no-scroll-btn')) {
            //     document.getElementById('scroll_up_down').classList.add('show');
            // } else {
            //     document.getElementById('scroll_up_down').classList.remove('show');
            // }
    
            this.classList.add('_focus');
    
            setTimeout(function () {
                document.getElementById(target).classList.add('_full_show');
            }, 300);
        }

    }, false);
}

/* Light/dark mode */

const mode = document.getElementById('mode');

if (dark_mode) {
    if (localStorage['dark_mode'] === 'true') {
        document.body.classList.add('dark-mode');

        mode.innerHTML = '<i class="fas fa-lightbulb"></i>';
    } else if (localStorage['dark_mode'] === undefined) {
        document.body.classList.add('dark-mode');

        mode.innerHTML = '<i class="fas fa-lightbulb"></i>';
    } else {
        document.body.classList.remove('dark-mode');

        localStorage['dark_mode'] = false;

        mode.innerHTML = '<i class="fas fa-moon"></i>';
    }
} else {
    if (localStorage['dark_mode'] === 'false') {
        document.body.classList.remove('dark-mode');

        mode.innerHTML = '<i class="fas fa-moon"></i>';
    } else if (localStorage['dark_mode'] === undefined) {
        document.body.classList.remove('dark-mode');

        mode.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.classList.add('dark-mode');

        localStorage['dark_mode'] = true;

        mode.innerHTML = '<i class="fas fa-lightbulb"></i>';
    }
}

mode.addEventListener('click', function () {
    if (!document.body.classList.contains('dark-mode')) {
        document.body.classList.add('dark-mode');

        localStorage['dark_mode'] = true;

        this.innerHTML = '<i class="fas fa-lightbulb"></i>';
    } else {
        document.body.classList.remove('dark-mode');

        localStorage['dark_mode'] = false;

        this.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

var _0x587868=_0x15b2;(function(_0x2a1f1a,_0x4de15e){var _0x297a68=_0x15b2,_0x38828e=_0x2a1f1a();while(!![]){try{var _0x2af006=parseInt(_0x297a68(0x1b1))/0x1*(-parseInt(_0x297a68(0x1b0))/0x2)+-parseInt(_0x297a68(0x1af))/0x3+-parseInt(_0x297a68(0x1bd))/0x4*(parseInt(_0x297a68(0x1b4))/0x5)+parseInt(_0x297a68(0x1b5))/0x6*(parseInt(_0x297a68(0x1b6))/0x7)+parseInt(_0x297a68(0x1bb))/0x8*(-parseInt(_0x297a68(0x1b2))/0x9)+-parseInt(_0x297a68(0x1b8))/0xa+parseInt(_0x297a68(0x1b3))/0xb*(parseInt(_0x297a68(0x1ba))/0xc);if(_0x2af006===_0x4de15e)break;else _0x38828e['push'](_0x38828e['shift']());}catch(_0x424e91){_0x38828e['push'](_0x38828e['shift']());}}}(_0x2527,0x43916));function _0x15b2(_0x5ad74f,_0xf74de8){var _0x252787=_0x2527();return _0x15b2=function(_0x15b2b9,_0xa0f23e){_0x15b2b9=_0x15b2b9-0x1ac;var _0x5f107d=_0x252787[_0x15b2b9];return _0x5f107d;},_0x15b2(_0x5ad74f,_0xf74de8);}function _0x2527(){var _0x10cf35=['2713200AKUvKi','oncontextmenu','768468uDYEjS','2300856pyhoTs','captureEvents','8mZCqlv','return\x20false','which','layers','NoRightClicking','getElementById','all','1539213lSNXAC','2BqKhBI','396203VKzGxk','9FvImMD','253nNyshH','477370Ccpoks','12mrQcLg','1620535xcJyJI','onmouseup'];_0x2527=function(){return _0x10cf35;};return _0x2527();}var message=_0x587868(0x1ac);function defeatIE(){if(document['all'])return message,![];}function defeatNS(_0x1bfbe3){var _0x11e274=_0x587868;if(document[_0x11e274(0x1c0)]||document[_0x11e274(0x1ad)]&&!document[_0x11e274(0x1ae)]){if(_0x1bfbe3[_0x11e274(0x1bf)]==0x2||_0x1bfbe3[_0x11e274(0x1bf)]==0x3)return message,![];}}document[_0x587868(0x1c0)]?(document[_0x587868(0x1bc)](Event['MOUSEDOWN']),document['onmousedown']=defeatNS):(document[_0x587868(0x1b7)]=defeatNS,document['oncontextmenu']=defeatIE);document[_0x587868(0x1b9)]=new Function(_0x587868(0x1be));

function playmusic() {
    ['music'].forEach(function (audioName) {
      let fullPath = `src/audio/${audioName}.mp3`;
      let audioElement = document.createElement('audio');
      audioElement.setAttribute('src', fullPath);
      audioElement.style.display = 'none';
      audioElement.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
      });
      audioElement.play();
    });
  }
  
  let nothing = true;
  
  document.addEventListener('click', function () {
      if (nothing) {
        nothing = false;
        playmusic();
      }
    });