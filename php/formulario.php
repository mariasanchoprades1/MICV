<?php
require '../PHPMailer-master/src/Exception.php';
require '../PHPMailer-master/src/PHPMailer.php';
require '../PHPMailer-master/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'alusan7934@ieselcaminas.org'; 
        $mail->Password = '10217934'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinatarios
        $mail->setFrom('alusan7934@ieselcaminas.org', $name);
        $mail->addAddress('destinatario@example.com'); 

        // Contenido
        $mail->isHTML(true);
        $mail->Subject = "Nuevo mensaje de $name";
        $mail->Body = "Nombre: $name<br>Email: $email<br>Mensaje:<br>$message";
        $mail->AltBody = "Nombre: $name\nEmail: $email\nMensaje:\n$message";

        $mail->send();
        echo "Gracias, tu mensaje ha sido enviado.";
    } catch (Exception $e) {
        echo "Oops! Algo salió mal y no pudimos enviar tu mensaje. Error de PHPMailer: {$mail->ErrorInfo}";
    }
} else {
    echo "Oops! Algo salió mal.";
}
?>
