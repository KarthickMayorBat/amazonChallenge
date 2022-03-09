import React, { useState }from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        //fancy firebase login....

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }

    const register = e =>{
        e.preventDefault();
        //fancy firebase register...
        
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //successfully created a new user with email and password
                console.log(auth);
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
            <img className='login_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>
            <div className='login_container'>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login_signInButton">Sign In</button>
                </form>
                <p>
                    By signing in you agree to the AMAZON FAKE CLONE conditons of use and sale. Please see our privacy Notice, our cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className='login_registerButton' >Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;