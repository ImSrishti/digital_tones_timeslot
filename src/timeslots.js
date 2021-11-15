import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getdetails } from './redux/selector';
import {book} from './redux/actions';
const Timeslots = (props) => {

    const bookHandler = (index) => {     
        props.book([true,index])
    }

    return (
        <div>
            {props.time.map((thistime, index) => (
                
                <ListGroup key ={index}>
                    {!thistime.booked ?
                        <Link style={{ textDecoration: 'none' }} to={`/edit/${index}`}><ListGroup.Item action variant="primary" onClick={()=>bookHandler(index)}>{thistime.time}  </ListGroup.Item></Link>
                        :
                        <Link style={{ textDecoration: 'none' }} to={`/edit/${index}`}><ListGroup.Item action variant="danger"  >{thistime.time} </ListGroup.Item></Link>
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



export default connect(mapStateToProps,{book})(Timeslots);

