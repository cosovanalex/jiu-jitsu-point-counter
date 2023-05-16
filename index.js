let saveEl1 = document.getElementById("save-el1")
let saveEl2 = document.getElementById("save-el2")
let countEl = document.getElementById("count-el")
let count = 0

function increment2() {
    count += 2
    countEl.textContent = count
}

function increment3() {
    count += 3
    countEl.textContent = count
}


function increment4() {
    count += 4
    countEl.textContent = count
}


function save1() {
    let countStr = count + " - "
    saveEl1.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function save2() {
    let countStr = count + " - "
    saveEl2.textContent += countStr
    countEl.textContent = 0
    count = 0
}

