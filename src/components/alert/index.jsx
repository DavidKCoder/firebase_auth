import React, { useEffect } from "react";

const Alert = ({ msg, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [ onClose ]);

  return (
    <div className="modal">
      <span className="error">
        {msg ? msg : "Something went wrong!"}
      </span>
    </div>
  );
};

export default Alert;
