function aavo() {
    document.getElementById('vagdo').play();
}

function midvagado() {
    document.getElementById('vagado2').play();
}

function thali() {
    document.getElementById('pilithali').play();
}

function thali2() {
    document.getElementById('pilithali2').play();
}

function bassdrum() {
    document.getElementById('bassdrumaudio').play();
}

document.addEventListener('keydown', (event) => {
    console.log(event.key);
    
    if (event.key === 's' || event.key === 'S') {
        document.getElementById('vagado2').play();
    }

})

document.addEventListener('keydown', (event) => {

    if (event.key === 'd' || event.key === 'D') {
        document.getElementById('vagdo').play();
    }

})

document.addEventListener('keydown', (event) => {

    if (event.key === 'a' || event.key === 'A') {
        document.getElementById('vagdo').play();
    }

})

document.addEventListener('keydown', (event) => {

    if (event.key === 'x' || event.key === 'X') {
        document.getElementById('bassdrumaudio').play();
    }

})

document.addEventListener('keydown', (event) => {
    if (event.key === 'W' || event.key === 'w') {
        document.getElementById('pilithali').play();
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'e' || event.key === 'E') {
        document.getElementById('pilithali2').play();
    }

})