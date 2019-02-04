const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")
const n4 = document.getElementById("n4")
const n5 = document.getElementById("n5")
const n6 = document.getElementById("n6")
const n7 = document.getElementById("n7")
const n8 = document.getElementById("n8")
const n9 = document.getElementById("n9")
const n0 = document.getElementById("n0")

const pisoInput = document.getElementById('piso')
const deptoInput = document.getElementById('depto')

const llamadoCas = document.getElementById('llamadoCas')

const llamar = document.getElementById("llamar")
const borrar = document.getElementById("borrar")

const piso = []


const cont = 0


console.log("Inicial State: Piso Array: ");
console.log(piso)
const depto = []
console.log("Inicial State: Depto Array: ")
console.log(depto)

n0.addEventListener('click', () => {
    console.log("0");

    if (cont < 2) {
        piso.push(0)
        console.log("State: Piso Array: ");
        console.log(piso)
        cont++
    }
    pisoInput.value = parseInt(piso.join(''))

    if (cont > 2) {
        depto.push(0)
        console.log("State: Depto Array: ")
        console.log(depto)
    }
    deptoInput.value = parseInt(depto.join(''))
})


n1.addEventListener('click', () => {
    console.log("1");
    if (cont < 2) {
        piso.push(1)
        console.log("State: Piso Array: ");
        console.log(piso)
        cont++
    }
    pisoInput.value = parseInt(piso.join(''))

    if (cont == 2) {
        depto.push(1)
        console.log("State: Depto Array: ")
        console.log(depto)
        cont++
    }
    deptoInput.value = parseInt(depto.join(''))
})
n2.addEventListener('click', () => {
    console.log("2");

    if (piso.length < 2) {
        piso.push(2)
        console.log("State: Piso Array: ");
        console.log(piso)
    }
    pisoInput.value = parseInt(piso.join(''))

    if (piso.length > 2) {
        depto.push(2)
        deptoInput.value = depto.join()
        console.log("State: Depto Array: ")
        console.log(depto)
    }
    deptoInput.value = parseInt(depto.join(''))
})
n3.addEventListener('click', () => {
    console.log("3");

    if (piso.length < 2) {
        piso.push(3)
        console.log("State: Piso Array: ");
        console.log(piso)
    }
    pisoInput.value = parseInt(piso.join(''))

    if (piso.length > 2) {
        depto.push(3)
        deptoInput.value = depto.join()
        console.log("State: Depto Array: ")
        console.log(depto)
    }
    deptoInput.value = parseInt(depto.join(''))
})
n4.addEventListener('click', () => {
    console.log("4");
    if (piso.length < 2) {
        piso.push(4)
        console.log("State: Piso Array: ");
        console.log(piso)
    }
    pisoInput.value = parseInt(piso.join(''))

    if (piso.length > 2) {
        depto.push(3)
        deptoInput.value = depto.join()
        console.log("State: Depto Array: ")
        console.log(depto)
    }
    deptoInput.value = parseInt(depto.join(''))
})
n5.addEventListener('click', () => {
    console.log("5");
    if (piso.length < 2) {
        piso.push(5)
        console.log("State: Piso Array: ");
        console.log(piso)
    }
    pisoInput.value = parseInt(piso.join(''))

    if (piso.length > 2) {
        depto.push(4)
        deptoInput.value = depto.join()
        console.log("State: Depto Array: ")
        console.log(depto)
    }
    deptoInput.value = parseInt(depto.join(''))
})
n6.addEventListener('click', () => {
    console.log("6");
    if (piso.length < 2) {
        piso.push(5)
        console.log("State: Piso Array: ");
        console.log(piso)
    }
    pisoInput.value = parseInt(piso.join(''))

    if (piso.length > 2) {
        depto.push(6)
        deptoInput.value = depto.join()
        console.log("State: Depto Array: ")
        console.log(depto)
    }
    deptoInput.value = parseInt(depto.join(''))
})
n7.addEventListener('click', () => {
    console.log("7");
    if (piso.length < 2) {
        piso.push(7)
        console.log("State: Piso Array: ");
        console.log(piso)
    }
    pisoInput.value = parseInt(piso.join(''))

    if (piso.length > 2) {
        depto.push(7)
        deptoInput.value = depto.join()
        console.log("State: Depto Array: ")
        console.log(depto)
    }
    deptoInput.value = parseInt(depto.join(''))
})
n8.addEventListener('click', () => {
    console.log("8");
    if (piso.length < 2) {
        piso.push(7)
        console.log("State: Piso Array: ");
        console.log(piso)
    }
    pisoInput.value = parseInt(piso.join(''))
})
n9.addEventListener('click', () => {
    console.log("9");

    if (piso.length < 2) {
        piso.push(8)
        console.log("State: Piso Array: ");
        console.log(piso)
    }
    pisoInput.value = parseInt(piso.join(''))

    if (piso.length > 2) {
        depto.push(9)
        deptoInput.value = depto.join()
        console.log("State: Depto Array: ")
        console.log(depto)
    }
    deptoInput.value = parseInt(depto.join(''))
})
llamar.addEventListener('click', () => {
    llamadoCas.innerHTML = `Llamando al piso ${ piso.join('') }, depto n° ${depto.join('')}`
})
borrar.addEventListener('click', () => {
    console.log("limpiar");
})