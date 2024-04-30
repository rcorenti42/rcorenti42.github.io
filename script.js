document.getElementById('autoButton').addEventListener('click', auto);
document.getElementById('linesNumber').addEventListener('click', refresh);
document.getElementById('stopButton').addEventListener('click', stop);
document.getElementById('resetButton').addEventListener('click', reset);

let autoOn = false;
let memory = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function auto() {
    let i = 1;
    if (autoOn)
        return;
    i = memory;
    autoOn = true;
    while (autoOn) {
        draw(i);
        document.getElementById('linesNumber').value = i;
        await sleep(1);
        i++;
    }
    memory = i;
}

function stop() {
    autoOn = false;
}

function reset() {
    autoOn = false;
    draw(0);
    memory = 0;
}

function refresh() {
    if (!autoOn) {
        let nbOfLines = parseInt(document.getElementById('linesNumber').value, 10);
        draw(nbOfLines);
    }
}

function draw(nbOfLines) {
    let circle = document.getElementById('circle');
    circle.innerHTML = '';

    let inc = 360 / nbOfLines;

    if (nbOfLines <= 0)
    return;

    for (let i = 0; i < 360; i += inc) {
        let needle = document.createElement('div');
        needle.className = 'needle';
        needle.style.transform = `rotate(${i}deg)`;
        circle.appendChild(needle);
    }
}
