import { useEffect, useState } from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import { ArrowBack, ArrowForward, Menu } from '@material-ui/icons';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

const Navbar = ({ toggleDrawer }) => {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('<3');
  const { path } = useRouteMatch();
  const history = useHistory();
  const classes = useStyles();

  const handleNavigate = (direction) => {
    if (direction === 'back' && step > 0) {
      setStep((prevState) => prevState - 1);
    }

    if (direction == 'forward' && step < 4) {
      setStep((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    console.log(step);
    if (step == 0) {
      history.push('/');
      setTitle('<3');
    }
    if (step > 0 && step < 5) {
      history.push(`/${step}`);
      setTitle(`Paso ${step}`);
    }
  }, [step]);

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      className={classes.navbar}
    >
      <Grid container item xs={1} onClick={toggleDrawer}>
        <Menu className={classes.menuButton} />
      </Grid>
      <Grid container item xs={3} justifyContent="center">
        <Button onClick={() => handleNavigate('back')}>
          <ArrowBack />
        </Button>
      </Grid>
      <Grid container item xs={3} justifyContent="center">
        <Typography className={classes.navbarTitle}>{title}</Typography>
      </Grid>
      <Grid container item xs={3} justifyContent="center">
        <Button onClick={() => handleNavigate('forward')}>
          <ArrowForward />
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  navbar: {
    height: '7vh',
    backgroundColor: theme.palette.primary.main,
  },
  navbarTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.light,
  },
  menuButton: {
    marginLeft: '5px',
    width: '100%',
    height: '100%',
  },
}));

export default Navbar;
