import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getdetails } from './redux/selector'

const Timeslots = (props) => {
    const [isBooked, setisBooked] = useState(false);

    const bookHandler = () => {
        setisBooked(true)
    }

    return (
        <div>
            {props.time.map((thistime, index) => (
                
                <ListGroup>
                    {!isBooked ?
                        <Link style={{ textDecoration: 'none' }} to='/edit'><ListGroup.Item action variant="primary" onClick={bookHandler}>{thistime.time}  </ListGroup.Item></Link>
                        :
                        <Link style={{ textDecoration: 'none' }} to='/edit'><ListGroup.Item action variant="danger"  >{thistime.time} </ListGroup.Item></Link>
                    }
                </ListGroup>
            ))}

        </div>

    )
}
const mapStateToProps = (state) => {
    const time = getdetails(state)
    return { time };
}



export default connect(mapStateToProps,null)(Timeslots);

