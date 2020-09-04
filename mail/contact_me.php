<?php
require '../vendor/phpmailer/phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output
$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'uvsegweb@gmail.com';                 // SMTP username
$mail->Password = 'thx11391140';                           // SMTP password
//$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25;                                    // TCP port to connect to

$mail->setFrom($correo, $nombre);
$mail->addAddress('soycodigo@gmail.com', '');     // Add a recipient

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Correo desde uvseg.com.mx';
$mail->Body    = '<div><img src="http://www.uvseg.com.mx/img/uvgaslogo.png" style="margin: 0 auto;"></div><br>
<b>Telefono:</b>.<span style="color: #1b1c3c;">'.$telefono.'</span><br>
<b>Correo:</b>.<span style="color: #1b1c3c;">'.$correo.'</span>
<p>'.$mensaje.'</p>';
//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>
