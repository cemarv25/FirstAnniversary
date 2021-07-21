import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { Step1, Step2, Step3, Step4 } from './components/Steps/Steps';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';

function App() {
  const [completedSteps, setCompletedSteps] = useState([
    { index: 1, completed: false },
    { index: 2, completed: false },
    { index: 3, completed: false },
    { index: 4, completed: false },
  ]);
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);

  const handleCompleteStep = (completedStep) => {
    setCompletedSteps((prevCompletedSteps) => {
      const newCompletedSteps = [...prevCompletedSteps];
      newCompletedSteps[completedStep - 1].completed = true;

      return newCompletedSteps;
    });
    handleNavigate('forward');
  };

  const handleNavigate = (direction) => {
    if (direction === 'back' && step > 0) {
      setStep((prevState) => prevState - 1);
    }

    if (direction == 'forward' && step < 4) {
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
          completedSteps={completedSteps}
          handleNavigate={handleNavigate}
        />
        <Drawer
          open={open}
          toggleDrawer={toggleDrawer}
          completedSteps={completedSteps}
        />
        <Switch>
          <Route exact path="/">
            <Home handleNavigate={handleNavigate} />
          </Route>
          <Route exact path="/1">
            <Step1
              handleCompleteStep={handleCompleteStep}
              handleNavigate={handleNavigate}
            />
          </Route>
          <Route exact path="/2">
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
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
