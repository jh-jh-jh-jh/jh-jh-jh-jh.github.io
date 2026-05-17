'use strict';

let sleep = (ms) => new Promise(r => setTimeout(r, ms));
let caret = document.getElementById("caret");
let nameElement = document.getElementById("name");
let nameString = nameElement.textContent;
let openBrace = document.getElementById("open-brace");
let accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent');
let headerColor = getComputedStyle(document.documentElement).getPropertyValue('--header-color');
openBrace.textContent = "";
openBrace.style.color = headerColor;
let closeBrace = document.getElementById("close-brace");
closeBrace.textContent = "";
closeBrace.style.color = headerColor;
nameElement.textContent = "";
caret.style.color = accentColor;
caret.textContent = "|";
(async () => {
    await sleep(500);
    let i = 0;
    openBrace.textContent = "[";
    await sleep(50);
    while (i < nameString.length) {
        nameElement.textContent += nameString[i++];
        await sleep(50);
    }
    closeBrace.textContent = "]";
    closeBrace.style.color = accentColor;
    openBrace.style.color = accentColor;
    await sleep(300);
    caret.hidden = true;
})();
