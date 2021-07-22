import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  makeStyles,
  Button,
  Tooltip,
  ClickAwayListener,
} from '@material-ui/core';

const Step7 = ({ handleCompleteStep, handleNavigate }) => {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [answer, setAnswer] = useState('');

  const handleTextChange = (e) => {
    setAnswer(e.target.value);
  };

  const validateAnswer = (answer) => {
    if (answer === 'collar' || answer === 'Collar') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleTooltip = () => {
    if (disabled && !tooltipOpen) setTooltipOpen(true);
    else setTooltipOpen(false);
  };

  const handleCloseTooltip = () => setTooltipOpen(false);

  useEffect(() => {
    validateAnswer(answer);
  }, [answer]);

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item style={{ marginBottom: '50px' }}>
        <Typography className={classes.text}>
          Resulta que la respuesta a este paso se encuentra atrapada en algo que
          puede ser de varios colores. Rescátalo y escribe qué es para pasar al
          siguiente :o
        </Typography>
        <Typography>
          Pista: algo que hemos visto muy pocas veces juntos, si no es que nunca
          y necesita algo especial para no pasársela en el suelo.
        </Typography>
      </Grid>
      <TextField
        id="step1-answer"
        key="step1-answer"
        value={answer}
        onChange={handleTextChange}
        label="Respuesta"
        inputProps={{ className: classes.input }}
        InputLabelProps={{ className: classes.inputLabel }}
      />
      <ClickAwayListener onClickAway={handleCloseTooltip}>
        <Tooltip
          open={tooltipOpen}
          title="Debes poner la respuesta correcta para que se habilite el boton >:("
          arrow
        >
          <Grid container justifyContent="center" onClick={handleTooltip}>
            <Button
              disabled={disabled}
              variant="contained"
              onClick={() => handleCompleteStep(1)}
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
    fontSize: '2rem',
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

export default Step7;
