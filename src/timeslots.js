import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Timeslots = (props) => {
    const [isBooked,setisBooked] = useState(false);

    const bookHandler = () =>{
        setisBooked(true)
    }

   
    return (
        <div>
            <ListGroup>
               {!isBooked?
                <Link style= {{textDecoration: 'none'}}  to='/edit'><ListGroup.Item action variant="primary" onClick={bookHandler}>{props.thistime}  </ListGroup.Item></Link>
                :
                <Link style= {{textDecoration: 'none'}}  to='/edit'><ListGroup.Item action variant="danger"  >{props.thistime} </ListGroup.Item></Link> 
               }
               
            </ListGroup>
            </div>
            
    )
}

export default Timeslots
