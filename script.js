document.getElementById('autoButton').addEventListener('click', auto);
document.getElementById('linesNumber').addEventListener('click', refresh);
document.getElementById('stopButton').addEventListener('click', stop);
document.getElementById('resetButton').addEventListener('click', reset);
document.getElementById('linesColor').addEventListener('input', changeLinesColor);

let autoOn = false;
let reseted = false;
let memory = 0;
let linesColor = '#ff0000';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changeLinesColor() {
    linesColor = document.getElementById('linesColor').value;
}

async function auto() {
    let i = 1;
    if (autoOn)
        return;
    if (!reseted) {
        i = memory;
        reseted = false;
    }
    autoOn = true;
    while (autoOn) {
        if (i > 1500) {
            break;
        }
        draw(i);
        document.getElementById('linesNumber').value = i;
        await sleep(1 + ((document.getElementById('speedRange').value - 1) * 199) / 99);
        i++;
    }
    memory = i;
}

function stop() {
    autoOn = false;
}

function reset() {
    autoOn = false;
    reseted = true;
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
        needle.style.backgroundColor = linesColor;
        needle.style.transform = `rotate(${i}deg)`;
        circle.appendChild(needle);
    }
}
