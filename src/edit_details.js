import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import { Form,Button,Row,Col } from 'react-bootstrap';
const Edit_details = () => {
    const [redirect, setRedirect] = useState(false)
    return (
        <div>

            
            {redirect ? <Navigate to='/' /> : null}
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
                        <Button type="submit" onClick={() => setRedirect(true)} style={{margin:'6px'}}>Okay</Button>
                        <Button type="button" onClick={() => setRedirect(true)}>Cancel</Button>
                    </Col>
                
                </Form.Group>
            </Form>
        </div>
    )
}

export default Edit_details

// Instead of Redirect in v6 Navigate is used