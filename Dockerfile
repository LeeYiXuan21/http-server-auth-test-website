# Use Python 3.9 slim image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Create and activate virtual environment
RUN python3 -m venv venv
RUN . venv/bin/activate

# Install any dependencies specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port that the server will run on
EXPOSE 8000

# Set an environment variable
ENV PORT_LINK=http://localhost:8000

# Command to run the Python script and print port link
CMD ["sh", "-c", ". venv/bin/activate && python3 http_server_auth.py --bind 0.0.0.0 --port 8000 && echo 'Server running at $PORT_LINK'"]
