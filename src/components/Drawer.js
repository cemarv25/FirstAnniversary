import { Button, SwipeableDrawer } from '@material-ui/core';

const Drawer = ({ open, toggleDrawer, completedSteps }) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      {completedSteps.map((step) => {
        if (step.completed) {
          return (
            <Button key={step.index} onClick={toggleDrawer}>
              Paso {step.index}
            </Button>
          );
        }
      })}
    </SwipeableDrawer>
  );
};

export default Drawer;
