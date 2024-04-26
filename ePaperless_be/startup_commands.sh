#!/bin/bash

# Navigate to the project directory
cd /mnt/c/Users/guaze/Documents/Projects/ePaperless/ePaperless_be || {
  echo "Error: Could not change directory to /mnt/c/Users/guaze/Documents/Projects/ePaperless/ePaperless_be"
  exit 1
}

# Activate virtual environment (if applicable)
source venv/bin/activate || true  # Suppress potential errors if venv is not present

echo "Virtual environment activated"

# Update requirements.txt (optional)
pip freeze > requirements.txt 2>/dev/null  # Redirect stderr to /dev/null to suppress potential output

echo "Installed pip dependencies"


echo "Starting docker containers"
# Start Docker containers in detached mode
docker-compose up -d || {
  echo "Error: Failed to start Docker containers with docker-compose up -d"
  exit 1
}

# Wait for all services to be healthy
docker-compose wait

# Create a Solr core (optional)
echo "# Create a Solr core"
docker exec -it --user solr solr bin/solr create_core -c solr_core

echo "sol_core created"

# Kill process on port 8000 (optional)
echo "# Killing process on port 8000 (if any)"
# Identify process ID (PID)
process_id=$(lsof -t -i :8000 | awk '{print $2}')

# Check if process ID exists
if [[ ! -z "$process_id" ]]; then
  # Display information about conflicting process
  echo "A process (PID: $process_id) is already using port 8000."
  read -p "Kill this process and continue? (y/N): " answer
  if [[ "$answer" =~ ^[Yy]$ ]]; then
    # Kill the process using its PID
    kill $process_id
    echo "Killed process with PID: $process_id"
  else
    echo "Process not killed. Please manually stop the conflicting process using PID: $process_id and re-run the script."
    exit 1  # Exit script with error code to indicate user intervention needed
  fi
else
  echo "No process found running on port 8000."
fi


# Run uvicorn in the background with live reload
# uvicorn main:app --reload &  # Append "&" to run in the background
uvicorn main:app --reload
echo "runnng uvicorn"

# Inform the user of successful execution
echo "Successfully executed commands. ePaperless backend is running in the background."

