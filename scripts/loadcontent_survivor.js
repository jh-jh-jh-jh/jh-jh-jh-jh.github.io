let details = document.getElementById('survivor-details');
let content = document.getElementById('survivor-content');
details.addEventListener('toggle', (event) => {
if (event.target.open && !content.innerHTML) {
    content.innerHTML = `
        <div>
          <h2>Prototype</h2>
          <video style="width:195px; height:360px; object-fit:cover" muted autoplay loop>
            <source src="./assets/prototype.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Final product</h2>
          <video style="width:195px; height:360px; object-fit:cover" muted autoplay loop>
            <source src="./assets/short_gameplay.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>Showcase</h2>
          <video style="width:195px; height:360px; object-fit:cover" muted autoplay loop>
            <source src="./assets/showcase.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2>FSM</h2>
          <a href="./survivor/fsm.html" target="_blank">
            <img src="./assets/fsm.jpg" style="width:100%; object-fit:contain"
              alt="FSM" style="max-width:150px;max-width:150px"/>
          </a>
          <p>(Click for high-res)</p>
        </div>
        <div>
          <h2>Datapath</h2>
          <a href="./survivor/datapath.html" target="_blank">
            <img src="./assets/datapath.jpg" style="width:100%; object-fit:contain"
              alt="Datapath" style="max-width:150px;max-width:150px"/>
          </a>
          <p>(Click for high-res)</p>
        </div>
    `;
}
});

