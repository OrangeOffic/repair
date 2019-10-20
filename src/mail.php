<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$userName = $_POST['nameuser'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'repairroomtest@gmail.com'; // Логин на почте
    $mail->Password   = '123edcxswqaZ'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('repairroomtest@gmail.com', 'Ремонт Квартир'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('orangeoffic@gmail.com');  
        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Новый заказ';
        $mail->Body    = "<b>Имя:</b> {$userName} <br>
        <b>Почта:</b> {$email} <br><br>
        <b>Телефон:</b> {$phone}";
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "Заявка успешно отправлена!";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

?>