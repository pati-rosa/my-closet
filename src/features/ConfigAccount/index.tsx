import { Button } from "@mui/material";
import React from "react";
import { useUser } from "../../context/useUser";
import { useAuth } from "../../hooks/useFirebaseAuth";
import { configAccountContainer } from "./styles";

export const ConfigAccount = () => {
    const {setUid} = useUser()
    const {signOut} = useAuth()
    const handleSignOut = () => {
        signOut()
        setUid(null)
    }
    return (
        <div style={configAccountContainer}>
            <Button variant="contained" color="primary" onClick={() => handleSignOut()}>
                Sair
            </Button>
        </div>
    );
}