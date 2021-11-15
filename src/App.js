import Timeslots from './timeslots'
import './App.css';

function App(props) {
 

  //wheneve  ui changes useeffect runs
  return (
    
    <div className="App">
      
      <header className="App-header">
     
        Timeslot Booking

        <Timeslots/>
       
      </header>
      
           
    </div>
  );
}

export default App;