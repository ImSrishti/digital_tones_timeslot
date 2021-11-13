import Timeslots from './timeslots'
import './App.css';
import { useState } from 'react';

function App() {
  const times = useState(['09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm'])

  return (
    
    <div className="App">
      
      <header className="App-header">
     
        Timeslot Booking

      {times[0].map((time,index)=>(
      <Timeslots key={index} thistime={time}/>
      ))}
       
      </header>
      
           
    </div>
  );
}

export default App;
