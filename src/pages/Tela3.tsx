import { Button, Typography } from "@mui/material";
import { UsuarioLogadoContext } from "../shared/context";
import React, { useContext } from 'react'


export default function Tela3(){
    const usuario = useContext(UsuarioLogadoContext)

    return(
        <>
        
        <Typography variant="h1" color="primary">teste tela 3</Typography>
    
        <p>{usuario.token}</p>
        
        </>

    )
}