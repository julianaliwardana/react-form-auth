import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import RegisterImg from './RegisterImg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [data] = useState([]);

    const getdata = (e) => {
        const { value, name } = e.target;

        setInput(() => {
            return {
                ...input,
                [name]: value
            }
        })
    }

    const saveData = (e) => {
        e.preventDefault();

        const { name, email, password } = input;

        if (name === "") {
                toast.error('name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
                toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
                toast.error('enter a valid email address',{
                position: "top-center",
            });
        } else if (password === "") {
                toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
                toast.error('password length greater five',{
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            localStorage.setItem("user",JSON.stringify([...data,input]));
        }
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
                            <Button className="w-100" lg={6} onClick={saveData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="#">Login</NavLink></span> </p>
                    </div>
                </section>
                <ToastContainer />
            </Container>
        </>
    )
}

export default Register