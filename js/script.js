let suma = document.getElementById("btn_suma");
let resta = document.getElementById("btn_resta");
let multiplicar = document.getElementById("btn_mult");
let dividir = document.getElementById("btn_dividir");
let imc = document.getElementById("btn_imc");

function sumarNumeros(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    console.log('la suma es:', parseInt(num1) + parseInt(num2))
}
suma.addEventListener("click",sumarNumeros)

function restarNumeros(){
    let num1 = document.getElementById("num3").value;
    let num2 = document.getElementById("num4").value;
    console.log("la resta es:", parseInt(num1) - parseInt(num2)) 
}
resta.addEventListener("click",restarNumeros)

function multiplicarNumeros(){
    let num1 = document.getElementById("num5").value;
    let num2 = document.getElementById("num6").value;
    console.log("la multiplicación es: ", parseInt(num1) * parseInt(num2))
}
multiplicar.addEventListener("click",multiplicarNumeros)

function dividirNumeros(){
    let num1 = document.getElementById("num7").value;
    let num2 = document.getElementById("num8").value;
    console.log("la división es: ", parseInt(num1) / parseInt(num2))
}
dividir.addEventListener("click",dividirNumeros)

function calcularIMC(){
    let masculino = document.getElementById("m"); //aqui se declara masculino con la id "m" de index.html
    let femenino = document.getElementById("f"); //aqui se declara femenino con la id "f" de index.html
    if (!masculino.checked && !femenino.checked) {
        console.log("marque una opcion");
    } else if (masculino.checked) {
        console.log("MASCULINO 👨");
    } else {
        console.log("FEMENINO 👩");
    }
    let peso = document.getElementById("num9").value;
    let altura = document.getElementById("num10").value;
    let res = peso/Math.pow(altura,2);
    console.log(res.toFixed(2) +" ⚖");
    let estado = '';
    switch (true) {
        case res<18:
            estado = 'bajo peso'
            break;
        case (res>18 && res<24.9):
            estado = 'normal'
            break;
        case (res>25 && res<29.9):
            estado = 'sobre peso'
            break;
        case (res>30):
            estado = 'obecidad'
            break;
    }
    console.log('tu IMC es: ' + res.toFixed(2) + ' tu estado es: ', estado);
}
imc.addEventListener("click",calcularIMC)