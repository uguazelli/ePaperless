import os
import platform
import time
import shutil
import requests
from typing import List

def post_to_api(filename, api_url, api_key=None):
    """Posts a file to the specified API endpoint.

    Args:
        filename: Path to the file to be uploaded.
        api_url: URL of the API endpoint.
        api_key: Optional API key for authentication.
    """
    files = {'files': open(filename, 'rb')}
    headers = {}

    if api_key:
        headers['X-API-Key'] = api_key  # Use X-API-Key header for the API key

    response = requests.post(api_url, files=files, headers=headers)

    if response.status_code == 200:
        print(f"File '{filename}' posted successfully to {api_url}")
    else:
        print(f"Error posting '{filename}': {response.status_code} - {response.reason}")

    # Always close the file after reading or writing
    files['files'].close()

def move_file(filename, processed_folder):
    """Moves a file to the processed folder.

    Args:
        filename: Path to the file to be moved.
        processed_folder: Path to the folder where processed files are stored.
    """
    if not os.path.exists(processed_folder):
        os.makedirs(processed_folder)
    shutil.move(filename, os.path.join(processed_folder, os.path.basename(filename)))  # Ensure to use only the filename
    print(f"File '{filename}' moved to {processed_folder}")

def monitor_folder(folder_path, frequency, api_url, api_key=None):
    """Monitors a folder for new files and posts them to an API.

    Args:
        folder_path: Path to the folder to monitor.
        frequency: Frequency to check for new files (seconds).
        api_url: URL of the API endpoint.
        api_key: Optional API key for authentication.
    """
    print("Monitoring folder for new files...")
    processed_folder = os.path.join(folder_path, 'processed')

    while True:
        for filename in os.listdir(folder_path):
            full_path = os.path.join(folder_path, filename)
            if os.path.isfile(full_path):
                print(f"Processing file: {filename}")
                post_to_api(full_path, api_url, api_key)
                move_file(full_path, processed_folder)
        time.sleep(frequency)

if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='Monitor folder for new files and post to API')
    parser.add_argument('-f', '--folder', required=True, help='Folder to monitor')
    parser.add_argument('-t', '--frequency', type=int, default=5, help='Frequency to check for new files (seconds)')
    parser.add_argument('-a', '--api_url', required=True, help='URL of the API endpoint')
    parser.add_argument('-k', '--api_key', help='API key for authentication (optional)')
    args = parser.parse_args()

    folder_path = args.folder
    if platform.system() != "Windows":
        # Replace backslashes with forward slashes for Unix-like systems
        folder_path = folder_path.replace("\\", "/")
    print("Starting folder monitoring...")
    print("Folder:", folder_path)
    print("Frequency:", args.frequency)
    print("API URL:", args.api_url)
    print("API Key:", args.api_key)

    monitor_folder(folder_path, args.frequency, args.api_url, args.api_key)  # Pass API key as argument






# python monitor.py -f /mnt/c/Users/guaze/Documents/ePaperless -a http://localhost:8000/uploadfiles -k 5JdDbsLLgnG*pAi8t%qG6r6
