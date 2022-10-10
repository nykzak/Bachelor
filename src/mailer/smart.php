<?php 

$name = $_POST['name'];
$phone = $_POST['number'];
$email = $_POST['email'];
$address = $_POST['address'];
$country = $_POST['country'];



require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.inbox.lv';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'nykzak2@inbox.lv';                 // Наш логин
$mail->Password = 'XR3Vg9Q2db';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('nykzak2@inbox.lv', 'GreyPC');   // От кого письмо 
$mail->addAddress('resisim604@akapple.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Номер заказа : ' . rand();
$mail->Body    = '
		Сделан новый заказ <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . ' <br>
	Страна: ' . $country . ' <br>
	Адрес доставки: ' . $address  . ' ';


if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>