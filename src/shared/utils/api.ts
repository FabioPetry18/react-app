import axios from 'axios';
import  {errorInterceptor}  from './interceptors/errorInterceptor';
import { responseInterceptor } from './interceptors/responseInterceptor';
import { UsuarioLogadoContext } from '../context';
import React, { useContext } from 'react'


const ApiPreRender = axios.create({

  baseURL:  'http://localhost:8181/',
 
})

const Api  = axios.create({
  baseURL:  'http://localhost:8181/',
  headers: {
    'Content-Type': 'application/json'
  }
  
})



Api.interceptors.request.use(async function (config) {
  const token = config.headers['Authorization'];
  
  try {
    await ApiPreRender.post('http://localhost:8181/auth/test1', {headers: {'Authorization':  token,}})  
  } catch (error) {
      Promise.reject(error);
  }
    return config;
});

/**
 * TRATAMENTO DAS RESPOSTAS
 */

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

ApiPreRender.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export default Api;
