'use strict';

let sleep = (ms) => new Promise(r => setTimeout(r, ms));
let caret = document.getElementById("caret");
let nameElement = document.getElementById("name");
let nameString = nameElement.textContent;
let openBrace = document.getElementById("open-brace");
let closeBrace = document.getElementById("close-brace");
let color = getComputedStyle(document.documentElement).getPropertyValue('--accent');
nameElement.textContent = "";
caret.style.color = color;
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
    closeBrace.style.color = color;
    openBrace.style.color = color;
    await sleep(300);
    caret.hidden = true;
})();
