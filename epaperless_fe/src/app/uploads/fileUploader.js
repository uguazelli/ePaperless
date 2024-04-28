import React, { useState } from "react";

function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async () => {
    try {
      setUploading(true);
      setUploadProgress(0);
      setUploadMessage("");

      const formData = new FormData();
      for (const file of selectedFiles) {
        formData.append("files", file);
      }

      const response = await fetch("http://localhost:8000/uploadfiles", {
        method: "POST",
        body: formData,
        headers: {
          // Add your API key if required
          //'X-API-Key': 'your-api-key'
          "X-API-Key": "5JdDbsLLgnG*pAi8t%qG6r6",
        },
        // Report upload progress
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgress(progress);
        },
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setUploadMessage("Upload successful");
    } catch (error) {
      console.error("Error uploading files:", error);
      setUploadMessage("Upload failed");
    } finally {
      setUploading(false);
      setSelectedFiles(null); // Clear selected files
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        accept=".jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={!selectedFiles || uploading}>
        Upload
      </button>
      {uploading && <progress value={uploadProgress} max="100" />}
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
}

export default FileUpload;
