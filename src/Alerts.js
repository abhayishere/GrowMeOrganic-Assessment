import React from "react";
import Alert from '@mui/material/Alert';

function Alerts(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
          <Alert severity="error">{props.alert.msg}</Alert>
      )}
    </div>
  );
}

export default Alerts;
