// Variables modal1
let openBtn = document.querySelector('#open-btn');
let modalContainer = document.querySelector('#modal-container');
let closeBtn = document.querySelector('#close-btn');

// Variables Modal2
let openBtn2 = document.querySelector('#open-btn2');
let modalTwo = document.querySelector('#modal-two');
let closeBtn2 = document.querySelector('#close-btn2');


//Event Listeners Modal 1

openBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block';
    modalContainer.style.backgroundColor = 'rgba(0, 0, 0, .4)';
});

closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
    modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)';
});

window.addEventListener('click', function(e) {
    // console.log(window, 'window')
    // console.log(e, 'e')
    // console.log(e.target, 'target')
    // console.log(modalContainer, 'modal')
    if(e.target === modalContainer) {
        modalContainer.style.display = 'none';
        modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else if(e.target === modalTwo) {
        modalTwo.style.display = 'none';
        modalTwo.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});


//Event for Modal 2

openBtn2.addEventListener('click', function() {
    modalTwo.style.display = 'block';
    modalTwo.style.backgroundColor = 'rgba(0, 0, 0, .4)';
});

closeBtn2.addEventListener('click', function() {
    modalTwo.style.display = 'none';
    modalTwo.style.backgroundColor = 'rgba(0, 0, 0, 0)';
});



