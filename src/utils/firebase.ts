import { getDownloadURL, getStorage, listAll, ref } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);

const fetchImages = async (clothingType: string) => {
    const storage = getStorage();
    const folderRef = ref(storage, clothingType);
    const result = await listAll(folderRef);
    const imageUrls = await Promise.all(
      result.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return url;
      })
    );
    return imageUrls;
  };

  const auth = getAuth(app);

  export {fetchImages, auth} 