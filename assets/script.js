
ddls = ["Domingo","Lunes","Martes",
    "Miercoles","Jueves","Viernes","Sabado"];

mdea = ["Enero", "Febrero", "Marzo", "Abril", 
    "Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"]

function horas12() {

    let texto = document.getElementById("reloj");
    let texto2 = document.getElementById("dia");

    let año = new Date().getFullYear();
    let mes = new Date().getMonth();
    let dia = new Date().getDate();
    let diads = new Date().getDay();
    let hora = new Date().getHours();
    let minutos = new Date().getMinutes();
    let segundos = new Date().getSeconds(); 
    
    hora = hora.toString().padStart(2,'0')   
    minutos = minutos.toString().padStart(2,'0')
    segundos = segundos.toString().padStart(2,'0') 

    if (hora == 0){
        hora = 12
        ciclo = "AM"
    } else if (hora > 12){
        hora = hora - 12
        ciclo = "PM"
    } else if (hora == 12){
        ciclo = "PM"
    } else{
        ciclo = "AM"
    }

    texto.innerHTML = `${hora}:${minutos}:${segundos} ${ciclo}`
    texto2.innerHTML = `${ddls[diads]} ${dia} de ${mdea[mes]} de ${año}`
}

function horas24() {

    let texto = document.getElementById("reloj");
    let texto2 = document.getElementById("dia");

    let año = new Date().getFullYear();
    let mes = new Date().getMonth();
    let dia = new Date().getDate();
    let diads = new Date().getDay();
    let hora = new Date().getHours();
    let minutos = new Date().getMinutes();
    let segundos = new Date().getSeconds(); 

    //hora = hora + 20
    
    hora = hora.toString().padStart(2,'0')   
    minutos = minutos.toString().padStart(2,'0')
    segundos = segundos.toString().padStart(2,'0') 

    texto.innerHTML = `${hora}:${minutos}:${segundos}`
    texto2.innerHTML = `${ddls[diads]} ${dia} de ${mdea[mes]} de ${año}`
}

activo = 1;
var formato12 = setInterval(horas12,1000);
var formato24;

function cambiarFormato(){

    let boton = document.getElementById("boton");

    if (activo == 1){
        clearInterval(formato12)
        formato24 = setInterval(horas24,1000);
        activo = 0;
        boton.innerHTML = "Cambiar a 12 horas"
        
    } else if (activo == 0){
        clearInterval(formato24)
        formato12 = setInterval(horas12,1000);
        activo = 1;
        boton.innerHTML = "Cambiar a 24 horas"
    } 


}
