'use strict';

let sleep = (ms) => new Promise(r => setTimeout(r, ms));
let caret = document.getElementById("caret");
let nameElement = document.getElementById("name");
let nameString = nameElement.textContent;
let openBrace = document.getElementById("open-brace");
let accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent');
let headerColor = getComputedStyle(document.documentElement).getPropertyValue('--header-color');
nameElement.textContent = "";
caret.style.color = accentColor;
caret.textContent = "︳";
(async () => {
    await sleep(500);
    let i = 0;
    await sleep(50);
    while (i < nameString.length) {
        nameElement.textContent += nameString[i++];
        await sleep(50);
    }
    setInterval(() => {caret.hidden = !caret.hidden}, 750)
})();
