// variables
const $ = (selector) => document.querySelector(selector)



// funciones 
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

$("#fondo").addEventListener("input", (e) =>{
    $(".main__topText").style.backgroundColor = e.target.value
})

//fondo texto inferior
$("#fondo").addEventListener("input", (e) =>{
    $(".main__bottomText").style.backgroundColor = e.target.value
})



