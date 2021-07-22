import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Checkbox,
  Button,
  ClickAwayListener,
  Tooltip,
  makeStyles,
} from '@material-ui/core';

const ImageStep = ({ handleCompleteStep, stepNumber, text, tip }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const handleTooltip = () => {
    if (!checked && !tooltipOpen) setTooltipOpen(true);
    else setTooltipOpen(false);
  };

  const handleCloseTooltip = () => setTooltipOpen(false);

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item style={{ marginBottom: '50px' }}>
        <Typography className={classes.text}>{text}</Typography>
        {tip ? <Typography>{tip}</Typography> : null}
      </Grid>
      <Grid container direction="row" alignItems="center">
        <Checkbox checked={checked} onChange={toggleCheckbox} />
        <Typography>Ya tome la foto, dejame pasar alv</Typography>
      </Grid>
      <ClickAwayListener onClickAway={handleCloseTooltip}>
        <Tooltip
          open={tooltipOpen}
          title="Debes poner que ya tomaste la foto >:("
          arrow
        >
          <Grid container justifyContent="center" onClick={handleTooltip}>
            <Button
              disabled={!checked}
              variant="contained"
              onClick={() => handleCompleteStep(stepNumber)}
              className={classes.button}
            >
              Siguiente paso
            </Button>
          </Grid>
        </Tooltip>
      </ClickAwayListener>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '15px',
    height: '93vh',
  },
  text: {
    margin: 0,
    padding: 0,
    fontSize: '1.75rem',
  },
  input: {
    fontSize: '2rem',
  },
  inputLabel: {
    fontSize: '2rem',
    width: '10rem',
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
}));

export default ImageStep;
