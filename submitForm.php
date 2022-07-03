<?php 
ob_start(); 
error_log();
if(isset($_POST['name']) && isset($_POST['email'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];

    $mailHeading = 'Easigo Callback Request';
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();

    $to = 'info@easigo.co.uk'; 

    $messageSent = '<div>Name : '.$name .'</div><div> Email : '.$email.' </div><div> Phone : '.$phone.' </div><div>Subject : '.$subject.'</div>';

    if( $name != '' || $email != '' || $phone != '' || $subject != ''){
        mail($to, $subject, $messageSent, $headers);
        echo 'Thank you, We will get back to you asap!';
    } 
}
?>