


import {Box, Button, Typography} from "@mui/material/";
import { useNavigate } from "react-router-dom";
import Api from "../shared/utils/api";
import { UsuarioLogadoContext } from "../shared/context";
import React, { useContext } from 'react'
import Alert from '@mui/material/Alert';
import toast from "react-hot-toast";
import { logger } from "../shared/utils/log/winston";

export default function Login() {

  const usuario = useContext(UsuarioLogadoContext)

const teste = () => {
  console.log("testado")
}

  return (
    <>
    <Button onClick={teste}>teste info1</Button>
      
   </>
  );
}
