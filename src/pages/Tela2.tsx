import { Autocomplete, Badge, Box, Button, Paper, Stack, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { UsuarioLogadoContext } from "../shared/context";
import React, { useContext, useState } from 'react'
import Api from "../shared/utils/api";
import SearchIcon from '@mui/icons-material/Search';
import * as yup from 'yup'

export default function Tela2(){
    const usuario = useContext(UsuarioLogadoContext)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [dias, setDias] = useState('X');
    const [FirstRender, setFirstRender] = useState(true)
    const [textoFirstRender, setTextoFirstRender] = useState("Faça a primeira pesquisa para carregar a tabela!")
    const [data, setData] = useState<ITableRender[]>([{}]);
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.up('sm'));
    
   
    const validationSchema: yup.Schema<ITableRender> = yup.object({
      name: yup.string().required().min(3),
      age: yup.number().required().positive().integer(),
      email: yup.string().email().required(),
    });

    const userData: ITableRender = {
      name: '2',
      age: 2,
      email: 'john.doe@example.com',
    };
    
    
    
    const requisicao = () => {
        Api.post("auth/test")
    }
   


      
      const combo = [
        { label: 'Estadual', id: 1 },
         { label: 'Interestadual', id: 2 },
      ];

      interface ITableRender {
        id?: number;
        name?: string;
        age?: number;
        email?: string;
      }
      
       

        const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
          setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        };
      const legenda = () => {
        
        return(
            <Box width="200px" height="150px" >
              <Box display="flex"  justifyContent="center" >
                <Typography>Legenda</Typography>
              </Box>
            <Box display="flex" alignItems="center">
                <Box bgcolor="#FF8A05" width="10px" height="10px" borderRadius="50%" />
                <Typography marginLeft="5px">Pedidos atrasados {dias} dias</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Box bgcolor="#FF5405" width="10px" height="10px" borderRadius="50%" />
                <Typography marginLeft="5px">Pedidos atrasados {dias}  dias</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Box bgcolor="#FF2A05" width="10px" height="10px" borderRadius="50%" />
                <Typography marginLeft="5px">Pedidos atrasados {dias}  dias</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Box bgcolor="#E41B01" width="10px" height="10px" borderRadius="50%" />
                <Typography marginLeft="5px">Pedidos atrasados {dias}  dias</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Box bgcolor="#9c0000" width="10px" height="10px" borderRadius="50%" />
                <Typography marginLeft="5px">Pedidos atrasados {dias}  dias</Typography>
            </Box>
        </Box>
        )
      }
      const pesquisar = () => {

        validationSchema.validate(userData, {abortEarly: false})
      .then(validUser => {
        console.log('User is valid:', validUser);
      })
      .catch(error => {
        console.log('Validation error:', error);
      });
      setFirstRender(!FirstRender)
      }

    return(
        <Box >
        
            <Typography variant="h4" color="primary">Transferência de mercadoria</Typography>
           {true && (

           <Button  variant="contained" onClick={requisicao}>teste requisição</Button>
           )}
            <Box display="flex" marginBottom="75px" justifyContent="space-between" flexDirection={small ? "row" : "column"}>
                <TextField required sx={{backgroundColor: "white"}} id="outlined-basic" label="Filial" variant="outlined" />
                <TextField sx={{backgroundColor: "white"}} id="outlined-basic" label="Filial" variant="outlined" />
                <TextField sx={{backgroundColor: "white"}} id="outlined-basic" label="Filial" variant="outlined" />
                <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={combo}
                sx={{ width: 210,backgroundColor: "white" }}
                renderInput={(params) => <TextField {...params} label="Estadual/Interestadual" />}
                /> 
                <TextField sx={{backgroundColor: "white"}} id="outlined-basic" label="Filial" variant="outlined" />
                <TextField sx={{backgroundColor: "white"}} id="outlined-basic" label="Filial" variant="outlined" />
                <TextField sx={{backgroundColor: "white"}} id="outlined-basic" label="Filial" variant="outlined" />
                <TextField sx={{backgroundColor: "white"}} id="outlined-basic" label="Filial" variant="outlined" />
            </Box>
            <Box display="flex" justifyContent="space-between">

              <Button sx={{height: "35px"}} onClick={pesquisar} variant="contained" endIcon={<SearchIcon/>}>Pesquisar</Button>
              <Box display="flex" alignItems="center">
                <Typography>Estadual</Typography>
                <Switch
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              <Typography>Interestadual</Typography>
              </Box>

            </Box>
       
      
        

            <Tooltip disableHoverListener={FirstRender} placement="top-end"title={legenda()}>
                    <Stack   spacing={2.5}  direction="row"  justifyContent="flex-end" alignItems="center">
                         <Badge sx={{'& .MuiBadge-badge':{color: 'white', backgroundColor: '#FF8A05', display: "flex", alignItens: "center"}}} badgeContent={0} showZero/>
                         <Badge sx={{'& .MuiBadge-badge':{color: 'white', backgroundColor: '#FF5405', display: "flex", alignItens: "center"}}} badgeContent={0} showZero/>
                         <Badge sx={{'& .MuiBadge-badge':{color: 'white', backgroundColor: '#FF2A05', display: "flex", alignItens: "center"}}} badgeContent={0} showZero/>
                         <Badge sx={{'& .MuiBadge-badge':{color: 'white', backgroundColor: '#E41B01', display: "flex", alignItens: "center"}}} badgeContent={0} showZero/>
                         <Badge sx={{'& .MuiBadge-badge':{color: 'white', backgroundColor: '#9c0000', display: "flex", alignItens: "center"}}} badgeContent={0} showZero />
                    </Stack>
            </Tooltip>    
            <TableContainer component={Paper} >              
            <Table>
            <TableHead>
                <TableRow>
                  {FirstRender ? (
                    <TableCell align="center">{textoFirstRender}</TableCell>

                  ) : (
                    <>
                    <TableCell>ID</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Idade</TableCell>
                    <TableCell>Email</TableCell>
                    </>                    
                    
                  )}
                
                </TableRow>
            </TableHead>
            <TableBody>
                { !FirstRender ? (
                data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.email}</TableCell>
                </TableRow>
                ))) : (
                  <TableRow >
                    <TableCell/>
                  </TableRow>
                )
              }
            </TableBody>
            </Table>
            </TableContainer>
            
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Linhas por páginas"
            />
       
        </Box>

    )
}