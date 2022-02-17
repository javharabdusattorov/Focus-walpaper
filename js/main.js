'use strict';

let elMyImg = document.querySelectorAll('.myImg');

let elMyModul1 = document.querySelector('.myModul1');
let elModalCon1 = document.querySelector('.modal-con1');
let elClose1 = document.querySelector('.close1');
let elCaption1 = document.querySelector('.caption1');

// Let's GOOO

for (let i = 0; i < 9; i++) {
    elMyImg[i].addEventListener('click', function() {
        elClose1.style.display = 'block';

        elMyModul1.style.display = 'block';
        elModalCon1.src = this.src;
        elCaption1.innerHTML  = this.alt;
    })

    elClose1.addEventListener('click', function () {
        elMyModul1.style.display = 'none';
    })
}