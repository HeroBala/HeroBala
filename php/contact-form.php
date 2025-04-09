<?php
if(mail('1997herobala@gmail.com', 'Test', 'Test message')) {
    echo 'Email sent successfully!';
} else {
    echo 'Email failed to send.';
}
?>
