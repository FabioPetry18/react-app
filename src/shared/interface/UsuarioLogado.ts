import { telasDeAcesso } from "./Rotas";

 export  interface IUser {
    token: string;
    id: number;
    usuario: string;
    matricula: string;
    filiais: Array<Number>
    acessos: telasDeAcesso
    paleta?: string;
  }