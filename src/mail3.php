<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['nameuser'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = 'Форма2 успешно отправленна';
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

    $mail->Subject = 'Заявку на бесплатный расчёт ремонта по телефону';
    $mail->Body    = "<b>Имя:</b> $name <br>
    <b>Телефон:</b> $phone<br>
    <b>Почта:</b> $email";


// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
