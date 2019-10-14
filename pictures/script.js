var fullPhotos = [
'img/lina.jpg',
'img/seg.jpg',
'img/lev.jpg',
'img/vas.jpg'];

var prv = document.querySelectorAll('.btn-pic');
var full = document.querySelector('.full-photo');

var btnFilter = document.querySelectorAll('.btn');

var makeChange = function (mini, big) {
    mini.addEventListener('click', function() {
        full.src = big;
    });
};
for (var i = 0; i < prv.length; i++) {
    makeChange(prv[i],fullPhotos[i]);
};

for(var j = 0; j < btnFilter.length; j++) {
    clickControl(btnFilter[j]);
};
function clickControl(filters) {
    filters.addEventListener('click', function() {
        filt(filters);
    });
}
function filt(filters) {
    for (var i = 0; i < btnFilter.length; i++) {
        full.classList.remove(btnFilter[i].dataset.filter);
    }
    full.classList.add(filters.dataset.filter);
}
