"use strict";
import "../styles/main.scss";

/* Hämtar knappen och sidan/sektionen som ska få "mode"-klasser */
const sugarBtn = document.querySelector(".btn-sugar");
const sprinkleZone = document.querySelector(".sprinkle-zone");
const animationHeader = document.querySelector(".animation-header");
const body = document.querySelector("body.page-animation");
const bubbleLayer = document.querySelector(".bubble-layer");

/* Håller koll på vilket läge knappen är i: 0=av, 1-3=effekter */
let mode = 0;

/* Kör bara om elementen faktiskt finns på sidan */
if (!sugarBtn || !body) {

} else {
    sugarBtn.addEventListener("click", () => {
        mode = (mode + 1) % 4;

        /* Efter 3 lägen: reset (stäng av allt) */
        animationHeader?.classList.remove("mode-1");
        body?.classList.remove("mode-2");
        bubbleLayer?.classList.remove("mode-2");
        sprinkleZone?.classList.remove("mode-3");

        if (mode >= 1) {
            animationHeader?.classList.add("mode-1");
            
        }
        if (mode >= 2) {
            body?.classList.add("mode-2");
            bubbleLayer?.classList.add("mode-2"); 
        }
        if (mode >= 3) {
            sprinkleZone?.classList.add("mode-3");
        }


        /*Test test */
        console.log("Sockerrus-läge:", mode);
    });
}