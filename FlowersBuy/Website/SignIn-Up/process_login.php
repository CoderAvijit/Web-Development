<?php
// Get the login credentials from the form
$username = $_POST['username'];
$password = $_POST['password'];

// Open the CSV file and search for the user
$file = fopen('users.csv', 'r');
while (($row = fgetcsv($file)) !== false) {
  if ($row[1] == $username && $row[3] == $password) {
    // User found, redirect to the dashboard
    fclose($file);
    echo "User logged in successfully";
    exit();
  }
}

// User not found, redirect to the login page with an error message
fclose($file);
echo "User not found.Please signup first";
exit();
?>
