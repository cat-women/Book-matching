import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, signupAsync } from '../../features/services/auth';

import './style.css'
const AuthForm = ({ }) => {
     const [showPassword, setShowPassword] = useState(false);
     const [isSignUp, setIsSignUp] = useState(true);
     const [formData, setformData] = useState({})
     const dispatch = useDispatch();
     const auth = useSelector((state) => state.auth);


     const handleShowPassword = () => {
          setShowPassword(prevShowPassword => !prevShowPassword)
     }

     const handleChange = e => {
          setformData({ ...formData, [e.target.name]: e.target.value })
     }

     const handleSubmit = (e) => {
          e.preventDefault()

          if (isSignUp) {
               dispatch(signupAsync(formData));
               setIsSignUp(false)
               return
          }
          dispatch(loginAsync(formData));
          return
     };

     return (
          <div className={`container`}>
               <h1 variant='h6'>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
               <Form onSubmit={handleSubmit}>
                    {isSignUp && (
                         <div>
                              <Form.Group className='form-group'>
                                   <Form.Label className='form-label'>Name</Form.Label>
                                   <Form.Control
                                        className='form-input'
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        onChange={handleChange}
                                        autoFocus
                                        required
                                   />
                              </Form.Group>
                              <Form.Group className='form-group'>
                                   <Form.Label>Contact</Form.Label>
                                   <Form.Control
                                        className='form-input'

                                        type="text"
                                        placeholder="Enter your contact"
                                        name="contact"
                                        onChange={handleChange}
                                        required
                                   />
                              </Form.Group>
                         </div>
                    )}
                    <Form.Group className='form-group'>
                         <Form.Label>Email address</Form.Label>
                         <Form.Control
                              className='form-input'

                              type="email"
                              placeholder="Enter email"
                              name="email"
                              onChange={handleChange}
                              autoFocus
                              required
                         />
                    </Form.Group>
                    <Form.Group className='form-group' >
                         <Form.Label>Password</Form.Label>
                         <Form.Control
                              className='form-input'

                              type={showPassword ? 'text' : 'password'}
                              placeholder="Password"
                              name="password"
                              onChange={handleChange}
                              required
                         />
                    </Form.Group>
                    {isSignUp && (
                         <Form.Group cclassName='form-group'>
                              <Form.Label>Repeat password</Form.Label>
                              <Form.Control
                                   className='form-input'

                                   type="password"
                                   placeholder="Repeat password"
                                   name="confirmPassword"
                                   onChange={handleChange}
                                   required
                              />
                         </Form.Group>
                    )}
                    <Button
                         type='submit'
                         fullWidth
                         variant='contained'
                         color='primary'
                    >
                         {isSignUp ? 'Sign up' : 'Sign in'}
                    </Button>
                    <Button onClick={() => setIsSignUp(!isSignUp)}>
                         {isSignUp
                              ? 'Already have an account? Sign in'
                              : "Don't have an account? Sign up"}
                    </Button>
               </Form >
          </div >
     );
};

export default AuthForm;
