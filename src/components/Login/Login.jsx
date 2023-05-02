import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

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
        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p className="label-text-alt link link-hover"><Link to='/register'>Don't have account?  Register</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-black">Login</button>
                            </div>
                        </form>

                        <button onClick={googleSignIn} className="btn btn-outline btn-primary mx-3">Sign in with Google</button>
                        <button onClick={githubSignIn} className="btn btn-outline btn-primary mx-3 my-5">Sign in with Github</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;