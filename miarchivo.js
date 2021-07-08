/*
let div1 = document.getElementById("aca")

let div2 = document.createElement("div")
div1.appendChild(div2)

let h2primero = document.createElement("h2")
h2primero.textContent = "Este es un subtitulo"
div1.appendChild(h2primero)

let parrafo = document.createElement("p")
parrafo.textContent = "ESTE ES EL COPY DESDE TEXT CONTENT"
parrafo.setAttribute("class", "text-danger container")

div2.appendChild(parrafo)


//foter[0].innerHTML = "<p>ESTE ES EL COPY </p>"
let ocultar = document.querySelector("#id2")
ocultar.setAttribute("style", "display: none")
*/

class Producto {
    constructor(tipo, marca, cantidad, precio){
        this.tipo = tipo,
        this.marca = marca,
        this.cantidad = cantidad,
        this.precio = precio,
        this.disponible = true
    }
    sumarIva(){
        return this.precio * 1.21;
    }
}

var arrayProductos = [];
do{
    var comprobacion = prompt(`Ingrese un tipo producto o fin para terminar`);
    if (comprobacion === "fin"|| comprobacion ==="FIN" || comprobacion === "Fin"){
        break;
    }else{
        tipoP = comprobacion;
        var marcaP =prompt("Ingrese la marca");
        var cantidadP = prompt("Ingrese la cantidad");
        var precioP = prompt("Ingrese el valor");
        arrayProductos.push(new Producto(tipoP, marcaP, cantidadP, precioP)); 
    }
}
while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin");

for(var producto of arrayProductos){
console.log(producto.sumarIva());
console.log(producto.sumarIva() * producto.cantidad);
}


for (var  producto of arrayProductos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h2> Producto : ${producto.tipo}</h2>
                            <p> Marca : ${producto.marca}</p>
                            <p> Cantidad : ${producto.cantidad}</p>
                            <b> Precio : ${producto.precio}</b>`;
    document.body.appendChild(contenedor);        
}


var sinStock = arrayProductos.filter(producto => producto.marca == comprobacion || producto.cantidad == 0 || producto.disponible == false);
console.log(`Producto ${producto.marca} sin stock`);

