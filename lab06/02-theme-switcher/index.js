/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const default_theme = () => {
   document.querySelector("body").className="default";
};

const desert_theme = () => {
   document.querySelector("body").className="desert";
};

const ocean_theme = () => {
   document.querySelector("body").className="ocean";
};

const highcontrast_theme = () => {
   document.querySelector("body").className="high-contrast";
};

document.querySelector("#default").addEventListener("click", default_theme);

document.querySelector("#desert").addEventListener("click", desert_theme);

document.querySelector("#ocean").addEventListener("click", ocean_theme);

document.querySelector("#high-contrast").addEventListener("click", highcontrast_theme);