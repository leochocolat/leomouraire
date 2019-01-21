<?php
$EmailFrom = "l.mouraire@outlook.fr";
$EmailTo = "l.mouraire@outlook.fr";
$Subject = "Nouveau message !";
$Name = Trim(stripslashes($_POST['Name']));
$Email = Trim(stripslashes($_POST['Email']));
$Object = Trim(stripslashes($_POST['Object']));
$Message = Trim(stripslashes($_POST['Message']));

if (filter_var($Email, FILTER_VALIDATE_EMAIL)) {
    print "<meta http-equiv=\"refresh\" content=\"0;URL=https://www.leomouraire.com/contact/confirmation.html\">";
} else {
    print "<meta http-equiv=\"refresh\" content=\"0;URL=https://www.leomouraire.com/contact/error.html\">";
    exit;
}

$Body = "";
$Body .= "Message de : ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Adresse e-mail : ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Téléphone : ";
$Body .= $Object;
$Body .= "\n";
$Body .= "Message : ";
$Body .= $Message;
$Body .= "\n";

$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=https://www.leomouraire.com/contact/confirmation.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=https://www.leomouraire.com/contact/error.html\">";
}
?>


<!-- Faire page confirmation et page erreur  -->
