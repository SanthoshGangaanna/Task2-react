import React from "react";
import './NavBar.css'
import img1 from './VYlogo.jpg';

function App() {
  return (
    <div>
          <div className='NavBar'>
    <div>
      <img src={img1} alt='logo' />
    </div>
    <div>
        <ul className='Menuflex'>
            <li><a href='/Home'>Home</a></li>
            <li><a href='/Candidate'>Candidate</a></li>
            <li><button className='LogoutButton'>Logout</button></li>
        </ul>
    </div>
    </div>
    </div>

  );
}

export default App;
