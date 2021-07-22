import React, { useEffect, useState } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Confetti from 'react-confetti';
import BonelessPNG from '../assets/boneless.png';

const confettiColors = ['#ff0000', '#fa96e9', '#6f39ed', '#34eda0', '#e3e02b'];

const Finish = () => {
  const classes = useStyles();
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  return (
    <Grid
      id="confetti-container"
      container
      direction="column"
      alignItems="center"
    >
      <Confetti width={width} height={height} colors={confettiColors} />
      <Typography className={classes.header}>FELICIDADES</Typography>
      <Typography className={classes.text1}>
        {
          'Haz completado todos los pasos, y con ello, esta maravillosa aventura... casi.\n'
        }
      </Typography>
      <Typography className={classes.text2}>
        {'Ahora lo unico que falta es ir a comer\n'}
      </Typography>
      <Typography className={classes.text3}>
        {'UNOS DELICIOSOS\nSIN HUESOS'}
      </Typography>
      <Grid item className={classes.boneless}></Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  header: {
    fontSize: '5rem',
    fontWeight: 'bold',
    letterSpacing: '5px',
    animation: '$color-change 3s infinite',
  },
  text1: {
    textAlign: 'center',
    fontSize: '2rem',
    opacity: '0',
    animation: '$fadeIn 2s linear forwards',
  },
  text2: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBotton: '3rem',
    opacity: '0',
    animation: '$fadeIn 2s linear 3s forwards',
  },
  text3: {
    textAlign: 'center',
    fontSize: '3rem',
    marginBottom: '3rem',
    opacity: '0',
    animation: '$fadeIn 2s linear 6s forwards',
  },
  boneless: {
    width: '275px',
    height: '199px',
    opacity: '0',
    backgroundImage: `url(${BonelessPNG})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    animation: '$fadeIn 2s linear 6s forwards',
  },

  '@keyframes color-change': {
    '0%': { color: 'red' },
    '50%': { color: 'blue' },
    '100%': { color: 'red' },
  },

  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
});

export default Finish;
