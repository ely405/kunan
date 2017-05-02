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

function capitalLetter(){
  var inputLetter;
  if(event.target.getAttribute("type") == "text"){
    inputLetter = event.target.value.split(" ");
    var mapingArr = inputLetter.map((element) => (element.charAt(0).toUpperCase() + element.substring(1, element.length).toLowerCase()));
    event.target.value = mapingArr.toString().replace(",", " ");
  }
}

var parent;

function createTooltip(parentElement, errorMessage){
    if(parentElement.lastElementChild.getAttribute("class") =="tooltiptext") {
      parentElement.lastElementChild.innerHTML = errorMessage;
      parentElement.lastElementChild.style.display = "block";
    } else {
      var span = document.createElement("span");
      span.innerText = errorMessage;
      span.classList.add("tooltiptext");
      parentElement.append(span);
    }
}

function onlyLetter(errorMessage){
  var e = event || window.event;
  var keycode = e.keyCode || e.charCode;
  parent = e.target.parentElement;
  console.log(keycode);
  (keycode >= 65 && keycode <= 90 || keycode == 192 || keycode == 8 || keycode == 9)? e: (e.preventDefault(), createTooltip(parent, errorMessage));
}

var lastName = document.getElementById("last-name");
var birthDate = document.getElementById("birth-date");
var birthPlace = document.getElementById("birth-place");
var male = document.getElementById("male");
var female = document.getElementById("female");
var nam = document.getElementById("name");
var yearOld = document.getElementById("year-old");
var region = document.getElementById("region");
var job = document.getElementById("job");
var timeInMonths = document.getElementById("time-in-months");
var cargo = document.getElementById("cargo");
var timeInOrg = document.getElementById("time-in-org");

window.addEventListener("load", function(){
    createInputCheck(checkRegiones, "div-check-input", divChkRegiones);
    createInputCheck(checkSocialSector, "div-check-input", divSocialSector);

    var allInput = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < allInput.length; i++) {
      allInput[i].addEventListener("blur", capitalLetter);
    }

    var letterType = document.querySelectorAll(".letter");
    console.log(letterType);
    for (var i = 0; i < letterType.length; i++) {
      letterType[i]. addEventListener("keydown", function(){
        onlyLetter("Solo ingresa letras.")
      })
    }
});
