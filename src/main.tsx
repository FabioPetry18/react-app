import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, Navigate } from 'react-router-dom'
import { Button, ThemeProvider } from '@mui/material';
import { temaPadrao } from './shared/themes';
import {  CssBaseline } from "@mui/material";
import Api from './shared/utils/api';
import { IUser } from './shared/interface/UsuarioLogado';
import { UsuarioLogadoContext, UsuarioLogadoProvider } from './shared/context';
import { Toaster } from 'react-hot-toast';
import { subtelasDeAcesso, telas } from './shared/interface/Rotas';
import { MenuLateral } from './shared/components/MenuLateral';
import Tela1 from './pages/Tela1';
import './shared/forms/TraducaoForm'


export default function App()  {
  const {acessos} = useContext(UsuarioLogadoContext)
  
  
  return (

    <Routes>
    {acessos.menus.flatMap((menu) =>
      menu.subtelas.map((subtela, index) => {
        const LazyComponent = React.lazy(
          () => import(`./pages/${subtela.component}.tsx`)
        );
        return (
          <Route
            key={index}
            path={subtela.url}
            element={
              <React.Suspense fallback={<div>Carregando...</div>}>
                <LazyComponent />
              </React.Suspense>
            }
          />
        );
      })
    )}
    <Route path="*" element={<Navigate to="/tela2" />} />
    <Route path="/tela1" element={<Tela1/>} />

  </Routes>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>     
    <ThemeProvider theme={temaPadrao}>
      <UsuarioLogadoProvider>
        <BrowserRouter>
          <Toaster/>
          <CssBaseline />
          <MenuLateral>
              <App />      
          </MenuLateral>
        </BrowserRouter>
      </UsuarioLogadoProvider>
    </ThemeProvider>
  </React.StrictMode>,
)



