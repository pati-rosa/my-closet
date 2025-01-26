import { getDownloadURL, getStorage, listAll, ref } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";

const app = initializeApp(firebaseConfig);

const fetchImages = async (clothingType: string, uid: string | null) => {
    const storage = getStorage();

    const folderRef = ref(storage, `images/${uid}/${clothingType}`);
    const result = await listAll(folderRef);
    const imageUrls = await Promise.all(
      result.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return url;
      })
    );
    return imageUrls;
};

const signOutUser = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
  }
};

export const signInUser = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth,email, password);
    return userCredential;
  } catch (error) {
    throw new Error((error as any).message);
  }
};

export const createUser = async (email: string, password: string): Promise<UserCredential> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email, password);
    return userCredential;
  } catch (error) {
    throw new Error((error as any).message);
  }
};

const auth = getAuth(app);

  export {fetchImages, auth, signOutUser} 