import React from "react";
import "../firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function FileSelect({setImageURL}) {
  const storage = getStorage();

  const handleFileChange = async (event) => {
    const imageFile = event.target.files[0];
    if (!imageFile) return;
    
    const storageRef = ref(storage, `images/${imageFile.name}`);

    try {
      await uploadBytes(storageRef, imageFile);
      const url = await getDownloadURL(storageRef);
      setImageURL(url);
      
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  }; 

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange}/>
    </div>
  );
}

export default FileSelect;
