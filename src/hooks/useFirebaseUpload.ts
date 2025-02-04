import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { getStorage, ref, uploadBytesResumable } from "@firebase/storage";
import { useEffect, useState } from "react";
import { useUser } from "../context/useUser";

const useFirebaseUpload = (file: any, clothingType: string) => {

    const [uploadState, setUploadState] = useState<string>('loading');
    const { uid } = useUser()
    initializeApp(firebaseConfig);
    
    const uploadImage = async (file: any, clothingType: string) => {
        try {
            setUploadState('loading')
            const storage = getStorage();
            const storageRef = ref(storage, `images/${uid}/${clothingType}/${file.name}`);
        
            const uploadTask = uploadBytesResumable(storageRef, file);
        
            uploadTask.on(
                'state_changed',
                null,
                (error) => {
                setUploadState('error');
                },
                () => {
                setUploadState('success');
                }
            );
        } catch (error) {
            setUploadState('error');
        }
    }

    useEffect(() => {
        uploadImage(file, clothingType);
    }, [file, clothingType]);

    return {uploadState}
}

export default useFirebaseUpload;