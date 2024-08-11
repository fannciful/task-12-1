'use strict'

let userEnter = '';

document.getElementById('inputLinkButton').addEventListener('click', function () {
    userEnter = prompt('Enter your link: ');
});

document.getElementById('goToPage').addEventListener('click', function() {
    if (userEnter) {
        window.location.href = userEnter;
    }
    else if (userEnter === null) {
        alert('You have canceled!');
    }
    else {
        alert('Enter your link!');
    }
});