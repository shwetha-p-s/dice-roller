import './App.css';
import { useState } from 'react';
import d1 from "./images/d1.png";
import d2 from "./images/d2.png";
import d3 from "./images/d3.png";
import d4 from "./images/d4.png";
import d5 from "./images/d5.png";
import d6 from "./images/d6.png";
function App() {
  var diceImages = [d1,d2,d3,d4,d5,d6]
  const [image, setNewImage] = useState(diceImages[0])

  const rollDice = () => {
    var randomNum1 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
  }

  

  return (
    <div className="App">
      <center>
        <h1>DICE ROLLER</h1>
        <div className = ' container'>
          <img className = 'square' src={image}></img>
        </div>
        <button type = "button" class = "btn btn-outline-primary" onClick={rollDice}>Roll!</button>
      </center>

    </div>
  );
}

export default App;
