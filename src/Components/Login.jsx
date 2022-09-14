import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LoginImage from './LoginImage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

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
        const getUsers = localStorage.getItem("user");

        const { email, password } = input;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 8) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {
            if (getUsers && getUsers.length) {
                const userData = JSON.parse(getUsers);
                const userLogin = userData.filter((curr) => {
                    return curr.email === email && curr.password === password
                });
                if (userLogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");
                    localStorage.setItem("user_login", JSON.stringify(userLogin))
                }
            }
        }
    }

    return (
        <>
            <div className="container mt-3">
                <section className="d-flex justify-content-between">
                    <LoginImage />
                    <div className="right-section mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className="text-center" lg={12}>Login</h3>
                        <Form >
                            <Form.Group className="mb-3" lg={6} controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" lg={6} controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button className="w-100" lg={6} onClick={saveData} style={{ background: "#6c63ff" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className="mt-3">Already Have an Account <span><NavLink to="/">Register</NavLink></span> </p>
                    </div>
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login