// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBtMgNns29p_GfZiDifXmWTUkaGPaHb7aY",
  authDomain: "meu-guardaroupa.firebaseapp.com",
  projectId: "meu-guardaroupa",
  storageBucket: "meu-guardaroupa.firebasestorage.app",
  messagingSenderId: "622419432631",
  appId: "1:622419432631:web:d9aed7f24801ac99932932",
  measurementId: "G-D9KLQBDG4F"
};

initializeApp(firebaseConfig);

export const uploadImage = async (file: any, clothingType: string) => {
  console.log('clothingType',clothingType)
    const storage = getStorage();
    const storageRef = ref(storage, `${clothingType}/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    console.log('uploadTask',uploadTask)

    uploadTask.on('state_changed',(snapshot) => {},(error) => {
      console.log('error',error)
    },() => {
      
        // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    });   
}

export const fetchImages = async (clothingType: string) => {
  console.log('clothingType',clothingType)
  
  try {
    const storage = getStorage();
    const folderRef = ref(storage, clothingType); 

    const result = await listAll(folderRef);

    console.log(result)

    const imageUrls = await Promise.all(
      result.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return url;
      })
    );

    console.log('Image URLs:', imageUrls);
    return imageUrls; // Retorna a lista de URLs para exibir as imagens no seu app

  } catch (error) {
    console.error("Error fetching images:", error);
  }
}
