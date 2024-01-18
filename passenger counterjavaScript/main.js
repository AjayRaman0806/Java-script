

let countEl = document.getElementById("peopleCount");
let saveEl = document.getElementById("pre-entries");
let count = 0

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.innerText = 0;
    count = 0;
}


