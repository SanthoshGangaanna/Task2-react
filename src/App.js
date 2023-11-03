import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form2 from "./Components/Form2/Form2";
import NavBar from './Components/NavBar/NavBar'
import Candidate from './Components/NavBar/Candidate'


function App() {

  const [formData, setFormData] = useState();

  const handleFormSubmit = (data) => {
    setFormData([data]);
    console.log(data)
  };

  return (
    <div>
      <NavBar/>
      <Router>
        <Routes>
        <Route
            path="/"
            element={<Form2 onFormSubmit={handleFormSubmit} />}
          />
           <Route
            path="/Home"
            element={<Form2 onFormSubmit={handleFormSubmit} />}
          />
        </Routes>
      </Router>
      <Candidate formData={formData}/>
    </div>
  );
}

export default App;
