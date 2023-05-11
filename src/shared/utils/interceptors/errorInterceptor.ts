import { Alert, AlertTitle } from '@mui/material';
import { AxiosError } from 'axios';
import ReactDOM from 'react-dom';
import toast from 'react-hot-toast';




export const errorInterceptor = (error: AxiosError) => {
  
  switch (error.response?.status) {
    case 403:
      toast.error("Erro ao salvar o usuário!")
      break;
    case 405:
      toast.error("erro com codigo 405")  
      break;
    case 498:     
      toast.error('Sessão expirada, redirecionando...')
      setTimeout(function() {
        window.location.href = "http://syscassol.cassol.local:8180/cas-syscassol/faces/resources/menu/Modulos.xhtml"; 
    }, 4000 );
      return Promise.reject(new Error('Não Autenticado'));  

    default:
      if (error.message === 'Network Error') {
        return Promise.reject(new Error('Erro de conexão.'));
      }
      break;
  }
  return Promise.reject(error);
};
