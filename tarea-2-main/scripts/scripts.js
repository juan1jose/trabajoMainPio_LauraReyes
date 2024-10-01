let oscuro = false;

function cambiarColorFondo() {
    if (oscuro) {
        document.querySelector('.container-body').style.backgroundColor = "#ffffff";
        document.querySelector('.text').style.color = "#000000";
    } else {
        document.querySelector('.container-body').style.backgroundColor = "#000000";
        document.querySelector('.text').style.color = "#ffffff";
    }
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    
    if (currentTheme === 'dark') {
      htmlElement.setAttribute('data-bs-theme', 'light');
    } else {
      htmlElement.setAttribute('data-bs-theme', 'dark');
    }
    oscuro = !oscuro;
};

function mostrarMensaje() {
    alert("¡Hola! bienvenid@ a mi potafolio.");
}