/*
Author: Nicholas Fazzolari

This file contains custom JS functions and objects which
the website relies on to function properly.
*/

// Switch topnav alignment from flex-end to flex-center depending on screen size
const el = document.getElementById("topNav");

window.addEventListener("resize", swapNavAlignmentCSSClass);

function swapNavAlignmentCSSClass() {
    if (window.innerWidth < 768) {
        el.classList.replace("justify-content-end", "justify-content-center");
    }
    else {
        el.classList.replace("justify-content-center", "justify-content-end");
    }
}