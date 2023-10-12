function sumar(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1+n2;
    document.write("el valor de la suma seria "+resultado)
}


function restar(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1-n2;
    document.write("el valor de la resta seria "+resultado)
}


function multiplicar(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1*n2;
    document.write("el valor de la multiplicación seria "+resultado)
}


function dividir(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1/n2;
    document.write("el valor de la división seria "+resultado)
}


function potencia(){
    let n1=parseInt(document.getElementById("n1").value)
    resultado=n1*n1;
    document.write("el valor de la potencia seria "+resultado)
}
function mostrar(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let opc =parseInt(document.getElementById("opc").value)
    switch(opc){
        case 1:
            sumar(n1+n2)
            break;
        case 2:
            restar()
            break;
        case 3:
            multiplicar()
            break;
        case 4:
            dividir()
            break;
        case 5:
            potencia()
            break;
        default:
            alert("La opción no es valida")
    }
}