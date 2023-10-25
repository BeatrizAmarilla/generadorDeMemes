// variables



// funciones 
const $ = (selector) => document.querySelector(selector)
//eventos
//panel imagen
//url
$("#urlImage").addEventListener("input", (e) => {
  $(".mainImagen").style.backgroundImage = `url(${e.target.value})`
})
//fondo de imagen
$("#fondoImagen").addEventListener("input", (e) => {
  $(".mainImagen").style.backgroundColor = e.target.value
})
// //select mix-blend-mode
$("#mixFilters").addEventListener("input", (e) => {
  $(".mainImagen").style.backgroundBlendMode = e.target.value
})

// filtros
let filterValues = {
  brightness: 1,
  opacity: 1,
  contrast: 100,
  blur: 0,
  grayscale: 0,
  sepia: 0,
  hueRotate: 0,
  saturation: 1,
  invert: 0
};

const filtersMainImage = () => {
  const filterString = 

  `brightness(${filterValues.brightness})
      opacity(${filterValues.opacity})
      contrast(${filterValues.contrast}%)
      blur(${filterValues.blur}px)
      grayscale(${filterValues.grayscale}%)
      sepia(${filterValues.sepia}%)
      hue-rotate(${filterValues.hueRotate}deg)
      saturate(${filterValues.saturation}%)
      invert(${filterValues.invert})`

$(".mainImagen").style.filter = filterString

}


$("#brightness").addEventListener("input", () => {
  console.log("Control deslizante de brillo cambiado")
 filtersMainImage()
})

$("#opacity").addEventListener("input", () => {
  console.log("Control deslizante de opacidad cambiado")
   filtersMainImage()
})

$("#contrast").addEventListener("input", () => {
  console.log("Control deslizante de contraste cambiado")
   filtersMainImage()
})

$("#blur").addEventListener("input", () => {
  console.log("Control deslizante de desenfoque cambiado")
   filtersMainImage()
})

$("#grayscale").addEventListener("input", () => {
  console.log("Control deslizante de escala de grises cambiado")
   filtersMainImage()
})

$("#sepia").addEventListener("input", () => {
  console.log("Control deslizante de sepia cambiado")
   filtersMainImage()
})

document.querySelector("#hue-rotate").addEventListener("input", () => {
  console.log("Control deslizante de hue cambiado")
   filtersMainImage()
})

$("#saturation").addEventListener("input", () => {
  console.log("Control deslizante de saturación cambiado")
   filtersMainImage()
})

$("#invert").addEventListener("input", () => {
  console.log("Control deslizante de negativo cambiado")
   filtersMainImage()
})

  $("#brightness").addEventListener("input", (e) => {
    filterValues.brightness = e.target.value
      filtersMainImage()
  })

  $("#opacity").addEventListener("input", (e) => {
    filterValues.opacity = e.target.value
      filtersMainImage()
  })

  $("#contrast").addEventListener("input", (e) => {
    filterValues .contrast= e.target.value
    filtersMainImage()
  })

$("#blur").addEventListener("input", (e) => {
  filterValues .blur = e.target.value
  filtersMainImage()
})

$("#grayscale").addEventListener("input", (e) => {
  filterValues .grayscale= e.target.value
  filtersMainImage()
})

$("#sepia").addEventListener("input", (e) => {
  filterValues.sepia = e.target.value
  filtersMainImage()
})

$("#hue-rotate").addEventListener("input", (e) => {
  filterValues.hueRotate = e.target.value
  filtersMainImage()
})

$("#saturation").addEventListener("input", (e) => {
  filterValues.saturation = e.target.value
  filtersMainImage()
})

$("#invert").addEventListener("input", (e) => {
  filterValues.invert = e.target.value
  filtersMainImage()
})

//boton reseteo de filtros
$("#resetFilters").addEventListener("click", () => {
  $("#brightness").value = "1"
  $("#opacity").value = "1"
  $("#contrast").value = "100"
  $("#blur").value = "0"
  $("#grayscale").value = "0"
  $("#sepia").value = "0"
  $("#hue-rotate").value = "0"
  $("#saturation").value = "100"
  $("#invert").value = "0"
  $("#mainImagen").style.filter = "none"
})
//panel texto

// texto superior
$("#topText").addEventListener("input", (e) => {
  $(".paragraphTop").innerText = e.target.value
})
// texto inferior
$("#bottomText").addEventListener("input", (e) => {
  $(".paragraphBottom").innerText = e.target.value
})
// color texto superior 
$("#color").addEventListener("input", (e) => {
  $(".paragraphColorTop").style.color = e.target.value
})
// color texto inferior
$("#color").addEventListener("input", (e) => {
  $(".paragraphColorBottom").style.color = e.target.value
})
//fondo texto superior

$("#fondoTexto").addEventListener("input", (e) => {
  $(".mainTopText").style.backgroundColor = e.target.value
})

//fondo texto inferior
$("#fondoTexto").addEventListener("input", (e) => {
  $(".mainBottomText").style.backgroundColor = e.target.value
})
//fuentes
$("#font").addEventListener("input", (e) => {
  $(".paragraphTop").style.fontFamily = e.target.value
})

