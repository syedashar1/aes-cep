import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, Tab, Tabs } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

export default function Portal({user , basicData , setUser}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  if(basicData) return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Paper elevation={3}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '30px'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome {user.name}
          </Typography>

          <Box sx={{ borderBottom: 1, borderColor: 'divider' , width:'100%'}}>
  <Tabs value={1} aria-label="basic tabs example">
    <Tab value={1} label='Battery Charging' />
    <Tab value={2} label='Laptop Charging' />
  </Tabs>
</Box>


          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>

                <p style={{color:'green'}} >Active</p>

                <TextField
                  fullWidth
                  id="2"
                  label={basicData.channel.field1}
                  name="email"
                  value={basicData.feeds[0].field1}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="1"
                  label={basicData.channel.field2}
                  name="3"
                  value={basicData.feeds[0].field2 || 'No Record'}
                />
              </Grid>
              
              
            </Grid>

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{
                window.localStorage.clear()
                setUser(null)
              }}
            >
              Log Out
            </Button>
            
          </Box>
        </Box>
        </Paper>


        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}