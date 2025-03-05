//File uploader component that allows users to upload images
import React, { useState } from 'react'

export default function Eleven() {

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }

  return (
    <div>
        <input type='file' accept='image/*' onChange={handleFileChange}/>
        {file && <img src={URL.createObjectURL(file)} alt='Uploded'  />}
    </div>
  )
}
