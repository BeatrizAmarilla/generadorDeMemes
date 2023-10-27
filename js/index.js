// variables

// funciones
const $ = (selector) => document.querySelector(selector);
//eventos
//panel imagen
//url
$("#urlImage").addEventListener("input", (e) => {
  $(".mainImagen").style.backgroundImage = `url(${e.target.value})`;
});
//fondo de imagen
$("#fondoImagen").addEventListener("input", (e) => {
  $(".mainImagen").style.backgroundColor = e.target.value;
});
// //select mix-blend-mode
$("#mixFilters").addEventListener("input", (e) => {
  $(".mainImagen").style.backgroundBlendMode = e.target.value;
});

// filtros
 
const allFilters = () =>{
  $(".mainImagen").style.filter = `
  hue-rotate(${$("#hueR").value}deg)
  saturate(${$("#saturate").value})
  invert(${$("#invert").value})
  brightness(${$("#brightness").value})
  opacity(${$("#opacity").value})
  contrast(${$("#contrast").value}%)
  blur(${$("#blur").value}px)
  grayscale(${$("#grayscale").value}%)
  sepia(${$("#sepia").value}%)  
  `
}

$("#brightness").addEventListener("input",allFilters)
$("#opacity").addEventListener("input",allFilters)
$("#contrast").addEventListener("input",allFilters)
$("#blur").addEventListener("input",allFilters)
$("#grayscale").addEventListener("input",allFilters)
$("#sepia").addEventListener("input",allFilters)
$("#hueR").addEventListener("input",allFilters)
$("#saturate").addEventListener("input",allFilters)
$("#invert").addEventListener("input",allFilters)

//boton reseteo de filtros
$("#resetFilters").addEventListener("click", () => {
  $("#brightness").value = "1";
  $("#opacity").value = "1";
  $("#contrast").value = "100";
  $("#blur").value = "0";
  $("#grayscale").value = "0";
  $("#sepia").value = "0";
  $("#hueR").value = "0";
  $("#saturate").value = "100";
  $("#invert").value = "0";
  $("#mainImagen").style.filter = "none";
});
//panel texto

// texto superior
$("#topText").addEventListener("input", (e) => {
  $(".paragraphTop").innerText = e.target.value;
});
// texto inferior
$("#bottomText").addEventListener("input", (e) => {
  $(".paragraphBottom").innerText = e.target.value;
});
// color texto superior e inferior
$("#color").addEventListener("input", (e) => {
  $(".paragraphColorTop").style.color = e.target.value;
  $(".paragraphColorBottom").style.color = e.target.value;
});
//fondo texto superior e inferior

$("#fondoTexto").addEventListener("input", (e) => {
  $(".mainTopText").style.backgroundColor = e.target.value;
  $(".mainBottomText").style.backgroundColor = e.target.value;
});

//fuentes
$("#font").addEventListener("input", (e) => {
  $(".paragraphTop").style.fontFamily = e.target.value;
  $(".paragraphBottom").style.fontFamily = e.target.value;
});

//alineacion de texto
$("#textAlingLeft").addEventListener("click", () => {
  $(".main_textos").style.textAlign = "left";
});

$("#textAlingCenter").addEventListener("click", () => {
  $(".main_textos").style.textAlign = "center";
});

$("#textAlingRight").addEventListener("click", () => {
  $(".main_textos").style.textAlign = "right";
});

// contorno de texto superior e inferior

$("#outlineNone").addEventListener("click", () => {
  $(".paragraphTop").style.webkitTextStroke = "0px";
  $(".paragraphBottom").style.webkitTextStroke = "0px";
});


$("#outlineLight").addEventListener("click", () => {
  $(".paragraphTop").style.webkitTextStroke = "1px white";
  $(".paragraphBottom").style.webkitTextStroke = "1px white";
});

$("#outlineDark").addEventListener("click", () => {
  $(".paragraphTop").style.webkitTextStroke = "1px black";
  $(".paragraphBottom").style.webkitTextStroke = "1px black";
});

//tamano de fuente de texto superior y de texto inferior
$("#tamanioFuente").addEventListener("input", (e) => {
  $(".paragraphTop").style.fontSize = e.target.value + "px";
  $(".paragraphBottom").style.fontSize = e.target.value + "px";
});

//sin texto superior y sin texto inferior

$("#sinTextoSuperior").addEventListener("input", (e) => {
  if (e.target.checked) {
    $(".paragraphTop").style.display = "none";
  } else {
    $(".paragraphTop").style.display = "block";
  }
});

$("#sinTextoInferior").addEventListener("input", (e) => {
  if (e.target.checked) {
    $(".paragraphBottom").style.display = "none";
  } else {
    $(".paragraphBottom").style.display = "block";
  }
});
//fondo transparente
$("#fondoTransparente").addEventListener("input", (e) => {
  if (e.target.checked) {
    $(".mainTopText").style.backgroundColor = "transparent";
    $(".mainBottomText").style.backgroundColor = "transparent";
  } else {
    $(".mainTopText").style.backgroundColor = "white";
    $(".mainBottomText").style.backgroundColor = "white";
  }
});

//espaciado
$("#numberSpacing").addEventListener("input", (e) => {
  $(".paragraphTop").style.padding = e.target.value + "px";
  $(".paragraphBottom").style.padding = e.target.value + "px";
});

// //interlineado
$("#interlineadoTexto").addEventListener("input", (e) => {
  $(".paragraphTop").style.lineHeight = e.target.value;
  $(".paragraphBottom").style.lineHeight = e.target.value;
});

//boton imagen

$("#buttonImage").addEventListener("click", (e) => {
  $(".asideImagen").style.display = "block";
});

//boton texto
$("#buttonTexto").addEventListener("click", (e) => {
  $(".asideTexto").style.display = "block";
});
//boton de cierre de paneles imagen y texto
$("#buttonClosePanelImage").addEventListener("click", (e) => {
  $(".asideImagen").style.display = "none";
});

$("#buttonClosePanelText").addEventListener("click", (e) => {
  $(".asideTexto").style.display = "none";
});

//toogle de paneles en mq 768px
// $(".buttonImage").addEventListener("click", () => {
//   $(".asideTexto").classList.toggle("asideImagen");
// });

$(".buttonImage").addEventListener("click", () => {
  $(".asideTexto").style.display = "none";
});

//boton de descarga

const downloadImage = () => {
  domtoimage.toBlob($(".main")).then((blob) => {
    saveAs(blob, "my-meme.png");
  });
};
$("#download").addEventListener("click", downloadImage);
//modo oscuro
$(".change-theme").addEventListener("click", () => {
  const currentTheme = $("body").getAttribute("data-theme");
  if (currentTheme) {
    $("body").removeAttribute("data-theme", "light-theme");
  } else {
    $("body").setAttribute("data-theme", "light-theme");
  }
});

$(".change-theme").addEventListener("click", () => {
  $(".dark").classList.toggle("hidden");
  $(".light").classList.toggle("hidden");
});

