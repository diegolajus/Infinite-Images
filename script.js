//DOMS 
const imageFrame = document.querySelector("#image-container")
const loader = document.querySelector("#loader")
const button = document.querySelector("#button")


// ARRAY QUE CONTENDRÁ LA RESPUESTA DEL FETCH
var photosList = [];


// ASYNC + AWAIT 
async function getPhotos(){
    
    const count = 10
    const urlKey = "U7IPzkUd7CUllGHz1Zx0gZxXy4eeqDP52b0gTIhY_xI"
    const url = `https://api.unsplash.com/photos/random/?client_id=${urlKey}&count=${count}`
    
    
    //FETCH
    var response = await fetch(url)
    var photosList = await response.json();

    //COMPROBACIONES
    console.log(photosList);
    console.log(imageFrame)
   
    // BUCLE FOR QUE CREA ELEMENTOS HTML --> IMG & A
    // SUSTITUYE SRC & ALT ATRIBUTES POR LOS CORRESPONDIENTES DE LA API IMAGE
    
    for (i=0; i<=photosList.length;i++){
        const anchor = document.createElement("a")
        const img = document.createElement("img")

        
        
        img.src = photosList[i].urls.raw
        img.alt = photosList[i].alt_description
        

        //APENDS
        imageFrame.appendChild(anchor)
        anchor.appendChild(img)
    } 
  
    
}

getPhotos();

//eventos para el boton +10
button.addEventListener("click", getPhotos)

window.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        getPhotos();
    }
})


// INTENTO DE HACER UN INFINITE SCROLL
// EVENTO PARA EL ELEMENTO WINDOW (PADRE DE TODO) PROPIEDAD "SCROLL"
// IF STATEMENT QUE PERMITE TRIGGEAR EL SCROLL CADA VEZ QUE ESTEMOS LLEGANDO AL FINAL DE LA PÁGINA 
// window.addEventListener("scroll", () => {
//     if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
//         getPhotos();
//     }    
// })

