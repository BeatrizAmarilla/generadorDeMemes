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
$("#brightness").addEventListener("input", (e) =>{
    $(".mainImagen").style.filter = `brightness(${e.target.value})`
})

$("#opacity").addEventListener("input", (e) =>{
    $(".mainImagen").style.filter = `opacity(${e.target.value})`
})

$("#contrast").addEventListener("input", (e) =>{
    $(".mainImagen").style.filter = `contrast(${e.target.value}%)`
})

$("#blur").addEventListener("input", (e) =>{
    $(".mainImagen").style.filter = `blur(${e.target.value}px)`
})

$("#grayscale").addEventListener("input", (e) =>{
    $(".mainImagen").style.filter = `grayscale(${e.target.value}%)`
})

$("#sepia").addEventListener("input", (e) =>{
    $(".mainImagen").style.filter = `sepia(${e.target.value}%)`
})


$("#hue-rotation").addEventListener("input", (e) =>{
    $(".mainImagen").style.filter = `hue-rotation(${e.target.value}deg)`
})

$("#saturation").addEventListener("input", (e) =>{
    $(".mainImagen").style.filter = `saturation(${e.target.value}%)`
})

$("#invert").addEventListener("input", (e) =>{
    $(".mainImagen").style.filter = `invert(${e.target.value})`
})

// const filtersMainImage = () => {
//     $(".mainImagen").style.filter =`brightness(${$("#brightness").value}) opacity(${$("#opacity").value}) 
//     contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${$("#grayscale").value}%) 
//     sepia(${$("#sepia").value}%) hue-rotation(${$("#hue-rotation").value}deg) saturation(${$("#saturation").value}%)
//     invert(${$("#invert").value})`
// }
// $("#brightness").addEventListener("input",filtersMainImage)

// $("#opacity").addEventListener("input",filtersMainImage)

// $("#contrast").addEventListener("input",filtersMainImage)
   
// $("#blur").addEventListener("input",filtersMainImage)

// $("#grayscale").addEventListener("input",filtersMainImage)

// $("#sepia").addEventListener("input",filtersMainImage)

// $("#hue-rotation").addEventListener("input",filtersMainImage)

// $("#saturation").addEventListener("input",filtersMainImage)

// $("#invert").addEventListener("input",filtersMainImage)


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



