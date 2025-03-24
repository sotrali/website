import utilStyles from "../styles/utils.module.css";

export default function ToolTip({ displayText = "", width, children }) {
  let style = {};
  if (width) {
    style = { width: width + "rem" };
  }
  return (
    <span className={utilStyles.tooltip}>
      {displayText}
      <span className={utilStyles.tooltiptextCenter} style={style}>
        {children}
      </span>
    </span>
  );
}
