<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['message'];


	$to = "kitova155@gmail.com";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";


	$msg="
    Имя: $name /n
    Почта: $email /n
    Текст: $text /n";
	mail($to, $subject, $msg, "From: $from ");

?>
