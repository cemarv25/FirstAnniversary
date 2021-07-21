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

const Step3 = ({ handleCompleteStep, handleNavigate }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [answer, setAnswer] = useState('');

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
          El tercer paso va a servir para empezar con la dinámica que va a haber
          a lo largo de todo el día. Esta dinámica consiste en tomar fotos de
          todos los lugares a los que te lleven los distintos acertijos o pasos
          de la forma en la que se describe en él.
        </Typography>
        <Typography className={classes.text}>
          Por ahora, tienes que ir al lugar donde ocurre la frase anterior.
        </Typography>
      </Grid>
      <Grid container direction="row" alignItems="center">
        <Checkbox checked={checked} onChange={toggleCheckbox} />
        <Typography>Ya tome la foto, dejame pasar alv</Typography>
      </Grid>
      <ClickAwayListener onClickAway={handleCloseTooltip}>
        <Tooltip
          open={tooltipOpen}
          title="Debes poner la respuesta correcta para que se habilite el boton."
          arrow
        >
          <Grid container justifyContent="center" onClick={handleTooltip}>
            <Button
              disabled={!checked}
              variant="contained"
              onClick={() => handleCompleteStep(3)}
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

export default Step3;
