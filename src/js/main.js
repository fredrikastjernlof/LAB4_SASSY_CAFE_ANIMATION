import "../styles/main.scss";

"use strict"

/* Hämtar knappen och sidan/sektionen som ska få "mode"-klasser */
const sugarBtn = document.querySelector(".btn-sugar");
const animationPage = document.querySelector(".animation-page");

/* Håller koll på vilket läge knappen är i: 0=av, 1-3=effekter */
let mode = 0;

/* Kör bara om elementen faktiskt finns på sidan */
if (sugarBtn && animationPage) { 
    sugarBtn.addEventListener("click", () => {
        /* Nästa läge */
        mode++;

         /* Efter 3 lägen: reset (stäng av allt) */
        if (mode > 3) {
            mode = 0; 
        }

        /* Nollställ alltid gamla klasser innan vi sätter ny */
        animationPage.classList.remove("mode-1", "mode-2", "mode-3");

         /* Lägg på rätt klass om vi är i läge 1-3 */
        if (mode !== 0) {
            animationPage.classList.add(`mode-${mode}`);
        }

        /*Test test */
        console.log("Sockerrus-läge:", mode);
    });
}