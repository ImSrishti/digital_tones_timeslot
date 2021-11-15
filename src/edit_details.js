import React from 'react'
import { Link } from "react-router-dom";
import { Form,Button,Row,Col } from 'react-bootstrap';
const Edit_details = () => {
    return (
        <div>

            
            
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        User
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="User" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Phone No
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Phone" />
                    </Col>
                </Form.Group>
                
                

                <Form.Group as={Row} className="mb-3">
                   
                    <Col sm={{ span: 10, offset: 2 }} >
                    <Link style={{ textDecoration: 'none' }} to='/'>  <Button type="submit" style={{margin:'6px'}}>Okay</Button></Link>
                        <Link style={{ textDecoration: 'none' }} to='/'>    <Button type="button" >Cancel</Button></Link>
                    </Col>
                
                </Form.Group>
            </Form>
        </div>
    )
}

export default Edit_details

// Instead of Redirect in v6 Navigate is used
//git push -u origin master  to handleerror: src refspec main does not match any error: in git