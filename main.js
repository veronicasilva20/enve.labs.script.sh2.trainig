
var nombre= "veronica ffsffsf";
var altura= 187;
/*
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML= `
    <h1>soy la caja de datos</h1>
    <h2>mi nombre es: ${nombre}</h2>
    <h3>mido: ${altura} cm</h3>`;

if(altura>= 190){
    datos.innerHTML += `<h1>eres una persona alta</h1>`
}else{
    datos.innerHTML += `<h1>eres una persona baja</h1>`
}
for(var i =1; i<=20; i++){
    //bloqueo dde instrcuccion
    datos.inner.HTML += "<h2>Estamos en año:"+1;
}
*/
function muestraminombre(nombre,altura){
    var misdatos = `
            <h1>soy la caja de datos</h1>
            <h2>mi nombre es :${nombre}</h2>
            <h3>mido:${altura}cm <h3>`;
    return misdatos;
}
function imprimir(){
    var datos =document.getElementById("datos");
        datos.innerHTML =muestraminombre("veronica ffsffsf, 187");    
}
imprimir();

var nombres =[`vero`,`san`,`mar`];

document.write(`<h1>listado de nombre</h1>`);
/*
for (i = 0;i<nombres.length; i++){
    document.write(nombre[i]+`<br/>`);
}
*/
nombres.forEach((nombre)=>{
    document.write(nombre+`<br/>`);
});
