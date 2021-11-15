import React,{useState} from 'react'
import { Link,useParams } from "react-router-dom";
import { Form,Button,Row,Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getdetails } from './redux/selector';
import {edit} from './redux/actions';
const Edit_details = (props) => {
    const {id} = useParams();

    const [user, setuser] = useState(props.user[id].userName)
    const [phone, setphone] = useState(props.user[id].phone)
    const handleSubmit = () =>{
            props.edit([id,user,phone])
    }
    return (
        <div>  
            <Form >
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        User
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" onChange={(e) => setuser(e.target.value)} placeholder={user} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Phone No
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" onChange={(e) => setphone(e.target.value)} placeholder={phone} />
                    </Col>
                </Form.Group>
                
                

                <Form.Group as={Row} className="mb-3">
                   
                    <Col sm={{ span: 10, offset: 2 }} >
                    <Link style={{ textDecoration: 'none' }} to='/'>  <Button type="submit" onClick={handleSubmit} style={{margin:'6px'}}>Okay</Button></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'>    <Button type="button" >Cancel</Button></Link>
                    </Col>
                
                </Form.Group>
            </Form>
        </div>
    )
}
const mapStateToProps = (state) => {
    const user = getdetails(state)
    return { user };
}

export default connect(mapStateToProps,{edit})(Edit_details)


// Instead of Redirect in v6 Navigate is used
//git push -u origin master  to handleerror: src refspec main does not match any error: in git