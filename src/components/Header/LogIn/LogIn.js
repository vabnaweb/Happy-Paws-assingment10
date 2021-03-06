import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Form, Button, Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const { user, error,SignInUsingGoogle , gitHubSignIn, handleRegistration, registerNewAccount, loginAccount, handleName, setUserName, handleEmail, handlePassword, toggleHandle, verifyMail, resetPassword, logOut, isLogin } = useAuth();
    const history = useHistory()
    const location = useLocation()
    const redirectUri = location.state?.from || "/home"

    const handleGoogleSignIn = () => {
      SignInUsingGoogle()
            .then(result => {
                history.push(redirectUri)
            })
    }
   

    return (
        <div>
            <h1 className="text-center mb-5">Please {isLogin ? "Login" : "Register"}</h1>
            <Container>
                <div className="w-50 d-block mx-auto">
                    <Form onSubmit={handleRegistration}>
                        {
                            !isLogin &&
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onBlur={handleName} type="text" placeholder="Enter name" required />
                                
                            </Form.Group>
                        }


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                            
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={toggleHandle} type="checkbox" label="All ready registered?" />
                        </Form.Group>
                        <p className="text-danger">{error}</p>
                        <Button variant="primary" type="submit">
                            {isLogin ? "Log in" : "Register"}
                        </Button>
                        {
                            isLogin &&

                            <Button onClick={resetPassword} variant="danger" type="submit">
                                Forgate Password?

                            </Button>
                        }
                    </Form>
                </div>
                <div className="w-50 d-block mx-auto"> 
                <br />
                <h4>---------- or sign in with ----------</h4><br />

                    <Button onClick={handleGoogleSignIn} className="me-4" title="Google sign in"> <i className="fab fa-google"></i> Google Sign in</Button>
                   
                </div>
            </Container>





        </div>
    )
};

export default Login;