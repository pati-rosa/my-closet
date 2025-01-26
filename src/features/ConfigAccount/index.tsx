import React from "react";
import { Button } from "@mui/material";

import { useUser } from "../../context/useUser";
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