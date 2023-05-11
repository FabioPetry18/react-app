

  export interface telasDeAcesso {
    menus: Array<telas>
  }


  export interface telas {    
    //Nome menu
      nome: string;
      
    //nome do icone
    icon: string

    //Nome e referência das subtelas
    subtelas: Array<subtelasDeAcesso>
   
    
    }

  export interface subtelasDeAcesso {
    nome: string;
    url: string;
     //Nome da classe da tela  
     component: string; 
  }
  