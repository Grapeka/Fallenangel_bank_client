import ReactDom from "react-dom";
import classes from "./u.module.scss";
const UnallowedModal = (props) => {
  return ReactDom.createPortal(
    <>
      <div
        style={{
          display: `${props.resizedStyle == true ? "inline-block" : "none"}`,
        }}
        className={classes.container}
      >
        <h1 style={{ color: "white" }}>
          Only support 1315px width or bigger screen
        </h1>
        <h1 style={{ color: "white" }}>
          Please change your device, or adjust your screen size
        </h1>
      </div>
    </>,
    document.getElementById("overlay-root")
  );
};

export default UnallowedModal;
