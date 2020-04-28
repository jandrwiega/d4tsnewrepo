<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dziękujemy!</title>
    <noscript><link rel="stylesheet" href="css/send.css"></noscript>
</head>
<body>
    <div class="wrapper">
        <div class="mail__content">
        <?php

$to      = 'jan.drwiega.1d@gmail.com';
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = 'Nowy e-mail od ' . $name . ' (' . $email . ')';
$message = $_POST['message'];
$headers = 'From: ' . $name . ' (' . $email . ')';
$headers .= 'Content-Type: text/html; charset=utf-8';

mail($to, $subject, $message, $headers);

echo '<h1>Wiadomość wysłana :)</h1>';
?>
        </div>
        <div class="mail__back">
        <a href="../index.html">Wróć na stronę</a>
        </div>
    </div>
</body>
</html>