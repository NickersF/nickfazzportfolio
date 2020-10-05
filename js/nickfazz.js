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

// Image switching events for outlinks

// Image logo varaibles
const gitHubImg = document.getElementById("gitHubImg");
const codePenImg = document.getElementById("codePenImg");
const behanceImg = document.getElementById("behanceImg");

// Image swap events for GitHub logo
gitHubImg.addEventListener("mouseover", function() {
    gitHubImg.src = "./img/icon_GitHub_Light_Green.svg";
});

gitHubImg.addEventListener("mouseout", function() {
    gitHubImg.src = "./img/icon_GitHub_Grey.svg";
});

// Image swap events for CodePen logo
codePenImg.addEventListener("mouseover", function() {
    codePenImg.src = "./img/icon_CodePen_Light_Green.svg";
});

codePenImg.addEventListener("mouseout", function() {
    codePenImg.src = "./img/icon_CodePen_Grey.svg";
});

// Image swap events for Behance logo
behanceImg.addEventListener("mouseover", function() {
    behanceImg.src = "./img/icon_Behance_Light_Green.svg";
});

behanceImg.addEventListener("mouseout", function() {
    behanceImg.src = "./img/icon_Behance_Grey.svg"
});