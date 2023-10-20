// variables
const $ = (selector) => document.querySelector(selector)



// funciones 
//panel imagen
//url
$("#url").addEventListener("input", (e) =>{
    $(".mainImagen").style.backgroundImage = `url(${e.target.value})`  
})
//fondo de imagen
$("#fondoImagen").addEventListener("input", (e) =>{
    $(".mainImagen").style.backgroundColor = e.target.value
})
// filtros
const filtersMainImage = () => {
    $(".mainImagen").style.filter =`brightness(${$("#brightness").value}) opacity(${$("#opacity").value}) 
    contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${$("#grayscale").value}%) 
    sepia(${$("#sepia").value}%) hue-rotation(${$("#hue-rotation").value}deg) saturation(${$("#saturation").value}%)
    invert(${$("#invert").value})`
}
$("#brightness").addEventListener("input",filtersMainImage)

$("#opacity").addEventListener("input",filtersMainImage)

$("#contrast").addEventListener("input",filtersMainImage)
   
$("#blur").addEventListener("input",filtersMainImage)

$("#grayscale").addEventListener("input",filtersMainImage)

$("#sepia").addEventListener("input",filtersMainImage)

$("#hue-rotation").addEventListener("input",filtersMainImage)

$("#saturation").addEventListener("input",filtersMainImage)

$("#invert").addEventListener("input",filtersMainImage)
//boton reseteo de filtros
$("#resetFilters").addEventListener("click",() => {
    $("#brightness").value = "1"
    $("#opacity").value = "1"
    $("#contrast").value = "100"
    $("#blur").value = "0"
    $("#grayscale").value = "0"
    $("#sepia").value = "0"
    $("#hue-rotation").value = "0"
    $("#saturation").value = "100"
    $("#invert").value = "1"
    $(".mainImagen").style.filter = "none"
})

//panel texto

// texto superior
$("#topText").addEventListener("input", (e) =>{
     $(".paragraphTop").innerText = e.target.value  
})
// texto inferior
$("#bottomText").addEventListener("input", (e) =>{
    $(".paragraphBottom").innerText = e.target.value  
})
// color texto superior 
$("#color").addEventListener("input", (e) =>{
    $(".paragraphColorTop").style.color = e.target.value
})
// color texto inferior
$("#color").addEventListener("input", (e) =>{
    $(".paragraphColorBottom").style.color = e.target.value
})
//fondo texto superior

$("#fondoTexto").addEventListener("input", (e) =>{
    $(".mainTopText").style.backgroundColor = e.target.value
})

//fondo texto inferior
$("#fondoTexto").addEventListener("input", (e) =>{
    $(".mainBottomText").style.backgroundColor = e.target.value
})

$("#font").addEventListener("input",(e) => {
    $(".paragraphTop").style.fontFamily = e.target.value
})

$("#font").addEventListener("input",(e) => {
    $(".paragraphBottom").style.fontFamily = e.target.value
})









