# Use Python 3.9 image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any dependencies specified in requirements.txt
# If you have any additional dependencies, add them here

# Expose the port that the server will run on
EXPOSE 8000

# Command to run the Python script
CMD ["python3", "http_server_auth.py", "--bind", "127.0.0.1", "--port", "8000"]
