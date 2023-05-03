import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn, forgotPassword } = useContext(AuthContext);
    const [error, setError] = useState('')
    const emailRef = useRef()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })

    }
    const handleGoogleSign = () => {
        googleSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGithubSign = () => {
        githubSignIn()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        forgotPassword(email)
            .then(() => {
                alert('Check Your email')
            })
            .catch(error => {
                setError(error.message)
            })
    }




    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-black">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <p className='text-red-600'>{error}</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" ref={emailRef} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p className="label-text-alt link link-hover"><Link to='/register'>Don't have account?  Register</Link></p>
                                    <br />

                                </label>
                                <a onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot Password?</a>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <button onClick={handleGoogleSign} className="btn btn-outline btn-primary mx-3"><FaGoogle></FaGoogle><span className='ms-3'> Sign in with Google</span></button>
                        <button onClick={handleGithubSign} className="btn btn-outline btn-primary mx-3 my-5"><FaGithub></FaGithub><span className='ms-3'> Sign in with Github</span></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;