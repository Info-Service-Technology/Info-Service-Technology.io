import {Box,Button,Container,Stack,Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

export default function NotFound(){
  return <Box sx={{py:{xs:10,md:16},minHeight:'55vh',display:'flex',alignItems:'center',bgcolor:'#f8f9fa'}}>
    <Container maxWidth="md">
      <Stack spacing={2.5} alignItems="flex-start">
        <Typography variant="overline" color="#d81159" fontWeight={800}>ERRO 404</Typography>
        <Typography variant="h1" sx={{fontSize:{xs:42,md:64},lineHeight:1.05}}>Página não encontrada</Typography>
        <Typography color="text.secondary" sx={{fontSize:17,maxWidth:620,lineHeight:1.7}}>O endereço acessado não corresponde a uma página disponível. Verifique a URL ou retorne ao início para continuar navegando.</Typography>
        <Button component={RouterLink} to="/" variant="contained" size="large" sx={{mt:1}}>Voltar ao início</Button>
      </Stack>
    </Container>
  </Box>;
}
