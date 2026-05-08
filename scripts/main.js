// $(".key").draggable({});



// GAME RESETS

function gameReset(timeout) {
    setTimeout(function() {
        document.location="../index.html"
    }, timeout*1000);
}

function inactiveReset(timeout) {
    setTimeout(function() {
        document.location="../../index.html"
    }, timeout*1000);
}

function attackTimer(timeout) {
    setTimeout(function() {
        document.location="../gameover.html"
    }, timeout*1000);
}

function gameOver(timeout) {
    setTimeout(function() {
        document.location="../deathscreen.html"
    }, timeout*1000);

}



// DIFFICUTLY QUIPS

var about = document.querySelector(".about");
var about2 = document.querySelector(".about2");

function easyMessage() {
    console.log('it works!');
    about.classList.remove("remove");
    about2.classList.add("remove");
}

function hardMessage() {
    console.log('it works!');
    about2.classList.remove("remove");
    about.classList.add("remove");
}


// BLORGLE ASSIST MODE

var min = document.querySelector(".min")
var than = document.querySelector(".than")
var plus = document.querySelector(".plus")
var nill = document.querySelector(".nill")

var add = document.querySelector("#add")
var assist = document.querySelector("#assist")

function assistMode() {
    min.classList.toggle("sq2")
    than.classList.toggle("sq2")
    plus.classList.toggle("sq2")
    nill.classList.toggle("sq2")

    add.classList.toggle("remove")
    assist.classList.toggle("clicked")
}


// BAD GUY ASSIST MODE

var devil = document.querySelector(".friend3")

function assistModeTwo() {
    devil.classList.toggle("bad-guy")
    assist.classList.toggle("clicked")
}



// ARROWS BOOLEAN

const state = {A: false, B: false};

addEventListener('click', (e) => {

    const buttonClicked = e.target.innerHTML;
    state[buttonClicked] = true;

    console.log(Object.values(state));

    if(Object.values(state).includes(false)) {
        console.log('not all buttons are clicked');
    } else {
        console.log('all buttons are clicked');
        // Do what you got to do here
        document.location="page10.html";
    }
    
});



// TWICE

function twiceAudio() {
    const audio = new Audio("../../assets/twice-short.m4a");
    audio.play(setTimeout);
}