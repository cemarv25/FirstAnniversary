import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import {
  ImageStep,
  InputStep,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
} from './components/Steps/Steps';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const [steps, setSteps] = useState([
    {
      index: 1,
      completed: false,
      type: 'input',
      possibleAnswers: ['mirador', 'Mirador', 'hamburguesas', 'Hamburguesas'],
      text: 'El primer paso es simplemente poner la respuesta al acertijo en el espacio de abajo :)',
    },
    {
      index: 2,
      completed: false,
      type: 'input',
      possibleAnswers: [
        'no hay nada mejor que unos hot dogs en la noshe con miamorsito',
        'No hay nada mejor que unos hot dogs en la noshe con miamorsito',
      ],
      text: 'Para completar el segundo paso necesitas preguntarle a tuamorsito qp. De ahí él te explicará y tendrás que poner la respuesta aquí abajo.',
    },
    {
      index: 3,
      completed: false,
      type: 'image',
      text: 'El tercer paso va a servir para empezar con la dinámica que va a haber a lo largo de todo el día. Esta dinámica consiste en tomar fotos de todos los lugares a los que te lleven los distintos acertijos o pasos de la forma descrita en él o por tuamorsito. \nPor ahora, tienes que ir al lugar donde ocurre la frase anterior.',
    },
    {
      index: 4,
      completed: false,
      type: 'image',
      text: 'Ahora toca ir a otro lugar. Éste es un lugar al que ya hemos ido varias veces, a hacer varias cosas distintas. Es un lugar prácticamente único en Chihuahua y es muy importante. Ahí va mucha gente a hacer muchos tipos de actividades, desde deportes, clubes o simplemente ir a pasar el día con la familia. \nAquí también tienes que tomar una foto, pregúntale a tuamorsito qp.',
    },
    {
      index: 5,
      completed: false,
      type: 'input',
      possibleAnswers: ['1947'],
      text: 'En este paso tienes que buscar en el lugar en el que ya estás. Hay un edificio que encima tiene una persona rara que tiene algo en la mano. Si te acercas mucho es probable que no veas la respuesta.',
      tip: 'Pista: maybe el tipo raro encima del edificio considera ésta una fecha importante.',
    },
    {
      index: 6,
      completed: false,
      type: 'image',
      text: 'Aqui es cuando vamos a dejar el regalito a mi casa :)',
      tip: '...y de una vez comemos equisdé',
    },
    {
      index: 7,
      completed: false,
      type: 'input',
      possibleAnswers: ['collar', 'Collar'],
      text: 'Resulta que la respuesta a este paso se encuentra atrapada en algo que puede ser de varios colores. Rescátalo y escribe qué es para pasar al siguiente :o',
      tip: 'Pista: algo que hemos visto muy pocas veces juntos, si no es que nunca y necesita algo especial para no pasársela en el suelo.',
    },
    { index: 8, completed: false },
    { index: 9, completed: false },
  ]);
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);

  const handleCompleteStep = (completedStep) => {
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[completedStep - 1].completed = true;

      return newSteps;
    });
    handleNavigate('forward');
  };

  const handleNavigate = (direction) => {
    if (direction === 'back' && step > 0) {
      setStep((prevState) => prevState - 1);
    }

    if (direction == 'forward' && step < 9) {
      setStep((prevState) => prevState + 1);
    }
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          toggleDrawer={toggleDrawer}
          step={step}
          completedSteps={steps}
          handleNavigate={handleNavigate}
        />
        <Switch>
          <Route exact path="/">
            <Home handleNavigate={handleNavigate} />
          </Route>
          {steps.map((step) => {
            return (
              <Route key={step.index} exact path={`/${step.index}`}>
                {step.type === 'input' ? (
                  <InputStep
                    key={step.index}
                    handleCompleteStep={handleCompleteStep}
                    stepNumber={step.index}
                    possibleAnswers={step.possibleAnswers}
                    text={step.text}
                    tip={step.tip}
                  />
                ) : (
                  <ImageStep
                    key={step.index}
                    handleCompleteStep={handleCompleteStep}
                    stepNumber={step.index}
                    text={step.text}
                    tip={step.tip}
                  />
                )}
              </Route>
            );
          })}
          {/* <Route exact path="/2">
            <Step2
              handleCompleteStep={handleCompleteStep}
              handleNavigate={handleNavigate}
            />
          </Route>
          <Route exact path="/3">
            <Step3
              handleCompleteStep={handleCompleteStep}
              handleNavigate={handleNavigate}
            />
          </Route>
          <Route exact path="/4">
            <Step4
              handleCompleteStep={handleCompleteStep}
              handleNavigate={handleNavigate}
            />
          </Route>
          <Route exact path="/5">
            <Step5
              handleCompleteStep={handleCompleteStep}
              handleNavigate={handleNavigate}
            />
          </Route>
          <Route exact path="/6">
            <Step6
              handleCompleteStep={handleCompleteStep}
              handleNavigate={handleNavigate}
            />
          </Route>
          <Route exact path="/7">
            <Step7
              handleCompleteStep={handleCompleteStep}
              handleNavigate={handleNavigate}
            />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
