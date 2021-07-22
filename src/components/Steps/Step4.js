import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Checkbox,
  makeStyles,
  Button,
  ClickAwayListener,
  Tooltip,
} from '@material-ui/core';

const Step4 = ({ handleCompleteStep, handleNavigate }) => {
  const classes = useStyles();
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [checked, setChecked] = useState(false);

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
        <Typography className={classes.text}>
          Ahora toca ir a otro lugar. Éste es un lugar al que ya hemos ido
          varias veces, a hacer varias cosas distintas. Es un lugar
          prácticamente único en Chihuahua y es muy importante. Ahí va mucha
          gente a hacer muchos tipos de actividades, desde deportes, clubes o
          simplemente ir a pasar el día con la familia.
        </Typography>
        <Typography className={classes.text}>
          Aquí también tienes que tomar una foto, pregúntale a tuamorsito qp.
        </Typography>
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
              onClick={() => handleCompleteStep(4)}
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
    fontSize: '1.7rem',
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

export default Step4;
