import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  makeStyles,
  Button,
} from '@material-ui/core';

const Step1 = ({ handleCompleteStep, handleNavigate }) => {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [answer, setAnswer] = useState('');

  const handleTextChange = (e) => {
    setAnswer(e.target.value);
  };

  const validateAnswer = (answer) => {
    if (
      answer === 'hamburguesas' ||
      answer === 'Hamburguesas' ||
      answer === 'mirador' ||
      answer === 'Mirador'
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    validateAnswer(answer);
  }, [answer]);

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item style={{ marginBottom: '50px' }}>
        <Typography className={classes.text}>
          El primer paso es simplemente poner la respuesta al acertijo en la
          cajita de abajo :)
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
      <Button
        disabled={disabled}
        variant="contained"
        onClick={() => handleCompleteStep(1)}
        className={classes.button}
      >
        Siguiente paso
      </Button>
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

export default Step1;
