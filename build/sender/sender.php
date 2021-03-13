<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['message'];


	$to = "olga_and_kitova@bk.ru";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = $email;
	$subject = "Сообщение";


	$msg="
    Имя: $name /n
    Почта: $email /n
    Текст: $text /n";
	mail($to, $subject, $msg, "From: $from ");

?>
