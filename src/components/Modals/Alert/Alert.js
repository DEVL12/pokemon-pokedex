import React from "react";
import './Alert.css';

const Alert = ({dataAlert}) => {
  const {data, state_data, class_alert} = dataAlert;
  
  return (
    <div className={`alert-modal ${class_alert}`} onClick={() => state_data({ show: false })}>
      <h4>{data.title}</h4>
      <p>{data.msg}</p>
    </div>
  );
};

export { Alert };
