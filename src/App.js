import Timeslots from './timeslots'
import './App.css';
import { useState ,useEffect} from 'react';
import { connect } from 'react-redux'
import {timeslots} from './redux/actions'

function App(props) {
  const times = useState(['09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm'])

  useEffect(() => {
    props.timeslots(times)
  }, [props,times])
  return (
    
    <div className="App">
      
      <header className="App-header">
     
        Timeslot Booking

        <Timeslots/>
       
      </header>
      
           
    </div>
  );
}

export default connect(null, {timeslots})(App)