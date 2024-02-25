

const form = document.querySelector('form'),//Creamos una variable para el formulario
statusTxt = form.querySelector('.button-area span'); //Creamos una variable para el span que esta dentro del boton

form.onsubmit = (e) => {
    e.preventDefault(); // preveenimos el formulario de enviar datos
    statusTxt.style.color = "#0D6EFD"; //Cambiamos el color del texto a rojo
    statusTxt.style.display = 'block'; //Cambiamos el display del span a block para que se muestre el mensaje de "enviado"

    let xhr = new XMLHttpRequest(); // creamos un objeto de XMLHttpRequest

    xhr.open("POST", "message.php", true); // enviando datos a mailer.php

    xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status == 200){ // si ajax responde con status 200 y readyState 4 significando que no hay ningun error
            let response = xhr.response; // guardando respuesta en una variable

            console.log(response); // mostrando la respuesta en consola

            if(response.indexOf("Todos los campos son requeridos son requeridos") != -1 || response.indexOf("Por favor ingresa un email valido") || response.indexOf("Lo sentimos, tu mensaje no ha sido enviado")){
                statusTxt.style.color = "red"; // cambiando el color del texto a rojo
                setTimeout(() => { // ocultando el mensaje despues de 3 segundos
                    statusTxt.style.display = "none";
                }, 1500);
            }else{
                form.reset(); // reseteando el formulario
                setTimeout(() => { // ocultando el mensaje despues de 2 segundos
                    statusTxt.style.display = "none";
                }, 2000);
            }

            statusTxt.innerText = response; // cambiando el texto del span a la respuesta
        }
    }

    let formData = new FormData(form); // creamos un nuevo objeto de FormData el cual nos permitira enviar la data del formulario

    xhr.send(formData); // enviamos la data del Form
}

