import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggleDrawer={toggleDrawer} />
        <Drawer
          open={open}
          toggleDrawer={toggleDrawer}
          completedSteps={completedSteps}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/1">
            <Step1 completedSteps={completedSteps} />
          </Route>
          <Route exact path="/2">
            <Step2 completedSteps={completedSteps} />
          </Route>
          <Route exact path="/3">
            <Step3 completedSteps={completedSteps} />
          </Route>
          <Route exact path="/4">
            <Step4 completedSteps={completedSteps} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
