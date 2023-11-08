//variables globales
const d = document;
let imgN1 = [
    {nombre: "deadpool", url: "imagenes/deadpool.jpg"},
    {nombre: "hulk", url: "imagenes/hulk.webp"},
    {nombre: "spiderman", url: "imagenes/spiderman.webp"},
    {nombre: "thor", url: "imagenes/thor.jpeg"},
    {nombre: "wolverine", url: "imagenes/wolverine.jpg"},
    {nombre: "gambit", url: "imagenes/gambit.jpg"},
    {nombre: "deadpool", url: "imagenes/deadpool.jpg"},
    {nombre: "hulk", url: "imagenes/hulk.webp"},
    {nombre: "spiderman", url: "imagenes/spiderman.webp"},
    {nombre: "thor", url: "imagenes/thor.jpeg"},
    {nombre: "wolverine", url: "imagenes/wolverine.jpg"},
    {nombre: "gambit", url: "imagenes/gambit.jpg"}
];
let tablero = d.querySelector(".tablero");
let imagenNombre = []; //guardar nombres de imagen
let imagenID = []; //guardar posiciones de imagen

agregarImaganes();
//funcion para agregar las imagenes al tablero
function agregarImaganes() {
    //recorrer con un forEach las imagenes del array
    imgN1.forEach((imagen, i)=>{
        let div = d.createElement("div"); //crear la etiqueta div
        div.className = "col-3"; //agregar la clase col-3 al div
        let img = d.createElement("img");//crear la etiqueta img
        img.className = "img-fluid altura-img"; //agregar la clase img-fluid a la img
        img.id = i; //enumerar las imagenes por medio de un id
        img.src = "imagenes/ocultar.jpg"; //agregar la ubicacion de la imagen
        img.addEventListener("click", mostrarImg); //agregar evento click a la imagen
        div.appendChild(img);//agregar la imagen al div
        tablero.appendChild(div);//agregar los div al tablero
    });
}

//funcion para mostrar las imagenes ocultas
function mostrarImg() {
    //obtener posicion de la imagen
    let imgID = this.getAttribute("id");
    //alert("# de imagen: "+imgID);
    this.src = imgN1[imgID].url; //modificar la url de la imagen
    imagenNombre.push( imgN1[imgID].nombre); //guardar los nombres de la imagen
    imagenID.push(imgID);//guardar la posicion de la imagen

    if(imagenNombre.length == 2){
        setTimeout(compararImg, 200);
    }

}

//Funcion para comparar imagenes
function compararImg(){
    let imagenesTablero = d.querySelectorAll(".tablero div img");
    if( imagenNombre[0] == imagenNombre[1] ){
        alert("felicitacion adivinaste una imagen");
        imagenesTablero[imagenID[0]].src = "imagenes/ok.png";
        imagenesTablero[imagenID[1]].src = "imagenes/ok.png";
    }else{
        alert("Fallaste las imagenes son diferentes")
        imagenesTablero[imagenID[0]].src = "imagenes/ocultar.jpg";
        imagenesTablero[imagenID[1]].src = "imagenes/ocultar.jpg";
    }
    imagenNombre = [];
    imagenID = [];
}