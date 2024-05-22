import { Avatar, Button, CssBaseline, Divider, Fab, IconButton, Paper, Rating, Switch, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import './App.css';
import { useEffect, useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import HeroCard from './Components/HeroCard';

function App() {
  const [submitting, setSubmitting] = useState(false);
  const [rating, setRating] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const theme1 = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ff0000'
      }
    }
  })
  const theme2 = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffff00'
      }
    }
  })


  useEffect(() => {
    const id = setTimeout(() => {
      setSubmitting(false)
    }, 1000);

    return () => {
      clearTimeout(id);
    }
  }, [submitting])

  return (
    <ThemeProvider theme={darkMode ? theme2 : theme1}>
      <Switch onClick={() => setDarkMode(!darkMode)} />
      <div className="App" style={{ margin: '8% 15%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1 rem' }}>
          <Avatar alt="Remy Sharp" src="https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254" sx={{ width: '80px', height: '80px' }} />
          <Typography variant='h4' component='h5'>
            Lionel Messi
          </Typography>
        </div>
        <Button variant='contained' fullWidth color='secondary' sx={{
          mb: 2,
          mt: 2
        }}>Learn More</Button>
        <LoadingButton loading={submitting} variant="outlined" onClick={() => setSubmitting(true)}>
          Fetch data
        </LoadingButton>
        <Divider />
        <Typography variant='h5'>
          Contact Us
        </Typography>
        <InstagramIcon color='primary'></InstagramIcon>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <Paper sx={{
          height: 600,
          width: 600,
          display: 'grid',
          placeItems: 'center'
        }}>
          <CssBaseline />
          <HeroCard></HeroCard>
          <Paper sx={{ width: '100px', height: '100px', mt: '20px' }}>

          </Paper>
        </Paper>
        <Divider sx={{ mt: 3, mb: 3 }} />
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        <Rating
          sx={{ color: 'cyan' }}
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <div>
          <TextField label='Your hobby' />
          <div>
            <Button variant='contained' sx={[{
              border: '1px solid red',
              bgcolor: 'steelblue',
              m: '10px 3px',
              p: 2,
              width: [
                100,
                200,
                300,
                400,
                500
              ],
              '$.MuiButton-root': {
                color: 'red'
              }
            },
            isActive && {
              background: 'yellow'
            }
            ]}>Submit</Button>
            <Switch onClick={() => { isActive ? setIsActive(false) : setIsActive(true) }} {...label} />
          </div>
          <Button variant='contained'>Cancel</Button>

        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;