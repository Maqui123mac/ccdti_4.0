let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// botones para diseño
function openTab(event, tabName) {
  // Declara las variables
  var i, tabcontent, tablinks;

  // Obtiene todos los elementos con la clase "tabcontent" y los oculta
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Obtiene todos los elementos con la clase "tablinks" y les quita la clase "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Muestra el contenido de la pestaña que coincide con el nombre pasado como parámetro
  document.getElementById(tabName).style.display = "block";

  // Agrega la clase "active" al botón que se ha hecho clic
  event.currentTarget.className += " active";
}
