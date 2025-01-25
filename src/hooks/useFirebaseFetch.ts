import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { getDownloadURL, getStorage, listAll, ref } from "@firebase/storage";
import { useEffect, useState } from "react";

const useFirebaseFetch = (clothingType: string) => {
    initializeApp(firebaseConfig);
    
    const [clothes, setClothes] = useState<string[]>([]);
    const [stateFetch, setStateFetch] = useState<string>('loading');

    const fetchImages = async (clothingType: string) => {
      try {
        const storage = getStorage();
        const folderRefTopClothes = ref(storage, clothingType); 
    
        const result = await listAll(folderRefTopClothes);
        
        const imageUrls = await Promise.all(
          result.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return url;
          })
        );
        setClothes(imageUrls);
        setStateFetch('success');    
      } catch (error) {
        setStateFetch('error');
      }
    }

    useEffect(() => {
      fetchImages(clothingType);
    }, [clothingType]);

    return { clothes, stateFetch };
}

export default useFirebaseFetch;