import { Button, SwipeableDrawer, makeStyles } from '@material-ui/core';

const Drawer = ({ open, toggleDrawer, completedSteps }) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      anchor="left"
      swipeAreaWidth={50}
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      className={classes.drawer}
    >
      {completedSteps
        ? completedSteps.map((step) => {
            if (step.completed) {
              return (
                <Button
                  key={step.index}
                  onClick={toggleDrawer}
                  className={classes.drawerButton}
                >
                  Paso {step.index}
                </Button>
              );
            }
          })
        : null}
    </SwipeableDrawer>
  );
};

const useStyles = makeStyles({
  drawerButton: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  drawer: {
    width: '30%',
  },
});

export default Drawer;
