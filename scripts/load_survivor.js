let details = document.getElementById('survivor-details');
let content = document.getElementById('survivor-content');
details.addEventListener('toggle', async (event) => {
    if (event.target.open && !content.innerHTML) {
        const response = await fetch("./survivor/content.html");
        const html = await response.text();
        content.outerHTML = html;
    }
});

