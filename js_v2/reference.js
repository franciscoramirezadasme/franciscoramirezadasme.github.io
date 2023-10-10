document.onclick= function(event) {
    if (event===undefined) {
      event= window.event;
    }
    var target= 'target' in event? event.target : event.srcElement;

    alert('clicked on '+target.tagName);
};


function handleRedirectLinkClickAbout(event) {
  event.preventDefault();

  window.location.href = "https://www.otrapagina.com";

  let current_domain = window.location.hostname;
  console.log(current_domain);
  let redirectLink = document.getElementById( current_domain+"/about.hmtl");
  redirectLink.addEventListener("click", handleRedirectLinkClickAbout);
}


const botones = Array.from(document.querySelectorAll('.diapositiva a'));

function manejarClicBoton(event) {
  event.preventDefault();
  const section = this.getAttribute('href');
  document.querySelector(section).scrollIntoView({
    behavior: 'smooth'
  });
}

botones.forEach(boton => {
  boton.addEventListener('click', manejarClicBoton);
});

diapositivas[indiceActual].classList.add('mostrar');

  setInterval(mostrarSiguienteDiapositiva, 6000);