$("#font").addEventListener("input", (e) => {
  $(".paragraphBottom").style.fontFamily = e.target.value
})
$("#textAlingLeft").addEventListener("click", () => {
  $(".main_textos").style.textAlign = "left"
})

$("#textAlingCenter").addEventListener("click", () => {
  $(".main_textos").style.textAlign = "center"
})

$("#textAlingRight").addEventListener("click", () => {
  $(".main_textos").style.textAlign = "right"
})

// contorno de texto

$("#outlineNone").addEventListener("click", () => {
  $(".paragraphTop").style.webkitTextStroke = "0px"
})

$("#outlineNone").addEventListener("click", () => {
  $(".paragraphBottom").style.webkitTextStroke = "0px"
})

$("#outlineLight").addEventListener("click", () => {
  $(".paragraphTop").style.webkitTextStroke = "1px white"
})

$("#outlineLight").addEventListener("click", () => {
  $(".paragraphBottom").style.webkitTextStroke = "1px white"
})

$("#outlineDark").addEventListener("click", () => {
  $(".paragraphTop").style.webkitTextStroke = "1px black"
})

$("#outlineDark").addEventListener("click", () => {
  $(".paragraphBottom").style.webkitTextStroke = "1px black"
})

//tamano de fuente de texto superior y de texto inferior
$("#tamanioFuente").addEventListener("input", (e) => {
    $(".paragraphTop").style.fontSize = e.target.value + "px"
})

$("#tamanioFuente").addEventListener("input", (e) => {
  $(".paragraphBottom").style.fontSize = e.target.value + "px"
})

//sin texto superior y sin texto inferior

$("#sinTextoSuperior").addEventListener("input", (e) => {
  if (e.target.checked) {
    $(".paragraphTop").style.display = "none"
  } else {
    $(".paragraphTop").style.display = "block"
  }
})

$("#sinTextoInferior").addEventListener("input", (e) => {
  if (e.target.checked) {
    $(".paragraphBottom").style.display = "none"
  } else {
    $(".paragraphBottom").style.display = "block"
  }
})
//fondo transparente
$("#fondoTransparente").addEventListener("input", (e) => {
  if (e.target.checked) {
    $(".mainTopText").style.backgroundColor = "transparent"
  } else {
    $(".mainTopText").style.backgroundColor = "white"
  }
})

$("#fondoTransparente").addEventListener("input", (e) => {
  if (e.target.checked) {
    $(".mainBottomText").style.backgroundColor = "transparent"
  } else {
    $(".mainBottomText").style.backgroundColor = "white"
  }
})

//espaciado
$("#numberSpacing").addEventListener("input",(e) => {
  $(".paragraphTop").style.padding =  e.target.value + "px"
})

$("#numberSpacing").addEventListener("input",(e) => {
  $(".paragraphBottom").style.padding =  e.target.value + "px"
})
// //interlineado
$("#interlineadoTexto").addEventListener("input", (e) => {
  $(".paragraphTop").style.lineHeight = e.target.value 
})

$("#interlineadoTexto").addEventListener("input", (e) => {
  $(".paragraphBottom").style.lineHeight = e.target.value
})

//boton imagen

$("#buttonImage").addEventListener("click", (e) => {
  $(".asideImagen").style.display = "block"

})

//boton texto
$("#buttonTexto").addEventListener("click", (e) => {
  $(".asideTexto").style.display = "block"

})
//boton de cierre de paneles imagen y texto
$("#buttonClosePanelImage").addEventListener("click", (e) => {
  $(".asideImagen").style.display = "none"

})


$("#buttonClosePanelText").addEventListener("click", (e) => {
  $(".asideTexto").style.display = "none"

})

//toogle de paneles en mq 768px
$(".buttonImage").addEventListener("click", () => {
  $(".asideTexto").classList.toggle("asideImagen")
})

$(".buttonImage").addEventListener("click", () => {
  $(".asideTexto").style.display = "none"
})

//boton de descarga

const downloadImage = () => {
  domtoimage.toBlob($(".main")).then((blob) => {
    saveAs(blob, "my-meme.png")
  })
}
//modo oscuro
$(".change-theme").addEventListener("click", () => {
  const currentTheme = $("body").getAttribute("data-theme")
  if (currentTheme) {
      $("body").removeAttribute("data-theme", "light-theme")
  } else {
      $("body").setAttribute("data-theme", "light-theme")
  }
  
})

$(".change-theme").addEventListener("click", () => {
  $(".dark").classList.toggle("hidden");
  $(".light").classList.toggle("hidden");
});




$("#download").addEventListener("click", downloadImage)

//funcion carga inicial
// const initializeProject = () => {
//   // EVENTOS
//   $("#download").addEventListener("click", downloadMeme)

//   $("input").addEventListener("input", () => {
//       // bloque de codigo
//   })

//   $("input").addEventListener("input", () => {
//       // bloque de codigo
//   })

//   $("input").addEventListener("input", () => {
//       // bloque de codigo
//   })

//   $("input").addEventListener("input", () => {
//       // bloque de codigo
//   })

//   $("input").addEventListener("input", () => {
//       // bloque de codigo
//   })
// }

// window.addEventListener("load", initializeProject)



