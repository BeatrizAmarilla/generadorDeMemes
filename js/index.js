// variables



// funciones 
const $ = (selector) => document.querySelector(selector)
//panel imagen
//url
$("#url").addEventListener("input", (e) =>{
    $(".mainImagen").style.backgroundImage = `url(${e.target.value})`  
})
//fondo de imagen
$("#fondoImagen").addEventListener("input", (e) =>{
    $(".mainImagen").style.backgroundColor = e.target.value
})
// //select mix-blend-mode
$("#mixFilters").addEventListener("input",(e) => {
    $(".mainImagen").style.backgroundBlendMode= e.target.value
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
//fuentes
$("#font").addEventListener("input",(e) => {
    $(".paragraphTop").style.fontFamily = e.target.value
})

$("#font").addEventListener("input",(e) => {
    $(".paragraphBottom").style.fontFamily = e.target.value
})
$("#textAlingLeft").addEventListener("click",() => {
    $(".main_textos").style.textAlign = "left"
})

$("#textAlingCenter").addEventListener("click",() => {
    $(".main_textos").style.textAlign = "center"
})

$("#textAlingRight").addEventListener("click",() => {
    $(".main_textos").style.textAlign = "right"
})

// contorno de texto

$("#outlineNone").addEventListener("click",() => {
    $(".paragraphTop").style.webkitTextStroke = "0px"
})

$("#outlineNone").addEventListener("click",() => {
    $(".paragraphBottom").style.webkitTextStroke = "0px"
})

$("#outlineLight").addEventListener("click",() => {
    $(".paragraphTop").style.webkitTextStroke = "1px white"
})

$("#outlineLight").addEventListener("click",() => {
    $(".paragraphBottom").style.webkitTextStroke = "1px white"
})

$("#outlineDark").addEventListener("click",() => {
    $(".paragraphTop").style.webkitTextStroke = "1px black"
})

$("#outlineDark").addEventListener("click",() => {
    $(".paragraphBottom").style.webkitTextStroke = "1px black"
})

//tamano de fuente
// $("#number").addEventListener("input",(e) => {
//     $(".paragraphTop").style.fontSize = `${e.targe.value}px`
// })


// $("#number").addEventListener("input",(e) => {
//     $(".paragraphBottom").style.fontSize = `${e.targe.value}px`
// })

//sin texto superior y sin texto inferior

$("#sinTextoSuperior").addEventListener("input",(e) => {
  if (e.target.checked){
    $(".paragraphTop").style.display = "none"
  }else{
    $(".paragraphTop").style.display = "block"
  }
})

$("#sinTextoInferior").addEventListener("input",(e) => {
  if (e.target.checked){
    $(".paragraphBottom").style.display = "none"
  }else{
    $(".paragraphBottom").style.display = "block"
  }
})
  //fondo transparente
$("#fondoTransparente").addEventListener("input",(e) => {
  if (e.target.checked){
    $(".mainTopText").style.backgroundColor = "transparent" 
  }else{
    $(".mainTopText").style.backgroundColor= "white"
  }
})

$("#fondoTransparente").addEventListener("input",(e) => {
  if (e.target.checked){
    $(".mainBottomText").style.backgroundColor = "transparent" 
  }else{
    $(".mainBottomText").style.backgroundColor= "white"
  }
})

//espaciado
// $("#SPACING").addEventListener("input",(e) => {
//   $(".mainTopText").style.padding = `${e.targe.value}px`
// })

//boton de descarga

const downloadImage = () =>{
  domtoimage.toBlob($(".main")).then((blob) => {
    saveAs(blob, "my-meme.png")
  })
}


$("#download").addEventListener("click",downloadImage)





