#!/bin/bash
# run_all.sh
# This script runs shell_scripts/create_100_html.sh and shell_scripts/create_100_html_basic_auth.sh and then starts the HTTP server

# Navigate to the shell_scripts directory
cd shell_scripts

# Run the shell_scripts/create_100_html.sh script
bash create_100_html.sh

# Run the shell_scripts/create_100_html_basic_auth.sh script
bash create_100_html_basic_auth.sh

# Check if HTML creation scripts executed successfully
if [ $? -eq 0 ]; then
  echo "HTML files created successfully. Starting the HTTP server..."

  # Navigate back to the root directory
  cd ..

  # Run the Python HTTP server script in the background
  python3 http_server_auth.py &
  server_pid=$!

  # Wait for the server to start (optional)
  sleep 2

  # Optionally print server status or any further processing
  echo "HTTP server started. PID: $server_pid"

  # Keep script running or perform other tasks as needed
  tail -f /dev/null  # This keeps the container running if needed, replace with appropriate logic

else
  echo "Failed to create HTML files. Exiting..."
  exit 1
fi
