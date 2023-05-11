import React, { PropsWithChildren, createContext } from "react";
import { IUser } from "../interface/UsuarioLogado";
import Api from "../utils/api";

//const token = new URLSearchParams(window.location.search).get("token");

const user : IUser = {
    token: "tokenteste",
    id: 12,
    usuario: "fabio.petry",
    matricula: "44996",
    filiais: [1,3,8,11],
    acessos: {
        menus: [
            {nome: "Consulta",  icon: "search" ,subtelas: [{nome: "Consulta de pedidos", url: "/tela2", component: "Tela2"}]},
            {nome: "Movimentação",  icon: "remove_circle" ,subtelas: [{nome: "Filtransf", url: "/tela3", component: "Tela3"}]},
            {nome: "CRUD",  icon: "search" ,subtelas: [{nome: "tela de insert", url: "/tela4", component: "Tela4"}]},
        ]},
        paleta: "paleta",
    };

export const UsuarioLogadoContext = createContext<IUser>({} as IUser);

export const UsuarioLogadoProvider: React.FC<PropsWithChildren> = ({children}) => {
    
    return(
        <UsuarioLogadoContext.Provider value={user}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}