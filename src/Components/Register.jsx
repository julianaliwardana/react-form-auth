import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import RegisterImg from './RegisterImg'

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [data,setData] = useState([]);

    const getdata = (e) => {
        const { value, name } = e.target;

        setInput(() => {
            return {
                ...input,
                [name]: value
            }
        })

    }

    return (
        <>
            <Container className="mt-3">
                <section className='d-flex justify-content-between'>
                    <RegisterImg />
                    <div className="right-section mt-3 p-3 w-100">
                        <h3 className='text-center col-lg-6'>Register</h3>
                        <Form>
                            <Form.Group className="mb-3" lg={6} controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" lg={6} controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" lg={6} controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button className="w-100" lg={6} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">Login</NavLink></span> </p>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Register