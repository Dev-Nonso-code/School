<<<<<<< HEAD
import React from 'react'

import { useState } from "react";
import axios from "axios";
// import { Nav } from "../Navbar component/Nav"
import './Sl.css'
import { useNavigate, Link } from "react-router-dom"
// import Back from '../common/back/Back';

const Slogin = () => {
    const [email, setemail] = useState("email");
    const [password, setpassword] = useState("password");
    const [message, setmessage] = useState("");

    const values = {
        email: email,
        password: password,
    }
    const endpoint = "http://localhost:5100/log/signin";
    let navigate = useNavigate()

    const Login = (e) => {
        e.preventDefault();
        console.log(values);
        axios
            .post(endpoint, values)
            .then((response) => {
                console.log(response.data);
                alert("Login went throung")
                alert(response.data.message);
                setmessage(response.data.message)
                if (response.data.status) {
                    localStorage.token = response.data.token
                    localStorage.firstname = response.data.firstname
                    localStorage.setItem('firstname', response.data.firstname);
                    navigate("/student/dashboard")
                }


            })
            .catch((err) => {
                console.log(err);
                // alert(values);
                alert(err);
                // alert("login faild");
                alert(message);

            }); if (message === false) {
                console.log(message);
                alert(message)
            } else {
            console.log(message);
        }

    };
    return (
        <>
        {/* <div className='bg-primary'>
            <Back />
        </div> */}
            <div id='all' className=" border border-2 
           border-primary box-shadow mt-2 text-center">
                <h2 className='text-info'>Login Here</h2>

                <div className={message === "" ? "" : "alert-alert-info"}>
                    <h3>
                        {message}
                    </h3>
                </div>

                <form method="POST" typeof="submit" >
                    <div className='form-group'>
                        <div id='input' className='mt-2'>

                            <input
                                // onBlur={formik.handleBlur}
                                onChange={(e) => setemail(e.target.value)}
                                type="text"
                                autoComplete='email'
                                name='email'
                                className="form-control w-50 m-2 m-auto"
                                placeholder="Email"
                            />
                            {/* {formik.touched.email && <small className="text-light">{formik.errors.email}</small>} */}
                        </div>

                        <div className='mt-3'>

                            <input
                                onChange={(e) => setpassword(e.target.value)}
                                type="password"
                                className="form-control w-50 m-auto"
                                placeholder="Password"
                            />


                        </div>

                        <button onClick={Login} className="btn btn-primary mt-2 w-25">
                            Login
                        </button>

                        <p className='mt-5 text-warning'>Don't have account with us, Signup
                            <strong><Link className='text-danger fw-bolder fs-3' to='/student/signup'>Here</Link></strong> </p>
                    </div>
                </form>
                <h4>{message}</h4>

            </div>
        </>
    )
}

=======
import React from 'react'

import { useState } from "react";
import axios from "axios";
// import { Nav } from "../Navbar component/Nav"
import './Sl.css'
import { useNavigate, Link } from "react-router-dom"
// import Back from '../common/back/Back';

const Slogin = () => {
    const [email, setemail] = useState("email");
    const [password, setpassword] = useState("password");
    const [message, setmessage] = useState("");

    const values = {
        email: email,
        password: password,
    }
    const endpoint = "http://localhost:5100/log/signin";
    let navigate = useNavigate()

    const Login = (e) => {
        e.preventDefault();
        console.log(values);
        axios
            .post(endpoint, values)
            .then((response) => {
                console.log(response.data);
                alert("Login went throung")
                alert(response.data.message);
                setmessage(response.data.message)
                if (response.data.status) {
                    localStorage.token = response.data.token
                    localStorage.firstname = response.data.firstname
                    localStorage.setItem('firstname', response.data.firstname);
                    navigate("/student/dashboard")
                }


            })
            .catch((err) => {
                console.log(err);
                // alert(values);
                alert(err);
                // alert("login faild");
                alert(message);

            }); if (message === false) {
                console.log(message);
                alert(message)
            } else {
            console.log(message);
        }

    };
    return (
        <>
        {/* <div className='bg-primary'>
            <Back />
        </div> */}
            <div id='all' className=" border border-2 
           border-primary box-shadow mt-2 text-center">
                <h2 className='text-info'>Login Here</h2>

                <div className={message === "" ? "" : "alert-alert-info"}>
                    <h3>
                        {message}
                    </h3>
                </div>

                <form method="POST" typeof="submit" >
                    <div className='form-group'>
                        <div id='input' className='mt-2'>

                            <input
                                // onBlur={formik.handleBlur}
                                onChange={(e) => setemail(e.target.value)}
                                type="text"
                                autoComplete='email'
                                name='email'
                                className="form-control w-50 m-2 m-auto"
                                placeholder="Email"
                            />
                            {/* {formik.touched.email && <small className="text-light">{formik.errors.email}</small>} */}
                        </div>

                        <div className='mt-3'>

                            <input
                                onChange={(e) => setpassword(e.target.value)}
                                type="password"
                                className="form-control w-50 m-auto"
                                placeholder="Password"
                            />


                        </div>

                        <button onClick={Login} className="btn btn-primary mt-2 w-25">
                            Login
                        </button>

                        <p className='mt-5 text-warning'>Don't have account with us, Signup
                            <strong><Link className='text-danger fw-bolder fs-3' to='/student/signup'>Here</Link></strong> </p>
                    </div>
                </form>
                <h4>{message}</h4>

            </div>
        </>
    )
}

>>>>>>> ad1c1a62ed7c8251f12686397b006ca55a59a9c5
export default Slogin