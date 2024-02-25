<?php
    // Colocaremos todas las variables
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    // Crearemos ua condicion de vacio para email y mensaje
    if(!empty($email) && !empty($message) && !empty($name) && !empty($phone) && !empty($website)){

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $receiver = "u2d.8bits@gmail.com"; // Colocaremos el email al que se enviará el mensaje
            $subject = "Nuevo mensaje de $name <$email> "; // Colocaremos el asunto del mensaje

            // Crearemos el cuerpo del mensaje
            $body = "Nombre: $name\nEmail: $email\nTeléfono: $phone\nSitio web: $website\nMensaje:\n$message";
            $sender = "De: $email";

            if(mail($receiver, $subject, $body, $sender)){
                echo "Tu mensaje ha sido enviado";

            }else{
                echo "Lo sentimos, tu mensaje no ha sido enviado";
            }


        }else{
            echo 'Por favor ingresa un email valido';
        }


    }else{
        echo "Todos los campos son requeridos son requeridos";
    }
?>