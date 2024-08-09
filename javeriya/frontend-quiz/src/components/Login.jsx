
import { Link, useNavigate } from "react-router-dom";
import  { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import LoginImage from '../../Components/Images/smit.png'
import './login.css'

const Login = () => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });


let navigate = useNavigate()
 
  const [message , setMessage] = useState("");

  const handleInput = (event) => {
    setValue(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
   
      try {
        const response = await axios.post('http://localhost:4000/api/login', value);
        setMessage(response.data.message);
        Cookies.set('token', response.data.token);
        setValue({
            email:"",
            password:"",
        })
        navigate("/profile")
      
      } catch (error) {
        setMessage(error.response.data.message);
      }
    
  }
 
  return (
    <div className="loginPage d-flex justify-content-align-item-center bg-primary vh-100">
      <img src={LoginImage} alt="Login" className="loginImage" />
      <div className="addUser bg-white p-3 rounded w-25">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}  className="addUserForm" >
          <div className="inputGroup">
            <label htmlFor="email">Email:</label>
            <input
            onChange={handleInput}
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
              placeholder="Enter your Email"
            
            />
            <label htmlFor="password">Password:</label>
            <input
            onChange={handleInput}
              type="password"
              id="password"
              name="password"
              required
              autoComplete="off"
              placeholder="Enter your Password"
            />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        
        <div className="login">
          <p>Don't have an account?</p>
          <Link to="/login" className="btn btn-success">
            Sign Up
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Login;