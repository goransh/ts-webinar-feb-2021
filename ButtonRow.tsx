import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Button from "./Button";

const useStyles = createUseStyles({
  buttonRow: {
    display: "flex",
    gap: "1rem",
  },
  button: {
    padding: "1rem",
  },
});

const ButtonRow = () => {
  const classes = useStyles();
  const [showBlueButton, setShowBlueButton] = useState(false);

  return (
    <div className={classes.buttonRow}>
      <Button
        color="red"
        type="button"
        className={classes.button}
        onClick={() => console.log("I'm a red button")}
      >
        Red Button
      </Button>
      <Button
        color="green"
        className={classes.button}
        onClick={() => setShowBlueButton((state) => !state)}
      >
        Click me to toggle blue button
      </Button>
      {showBlueButton && (
        <Button color="blue" className={classes.button}>
          I&#39;m Blue Da Ba Dee Da Ba Die
        </Button>
      )}
    </div>
  );
};

export default ButtonRow;
