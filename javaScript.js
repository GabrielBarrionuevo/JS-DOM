// DECLARAMOS //
////////////////
////////////////
let nombreUsuario = prompt("Ingrese su nombre.");
let dineroUsuario = Number(prompt("Ingrese la cantidad de dinero que posee."))
let opcion1;
let opcion2;
function compraPapitas(valor, nombrePapita){
    if (dineroUsuario >= valor) {
        dineroUsuario = dineroUsuario - valor;
        alert(`Ha comprado papitas ${nombrePapita}. Su vuelto es de $${dineroUsuario}.`);             
    }
    else {
        alert("No tiene suficiente dinero.")
    }
};
let listaCarrito = [];
// SALUDOS!
let saludos = [`Bienvenido ${nombreUsuario}!!`, `Buenos días, ${nombreUsuario}!!`, "Buenos días!", "Bienvenido!"];
let randSal = (Math.random()*saludos.length) | 0;
let randomSaludos = saludos[randSal];
////////////////
////////////////

////////////////
////////////////
// OBJETOS //
// PAPITAS //
function papitas(nombre, precio, categoria, descripcion){
    this.nombre = nombre;
    this.precio = precio; 
    this.categoria = categoria;
    this.descripcion = descripcion;
}

let listaPapitas = [
    { nombre: "Clasica",         precio: 10, categoria: "normal",   descripcion: "Solo papitas" },
    { nombre: "Cheddar",         precio: 15, categoria: "normal",   descripcion: "Con queso cheddar" },
    { nombre: "Wasabi",          precio: 15, categoria: "normal",   descripcion: "Con condimento picante wasabi" },
    { nombre: "Wacamole",        precio: 20, categoria: "premium",  descripcion: "Con wacamole. Se le puede agregar tomate." },
    { nombre: "Queso Y Cebolla", precio: 20, categoria: "premium",  descripcion: "Con queso y cebolla. Se le puede agregar un poco mas de cebolla a elección" },
    { nombre: "Queso Gratinado", precio: 30, categoria: "deluxe",   descripcion: "Con queso gratinado a elección (no cheddar)" },
    { nombre: "Sal-Marina",      precio: 35, categoria: "deluxe",   descripcion: "Con sal marina. Se le puede agregar alguna salsa a elección (no wasabi o wacamole)" }
];
// HAMBURGUESAS //
// COMPLETAR //
//
//
//
////////////////
////////////////


// COMPRA DE PAPITAS //
////////////////
////////////////
while (opcion1 != 8) {
    opcion1 = prompt(`Su saldo es de $${dineroUsuario}. Qué desea comprar?
    1- Papitas clásicas $10
    2- Papitas con chedar $15
    3- Papitas sabor wasabi $15
    4- Papitas con wacamole $20
    5- Papitas con queso crema y cebolla $20
    6- Papitas con queso gratinado $30
    7- Papitas con sal marina $35.
    8- No comprar nada.
    `)
    
    switch (opcion1) {
        case "1":
            compraPapitas(Number(listaPapitas[0].precio), listaPapitas[0].nombre);
        break;
        
        case "2":
            compraPapitas(Number(listaPapitas[1].precio), listaPapitas[1].nombre);    
        break;

        case "3":
            compraPapitas(Number(listaPapitas[2].precio), listaPapitas[2].nombre);
        break;

        case "4":
            compraPapitas(Number(listaPapitas[3].precio), listaPapitas[3].nombre);
        break;

        case "5":
            compraPapitas(Number(listaPapitas[4].precio), listaPapitas[4].nombre);
        break;

        case "6":
            compraPapitas(Number(listaPapitas[5].precio), listaPapitas[5].nombre);
        break;

        case "7":
            compraPapitas(Number(listaPapitas[6].precio), listaPapitas[6].nombre);
        break;

        case "8":
            dineroUsuario = dineroUsuario;
            alert(`Su dinero es de $${dineroUsuario}. Adios!`); 
        continue;

        default:
            alert(`Ingrese un número válido.`); 
        break;
    }
}

// BUSCAR POR NOMBRE //
////////////////
////////////////
let nombreBuscado = prompt("Ingrese nombre de papita");
let nombreFiltrado = listaPapitas.filter(listaPapitas => (listaPapitas.nombre === nombreBuscado));
console.log(nombreFiltrado);

// FILTRAR POR PRECIO //
////////////////
////////////////
let baseDePrecio = Number(prompt("Ingrese precio Mínimo"));
let topeDePrecio = Number(prompt("Ingrese precio máximo"));
let preciosFiltrados = listaPapitas.filter(listaPapitas => (listaPapitas.precio <= topeDePrecio) && (listaPapitas.precio >= baseDePrecio));
console.log(preciosFiltrados);

// FILTRAR POR CATEGORIAS //
////////////////
////////////////
let categoriaBuscada = prompt("Ingrese nombre de categoria");
let categoriasFiltradas = listaPapitas.filter(listaPapitas => (listaPapitas.categoria === categoriaBuscada));
console.log(categoriasFiltradas);

// AGREGAR AL CARRITO //
////////////////
////////////////
while (opcion2 != 8) {
    opcion2 = prompt(`Ingrese papita a agregar al carrito 
    1- Papitas clásicas $10
    2- Papitas con chedar $15
    3- Papitas sabor wasabi $15
    4- Papitas con wacamole $20
    5- Papitas con queso crema y cebolla $20
    6- Papitas con queso gratinado $30
    7- Papitas con sal marina $35.
    8- Finalizar compra.
    `)

    switch (opcion2) {
        case "1":
            listaCarrito.push(listaPapitas[0]);
            break;

            case "2":
            listaCarrito.push(listaPapitas[1]);
            break;

            case "3":
            listaCarrito.push(listaPapitas[2]);
            break;

            case "4":
            listaCarrito.push(listaPapitas[3]);
            break;

            case "5":
            listaCarrito.push(listaPapitas[4]);
            break;

            case "6":
            listaCarrito.push(listaPapitas[5]);
            break;

            case "7":
            listaCarrito.push(listaPapitas[6]);
            break;

            case "8":
            alert(`Su carrito es: $${listaCarrito}. Adios!`); 
            continue;
            default:

            alert(`Ingrese un número válido.`); 
            break;
    }
}
console.log(listaCarrito);

// DEBO ENCONTRAR LA FORMA DE AUTOMATIZAR EL SWITCH. NO PUEDO MODIFICAR ESO POR CADA NUEVO PRODUCTO. NI HACER 100 LINEAS A MANO POR 100 PRODUCTOS. //

///////////////////
// DOM
///////////////////

//Saludo!
let contenedorSaludo = document.createElement("h2");
contenedorSaludo.innerHTML = `
    <h2>${randomSaludos}</h2>
`;
main.appendChild(contenedorSaludo);

//Dinero!
let contenedorDinero = document.createElement("h2");
contenedorDinero.innerHTML = `
    <h3>Dinero de ${nombreUsuario}: $${dineroUsuario}</h3>
`;
main.appendChild(contenedorDinero);

//Listado productos 
for (papita of listaPapitas) {
    let contenedor = document.createElement("article");
    contenedor.innerHTML = `
    <article class="contProducto">
        <img src="" alt="">
        <div class="Contenido">
            <p>${papita.nombre}</p>
            <p>${papita.precio}</p>
        </div>
        <div class="">
            <button class="btn-comprar">Agregar al carrito</button>
        </div>
    </article>
    `;
    main.appendChild(contenedor);
};

