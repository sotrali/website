import { useRef, useEffect, useState } from "react";

export default function Collapse({
  isExpanded = false,
  isOverlay = false,
  children,
}) {
  const ref = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      setContentHeight(ref.current.clientHeight + 10);
    }
  }, [children]);

  if (isOverlay) {
    return (
      <div
        className='collapse'
        style={{
          height: isExpanded ? contentHeight : 0,
          position: "absolute",
          zIndex: "1",
          backgroundColor: "whitesmoke",
          border: "solid gray 2px",
          borderTop: "none",
          marginTop: ".5rem",
        }}
      >
        <div ref={ref}>{children}</div>
      </div>
    );
  } else {
    return (
      <div
        className='collapse'
        style={{
          height: isExpanded ? contentHeight : 0,
        }}
      >
        <div ref={ref}>{children}</div>
      </div>
    );
  }
}
