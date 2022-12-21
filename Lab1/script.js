const first = document.getElementById("first");
const second = document.querySelector("#second");
let clickedOnFirstItem = false;
let clickedOnSecondItem = false;

window.onload = function() {
    first.addEventListener("click", () => {
        const backgroundColor = clickedOnFirstItem ? 'blue' : 'red'
        const textColor = clickedOnFirstItem ? 'grey' : 'orange'
        first.style.background = backgroundColor;
        first.style.color = textColor;
        clickedOnFirstItem = true;
    })
    second.addEventListener("click", () => {
        const backgroundColor = clickedOnSecondItem ? 'yellow' : 'red'
        const textColor = clickedOnSecondItem ? 'green' : 'purple'
        second.style.background = backgroundColor;
        second.style.color = textColor;
        clickedOnSecondItem = true;

    });
}



function add() {
    document.getElementById("photo").style.display = 'initial';
}

function zoomIn() {
    const GFG = document.getElementById("photo");
    const currWidth = GFG.clientWidth;
    const currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight + 40) + "px";
    GFG.style.width = (currWidth + 100) + "px";
}

function zoomOut() {
    const GFG = document.getElementById("photo");
    const currWidth = GFG.clientWidth;
    const currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight - 40) + "px";
    GFG.style.width = (currWidth - 100) + "px";
}

function remove() {
    document.getElementById("photo").style.display = 'none';
}