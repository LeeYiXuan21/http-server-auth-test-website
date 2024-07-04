#!/bin/bash
# This script creates 1-100 HTML pages and adds basic authentication

# Loop from 1 to 100
for i in {1..100}
do
  # Create a filename with the current number
  filename="basicauth$i.html"
  
  # Write the HTML content to the file
  cat <<EOF > $filename
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$filename</title>
  <style>
    /* Poor color contrast */
    .low-contrast {
      color: #cccccc;
      background-color: #ffffff;
    }
  </style>
  <script>
    // Basic Authentication
    window.onload = function() {
      var username = prompt("Enter username:");
      var password = prompt("Enter password:");
      if (username !== "username" || password !== "password") {
        document.body.innerHTML = "<h1>Unauthorized Access</h1>";
      }
    }
  </script>
</head>
<body>
  <h1>Sample Inaccessible Page $i</h1>
  <!-- Example of an accessibility issue: poor color contrast -->
  <p class="low-contrast">This text has poor color contrast.</p>
  <!-- Example of an accessibility issue: missing form labels -->
  <form>
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit">Submit</button>
  </form>
</body>
</html>
EOF
done

echo "100 HTML files with basic authentication created successfully."
