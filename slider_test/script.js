var buttons = document.querySelectorAll('.button_style');
var photos = [
    'img/first.jpg',
    'img/second.jpg',
    'img/third.jpg',
    'img/fourth.jpg'
]
var mainJpg = document.querySelector('.main_jpg');

function slide(but, photo) {
    but.addEventListener('click', function(){
        mainJpg.src = photo;
    });
}

for (var i = 0; i < photos.length; i++) {
        slide(buttons[i], photos[i]);
}

for(var j = 0; j < buttons.length; j++) {
    addClick(buttons[j]);
}
function addClick (but) {
    but.addEventListener('click', function(){
        clear(but);
    });
};
function clear(but){
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('button_bg');
    }
    but.classList.add('button_bg');
};