import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

const FloatButton = () => {
  const styles = {
    mainButtonStyles: {
      backgroundColor: "purple",
      borderRadius: 48,
    },
    actionButtonStyles: {
      backgroundColor: "purple",
      color: "#27ae60",
    },
    mainStyle: { bottom: 0, right: 60 },
    actionStyle: {
      backgroundColor: "purple",
      borderRadius: 48,
    },
  };
  return (
    <Fab
      mainButtonStyles={styles.mainButtonStyles}
      actionButtonStyles={styles.actionButtonStyles}
      style={styles.mainStyle}
      icon={"+"}
      event={"hover"}
      alwaysShowTitle={true}
      //   onClick={someFunctionForTheMainButton}
    >
      <Action
        text="Email"
        style={styles.actionStyle}
        onClick={console.log("email")}
      />
      <Action text="Help" onClick={console.log("help")}>
        <i className="fa fa-help" />
      </Action>
    </Fab>
  );
};

export default FloatButton;
