var display = document.getElementById('display')
var acum = 0;
var op = ''


function dividir(){
    console.log("xd")
}
function cls(){
    display.value = '',
    acum = 0;
}
function handlerButton(n){
    display.value += n
}
function sumar(){
    acum = display.value
    op = '+'
    display.value = ''
}
function restar(){
    console.log("restar")
    acum = display.value
    op = '-'
    display.value = ''
}
function multiplicar(){
    console.log("multiplicar")
    acum = display.value
    op = '*'
    display.value = ''
}
function dividir(){
    console.log("dividr")
    acum = display.value
    op = '/'
    display.value = ''
}
function igual(){
    n1 = parseFloat(acum)
    console.log(n1)
    switch(op){
        case '+':
            rta = n1 + parseFloat(display.value)
            display.value = rta
        break;
        case '-':
            rta = n1 - parseFloat(display.value)
            display.value = rta
        break;
        case '*':
            rta = n1 * parseFloat(display.value)
            display.value = rta
        break;
        case '/':
            rta = n1 / parseFloat(display.value)
            if(rta == Infinity){
                display.value = 'MATH ERROR. xd'
            } else {
                display.value = rta
            }
        break;
            default:
                console.log('xd')
            break;
            
    }
}

