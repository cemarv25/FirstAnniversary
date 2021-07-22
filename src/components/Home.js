import React from 'react';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = ({ handleNavigate }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid container item xs={12} justifyContent="center">
        <Typography className={classes.header}>Bienvenida</Typography>
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <Typography className={classes.text}>
          Esta es la pagina donde vas a introducir cada una de las frases o
          palabras que vayas deduciendo, o que creas que has deducido.
        </Typography>
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <Typography className={classes.text}>
          Para empezar, da click en el boton de abajo, éste te llevará al primer
          paso :)
        </Typography>
      </Grid>
      <Button
        variant="contained"
        onClick={() => handleNavigate('forward')}
        className={classes.button}
      >
        Empezar!
      </Button>
      <Typography className={classes.footer}>
        Una disculpa por la elección de colores tan feos, yo no le se al diseño
        jsjsjs
      </Typography>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '10px',
    height: '93vh',
  },
  header: {
    fontSize: '5rem',
    fontWeight: 'bold',
    margin: 'auto',
  },
  text: {
    fontSize: '1.5rem',
  },
  button: {
    backgroundColor: theme.palette.secondary.light,
    textTransform: 'none',
    fontSize: '2rem',
    fontWeight: 'bold',
    width: '60%',
    height: '5rem',
    margin: '4rem auto',
  },
  footer: {
    margin: 'auto',
  },
}));

export default Home;
