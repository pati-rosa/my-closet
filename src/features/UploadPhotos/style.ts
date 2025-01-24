import { CSSProperties } from "react";

const uploadPhotosContainer: CSSProperties = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
}

const typography: CSSProperties = {
    marginBottom: '20px'
}

const addClothesContainer: CSSProperties = {
    display: 'flex', 
    flexDirection: 'column', 
    gap: '20px'
}

export { uploadPhotosContainer, typography, addClothesContainer };