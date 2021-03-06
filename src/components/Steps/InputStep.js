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

const InputStep = ({
  handleCompleteStep,
  stepNumber,
  possibleAnswers,
  text,
  tip,
}) => {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [answer, setAnswer] = useState('');

  const handleTextChange = (e) => {
    setAnswer(e.target.value);
  };

  const validateAnswer = (answer) => {
    if (possibleAnswers.includes(answer)) {
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

  useEffect(() => {}, []);

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item style={{ marginBottom: '50px' }}>
        <Typography className={classes.text}>{text}</Typography>
        {tip ? <Typography>{tip}</Typography> : null}
      </Grid>
      <TextField
        id={`step${stepNumber}-answer`}
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

export default InputStep;
