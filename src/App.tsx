import React from 'react';
import './App.css';

import Cw1 from './components/cw1';

const  App = () => {
  const [changedNumber, setChangedNumber] = React.useState(0);

  const handleNumberChange = (newNumber: number) => {
    setChangedNumber(newNumber);
  }
  const textif = (int: number) => {
    if (int > 15){
      return(<div>liczba przekroczona</div>)
    }
    else if (int > 10){
      return(<div>liczba jest wieksza od 10</div>)
    }
    else if (int < -10){
      return(<div>liczba jest mniejsza od -10</div>)
    }

  }

  return (
    <div className="App">

      <Cw1 onNumberChange={handleNumberChange}/>
      {
        textif(changedNumber)
      }

    </div>
  );
}

export default App;
