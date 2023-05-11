import { Box, Drawer, Icon, Tooltip, useTheme } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { PropsWithChildren, ReactNode, useContext, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Navigate, useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { UsuarioLogadoContext } from "../context";
import { subtelasDeAcesso } from "../interface/Rotas";

export const MenuLateral: React.FC<PropsWithChildren<PropsWithChildren>> = ({children}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openSubMenuConsulta, setOpenSubMenuConsulta] = useState(false);
  const [openSubMenuCadastro, setOpenSubMenuCadastro] = useState(false);
  const {acessos} = useContext(UsuarioLogadoContext)
  const navigate = useNavigate();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handlepage = (submenu:subtelasDeAcesso) => {
    navigate(submenu.url)
    handleDrawerToggle()
  };

  interface IListMenuLinkProps{
    icon: string;
    labelMenu: string ;
    onClick?: (() => void) | undefined;
  }



  const ListMenuLink: React.FC<PropsWithChildren<IListMenuLinkProps>> = ({icon, labelMenu, onClick, children}) => {

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(!open);
    };

    return (
      <>
      <ListItemButton onClick={handleToggle}>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={labelMenu} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
    )
  }
 

  return (
    <Box height="100vh" display="flex" flexDirection="column">               
      
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Prevenção e perdas
            </Typography>
            <div>
            <Tooltip title="Voltar para o antigo syscassol">
              <IconButton
                size="large"
                color="default"
                onClick={() => {window.location.href = "http://syscassol.cassol.local:8180/cas-syscassol/faces/login.xhtml"}}
              >
                <HomeIcon />
              </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
    

        <Drawer open={isDrawerOpen} onClose={handleDrawerToggle} variant="temporary" >
            <Box flex={1}>

                <List component= "nav">
                  {acessos.menus.map((menu, index) => {
                    return(
                      <ListMenuLink key={index} icon={menu.icon} labelMenu={menu.nome}  >
                      {menu.subtelas.map((submenu, index) => {
                        return(
                          <List key={index} component="div" disablePadding>
                              <ListItemButton onClick={ () => handlepage(submenu)}>{submenu.nome}</ListItemButton>
                          </List>                          
                        )
                      })}  
                      
                  </ListMenuLink>
                    )
                  })}
                 
                </List>
            </Box>  
        </Drawer>
        <Box flex={1} marginLeft={theme.spacing(3)} marginRight={theme.spacing(3)} marginTop={theme.spacing(4)} >
          {children}
        </Box>
           
            
   
    </Box>
  );
}
