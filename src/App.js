import "./App.css";
import FormPage from "./components/FormPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alerts from "./Alerts";
import { useState } from "react";
import ShowData from "./components/ShowData";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <div>
      <BrowserRouter>
        <Alerts alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<FormPage />} />
            <Route
              exact
              path="/data"
              element={<ShowData showAlert={showAlert} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
