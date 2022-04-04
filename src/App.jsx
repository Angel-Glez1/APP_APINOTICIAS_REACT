import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import { NoticasProvider } from './context/NoticiasProvider';

const App = () => {
    return (

        <NoticasProvider>

            <Container>

                <header>
                    <Typography
                        align='center'
                        marginY={5}
                        component="h1"
                        variant='h1'
                    >
                        Buscador de Noticias
                    </Typography>
                </header>

                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item md={6} xs={12} lg={4}>
                        <Formulario />
                    </Grid>
                </Grid>

                <ListadoNoticias />
            </Container>
        </NoticasProvider>
    )
}

export default App