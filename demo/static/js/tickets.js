
function cambio(){ 
    let categoria = document.getElementById("categoria").value;
    let cant = document.getElementById("cantidad").value;
    let total=document.getElementById("total");
if (categoria == "Estudiante") {
    console.log("Holaaa");
    let porcentaje1 = 220 * 80 / 100;
    let result1 = 220 - porcentaje1;
    total.value="Total a Pagar $"+result1 * cant
    
}else{
if (categoria == "Trainee") {
    let porcentaje2 = 220 * 50 / 100;
    let result2 = 220 - porcentaje2;
    total.value="Total a Pagar $"+result2 * cant
}else{
if (categoria == "Junior") {
    let porcentaje3 = 220 * 15 / 100;
    let result3 = 220 - porcentaje3;
    total.value="Total a Pagar $"+result3 * cant

}
}
}
}

function borrar(){
    let nombre=document.getElementById("txtNombre").value="";
    let ape=document.getElementById("txtApellido").value="";
    let correo=document.getElementById("txtEmail").value="";
    let cant = document.getElementById("cantidad").value="";
    let total=document.getElementById("total").value="";
}



