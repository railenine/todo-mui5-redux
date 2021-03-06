import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Weather from "./Weather";
import Clock from "./Clock";

const TopBar = () => {
    
    console.log('render')
    
    return (
        <Container maxWidth="sm">
            <Typography 
                variant="h1"
                sx={{
                    fontWeight: '100',
                    textAlign: 'center',
                    backgroundColor: '#2AA5A0',
                    backgroundImage: 'linear-gradient(90deg, #0462ac, #4993c1, #a2e6fb)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                <p>TODO List</p>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={6}
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            textAlign: 'center',
                        }}
                    >
                        <Weather />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={6}
                        sx={{
                            padding: '20px',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}
                    >
                        <Clock />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default TopBar;