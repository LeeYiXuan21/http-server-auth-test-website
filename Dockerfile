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

# Set an environment variable
ENV PORT_LINK=http://localhost:8000

# Command to run the Python script and print port link
CMD ["sh", "-c", "python3 http_server_auth.py --bind 0.0.0.0 --port 8000 && echo 'Server running at $PORT_LINK'"]
