import { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  Button,
  ClickAwayListener,
  Tooltip,
} from '@material-ui/core';
import { ArrowBack, ArrowForward, Menu } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';

const Navbar = ({ toggleDrawer, step, handleNavigate, completedSteps }) => {
  const [title, setTitle] = useState('<3');
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const isStepCompleted = (step) => {
    if (!completedSteps[step]) return false;
    return completedSteps[step].completed;
  };

  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };

  const handleRequestNavigateForward = (step) => {
    if (step == 0) handleNavigate('forward');
    else if (isStepCompleted(step)) handleNavigate('forward');
    else handleTooltipOpen();
  };

  useEffect(() => {
    console.log('completed', completedSteps);
    console.log('step', step);
    if (step == 0) {
      history.push('/');
      setTitle('<3');
    }
    if (step > 0 && step < 9) {
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
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip
            open={tooltipOpen}
            onClose={handleTooltipClose}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            arrow
            title={
              <Typography className={classes.tooltipText}>
                {'Debes completar el paso para avanzar >:('}
              </Typography>
            }
          >
            <Button onClick={() => handleRequestNavigateForward(step)}>
              <ArrowForward />
            </Button>
          </Tooltip>
        </ClickAwayListener>
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
  tooltipText: {
    fontWeight: '3rem',
  },
}));

export default Navbar;
