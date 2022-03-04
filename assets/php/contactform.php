<?php

if($_POST["message"]) {
    mail("dustin.huntsberger@jrayl.com", "Submission", $_POST["insert your message here"]. "From: admin@jrayl.com");
}

?>