import { Button } from "@mui/material";
import React from "react";
import { useUser } from "../../context/useUser";
import { useAuth } from "../../hooks/useFirebaseAuth";
import { configAccountContainer } from "./styles";

export const ConfigAccount = () => {
    const {logout} = useUser()

    return (
        <div style={configAccountContainer}>
            <Button variant="contained" color="primary" onClick={() => logout()}>
                Sair
            </Button>
        </div>
    );
}