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

const Navbar = ({ toggleDrawer, step, handleNavigate, steps }) => {
  const [title, setTitle] = useState('<3');
  const [tooltipOpen, setTooltipOpen] = useState([false, false]);
  const classes = useStyles();
  const history = useHistory();

  const isStepCompleted = (step) => {
    if (!steps[step]) return false;
    return steps[step].completed;
  };

  const handleTooltipOpen = (tooltipIndex) => {
    setTooltipOpen((prevTooltipOpen) => {
      const newTooltipOpen = [...prevTooltipOpen];
      newTooltipOpen[tooltipIndex] = true;

      return newTooltipOpen;
    });
  };

  const handleTooltipClose = (tooltipIndex) => {
    setTooltipOpen((prevTooltipOpen) => {
      const newTooltipOpen = [...prevTooltipOpen];
      newTooltipOpen[tooltipIndex] = false;

      return newTooltipOpen;
    });
  };

  const handleRequestNavigateForward = (step) => {
    if (step == 0) handleNavigate('forward');
    else if (isStepCompleted(step)) handleNavigate('forward');
    else handleTooltipOpen();
  };

  useEffect(() => {
    if (step == 0) {
      history.push('/');
      setTitle('<3');
    }
    if (step > 0 && step < steps.length + 1) {
      history.push(`/${step}`);
      setTitle(`Paso ${step}`);
    }
    if (step >= steps.length + 1) {
      history.push('/finish');
      setTitle('FINAL');
    }
  }, [step]);

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      className={classes.navbar}
    >
      <Grid container item xs={3} justifyContent="center">
        <ClickAwayListener onClickAway={() => handleTooltipClose(0)}>
          <Tooltip
            open={tooltipOpen[0]}
            onClose={() => handleTooltipClose(0)}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            arrow
            title="No puedes ir para atrás :("
          >
            <Grid>
              <Button
                onClick={() =>
                  step === 0 ? handleTooltipOpen(0) : handleNavigate('back')
                }
              >
                <ArrowBack />
              </Button>
            </Grid>
          </Tooltip>
        </ClickAwayListener>
      </Grid>
      <Grid container item xs={3} justifyContent="center">
        <Typography className={classes.navbarTitle}>{title}</Typography>
      </Grid>
      <Grid container item xs={3} justifyContent="center">
        <ClickAwayListener onClickAway={() => handleTooltipClose(1)}>
          <Tooltip
            open={tooltipOpen[1]}
            onClose={() => handleTooltipClose(1)}
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
    width: '100%',
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
