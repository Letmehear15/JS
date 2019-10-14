var popup = document.querySelector('.hidden');

var show = document.querySelector('.help-button');
var close = document.querySelector('.close');

show.addEventListener('click', function () {
    popup.classList.add('show-up');
});
close.addEventListener('click', function() {
    popup.classList.remove('show-up');
});