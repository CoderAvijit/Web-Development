<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = $_POST['password'];
// Create a new row for the CSV file
$newArray = array($name, $email, $phone, $password);
$filename='users.csv';
if (file_exists($filename)) {

    // Open file for reading
    $file = fopen($filename, 'r');
  
    // Loop through each row of file
    while (($row = fgetcsv($file)) !== FALSE) {
  
      // Check if row matches new array
      if ($row == $newArray) {
        // Array already exists in file, skip adding
        fclose($file);
        echo "User is already exist, please log in...";
        exit;
      }
  
    }
    // Close file
    fclose($file);
  
    // Array doesn't exist in file, add it
    $file = fopen($filename, 'a');
    fputcsv($file, $newArray);
    fclose($file);
  
  } else {
    // File doesn't exist, create it with new array
    $file = fopen($filename, 'a');
    fputcsv($file, $newArray);
    fclose($file);
  }
    echo "User is registered!";
    exit;

?>
