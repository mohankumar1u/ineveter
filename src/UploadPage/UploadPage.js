// src/ImageUploadButton.js
import React from 'react';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ImageUploadButton = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file);
    }
  };

  return (
    <label className='my-auto p-3' htmlFor="upload-button" style={{ cursor: 'pointer' }}>
      <input
        accept="image/*"
        id="upload-button"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Button
        variant="contained"
        component="span"
        startIcon={<CloudUploadIcon />}
        style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}
      >
        Upload Image
      </Button>
    </label>
  );
};

export default ImageUploadButton;
