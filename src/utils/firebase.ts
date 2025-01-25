import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "meu-guardaroupa.firebaseapp.com",
  projectId: "meu-guardaroupa",
  storageBucket: "meu-guardaroupa.firebasestorage.app",
  messagingSenderId: "622419432631",
  appId: "1:622419432631:web:d9aed7f24801ac99932932",
  measurementId: "G-D9KLQBDG4F"
};

initializeApp(firebaseConfig);

export const uploadImage = async (file: any, clothingType: string) => {
    const storage = getStorage();
    const storageRef = ref(storage, `${clothingType}/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',(snapshot) => {},(error) => {
    },() => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    });   
}

export const fetchImages = async (clothingType: string) => {
  
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

    return imageUrls;

  } catch (error) {
    console.error("Error fetching images:", error);
  }
}
