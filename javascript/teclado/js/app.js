var te1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
var te2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ']
var te3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

var input = document.getElementById('input')
var deleteLast = document.getElementById('deleteLast')
var result1 = document.getElementById('result1');
var result2 = document.getElementById('result2');
var result3 = document.getElementById('result3');

function handlerTecla(t){
    input.value += t
}

function Delete(){
    console.log(input.value)
    input.value = input.value.slice(0, -1);
    console.log(input.value)
}



for(var i = 0; i < te1.length; i++){
    result1.innerHTML += `<button type="submit"  class="btn btn-teclado" onClick="handlerTecla('${te1[i]}')">${te1[i]}</button>`
}
for(var i = 0; i < te2.length; i++){
    result2.innerHTML += `<button type="submit" class="btn btn-teclado" onClick="handlerTecla('${te2[i]}')">${te2[i]}</button>`
}
for(var i = 0; i < te3.length; i++){
    result3.innerHTML += `<button type="submit" class="btn flexRow btn-teclado" onClick="handlerTecla('${te3[i]}')">${te3[i]}</button>`
}