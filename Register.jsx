import React, {useState} from "react";
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
const Register = () =>{
   const [userDetails, setUserDetails] = useState({
       email: "",
       password: "",
       conformPassword: "",
       name: "",
       contact: "",
   });
   const [errors, setErrors] = useState({});
    let history = useHistory();
   const handleChange = (e) =>{
       const { name, value } = e.target;
       setUserDetails({
           ...userDetails,
           [name]: value
       })
   };
    const validation = (name, value) =>{
        switch (name) {
            case 'name':
                if (!value) {
                    return 'Name is Required';
                } else {
                    return '';
                }
            case 'email':
                if (!value) {
                    return 'Email is required';
                } else {
                    return '';
                }
            case 'contact':
                if (!value) {
                    return 'Please fill up this fild';
                } else {
                    return '';
                }
            case 'password':
                if (!value) {
                    return 'Date is required';
                } else {
                    return '';
                }
            case 'conformPassword':
                if(userDetails.password !== userDetails.conformPassword && userDetails.conformPassword !== ""){
                    return "password Miss match";
                }
                else if (!value) {
                    return 'Reenter password';
                } else {
                    return '';
                }
            default: {
                return ''
            }
        }
    };
    const handleSubmit = async () => {
        // debugger;
        // event.preventDefault();
        let validationErrors = {};
        Object.keys(userDetails).forEach(name => {
            const error = validation(name, userDetails[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return true;
        }
        console.log("okk")
        // const [error1, setError1] = useState({});
        await axios.post('http://localhost:3001/register', userDetails)
            .then(res => {
                        debugger
                if (!res.data) {
                    return;
                }else {
                    if(res.status === 200) {
                        history.push("/login");
                    }
                    if(res.status === 404){
                            // console.log(res.data);
                        // setError1({
                        //     error1 : res.data;
                        // })
                    }
                }
            })
            .catch(error => {
                return(error.response);
            })
        // if (error1 && error1.length > 0) {
        //     validationErrors[name] = error;
        // }
    };
    return (
        <div className="container">
            <h3>Register</h3>
            <div className="form-group">
                <label>Name</label>
                <input type="text"
                       className="form-control"
                       name="name"
                       value={userDetails.name || ""}
                       placeholder="Name" onChange={handleChange}/>
                       <p className="text-danger">{errors.name}</p>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email"
                       className="form-control"
                       name="email" value={userDetails.email || ""}
                       placeholder="Enter email"
                       onChange={handleChange}/>
                        <p className="text-danger">{errors.email}</p>
            </div>
            <div className="form-group">
                <label>Mobile Number</label>
                <input type="text"
                       className="form-control"
                       name="contact" value={userDetails.contact || ""}
                       placeholder="Enter Mobile Number"
                       onChange={handleChange}/>
                       <p className="text-danger">{errors.contact}</p>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password"
                       className="form-control"
                       name="password"
                       value={userDetails.password || ""}
                       placeholder="Enter password"
                       onChange={handleChange}/>
                <p className="text-danger">{errors.password}</p>
            </div>
            <div className="form-group">
                <label>Conform Password</label>
                <input type="password"
                       className="form-control"
                       name="conformPassword"
                       value={userDetails.conformPassword || ""}
                       placeholder="Confirm password"
                       onChange={handleChange}/>
                <p className="text-danger">{errors.conformPassword}</p>
            </div>
            {/* <button type="submit" className="btn btn-dark btn-lg btn-block" to="/login" >Register</button> */}
            <button  onClick={handleSubmit} className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right">
                Already registered <Link to="/login">log in?</Link>
            </p>
        </div>
    );
};
export default Register;
