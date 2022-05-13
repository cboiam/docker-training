<?php

error_reporting(0);

$conn = mysqli_connect("mysql:3306", "root", "password");

if (!$conn) {
  echo "{ \"message\": \"not connected\" }";
}
else {
  mysqli_close($conn);
  echo "{ \"message\": \"connected\" }";
}

?>