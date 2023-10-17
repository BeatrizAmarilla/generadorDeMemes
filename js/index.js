// variables
const $ = (selector) => document.querySelector(selector)



// funciones 
//panel imagen
$("#fondoImagen").addEventListener("input", (e) =>{
    $(".mainImagen").style.backgroundColor = e.target.value
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



