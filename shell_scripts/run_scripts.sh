#!/bin/bash
# run_all.sh
# This script runs shell_scripts/create_100_html.sh and shell_scripts/create_100_html_basic_auth.sh and then starts the HTTP server

# Run the shell_scripts/create_100_html.sh script
bash create_100_html.sh

# Run the shell_scripts/create_100_html_basic_auth.sh script
bash create_100_html_basic_auth.sh

# Check if generate_html.sh executed successfully
if [ $? -eq 0 ];  then
  echo "HTML files created successfully. Starting the HTTP server..."

  # Navigate back to the root directory
  cd ..

  # Run the Python HTTP server script
  python3 http_server_auth.py
else
  echo "Failed to create HTML files. Exiting..."
  exit 1
fi
