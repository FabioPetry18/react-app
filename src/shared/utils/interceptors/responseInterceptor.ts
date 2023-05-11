import { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';


export const responseInterceptor = (response: AxiosResponse) => {

  switch (response.status) {
    case 201:
      toast.success("Salvo com sucesso!")
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
     
      break;
  }
  return response;
};