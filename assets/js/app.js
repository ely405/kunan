var docFrag = document.createDocumentFragment();
var checkRegiones = ["Amazonas","Áncash","Apurímac","Arequipa","Ayacucho","Cajamarca","Callao","Cuzco","Huancavelica","Huánuco","Ica","Junín","La Libertad","Lambayeque","Lima","Loreto","Madre de Dios","Moquegua","Pasco","Piura","Puno","San Martín","Tacna","Tumbes","Ucayali"];
var divChkRegiones = document.getElementById("chk-regiones");

var checkSocialSector = ["Género", "Educación", "Inclusión social", "Medio ambiente", "Salud", "Institucionalidad", "Turismo", "Cultura", "Arte", "Diseño", "Gastronomía", "Valores", "Deporte", "Transporte"];
var divSocialSector = document.getElementById("check-social-sector");


function createInputCheck(arrayToCreateInputCheck, classToParentCreated, parentToApendChild){
    arrayToCreateInputCheck.forEach(function(e){
      var div = document.createElement("div");
      var label = document.createElement("label");
      var checkInput = document.createElement("input");
      div.classList.add(classToParentCreated);
      checkInput.setAttribute("type", "checkbox");
      label.append(e);
      div.append(checkInput, label)
      docFrag.append(div);
    })
    parentToApendChild.append(docFrag);
}

window.addEventListener("load", function(){
    createInputCheck(checkRegiones, "div-check-input", divChkRegiones);
    createInputCheck(checkSocialSector, "div-check-input", divSocialSector);
});
