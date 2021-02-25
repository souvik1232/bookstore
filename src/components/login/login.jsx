import './login.scss'
import Snackbar from "@material-ui/core/Snackbar";

import React from 'react'
import Button from 'react-bootstrap/Button';
import BOOKSERVICE from '../../services/bookstoreservice';
const bookservice = new BOOKSERVICE()


export default function Login() {
    const [toggleState, setToggleState] = React.useState(1);
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [snackbaropen, setSnackbaropen] = React.useState(false);
    const [snackbarmsg, setSnackbarmsg] = React.useState('');

    const snackbarClose = () => {
        setSnackbaropen(false)
    }



    const toggle = (index) => {
        console.log(index);
        setToggleState(index);
    }
    const show = () => {
        let x = document.getElementById("pass");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    const showpass = () => {
        let x = document.getElementById("pass1");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    const handleSignup = () => {
        let data = {
            "fullName": fullName,
            "email": email,
            "password": password,
            "phone": phone
        }
        bookservice.addUser(data).then((res) => {
            console.log(res);
            setSnackbaropen(true);
            setSnackbarmsg('Signed Up');
        }).catch((err) => {
            console.log("Error", err);
            setSnackbaropen(true);
            setSnackbarmsg('error');
        })
        console.log(data);
    }
    const handleLogin = () => {
        let data = {
            "email": email,
            "password": password
        }
        bookservice.login(data).then((res) => {
            console.log(res);
            setSnackbaropen(true);
            setSnackbarmsg('Logged In');

        }).catch((err) => {
            console.log("Error", err);
            setSnackbaropen(true);
            setSnackbarmsg('Error');
        })
    }

    return (
        <div className='container'>
            <div className='img-holder'>
                <img />
                <span className='text'>ONLINE BOOK SHOPPING</span>
            </div>
            <div className='login'>
                <br />
                <button className='lgn' onClick={() => toggle(1)}>LOGIN</button>
                <button className='sgn' onClick={() => toggle(2)}>SIGN UP</button><br /><br />
                <div className={toggleState === 1 ? "active-content" : "content"}>
                    <span className='email-label'>Email Id</span><br />
                    <input type="text" /><br />
                    <br />
                    <span className='password-label'>Password</span>
                    <img className='eye' onClick={show} />
                    <br />
                    <input id='pass' type="password" /><br />
                    <Button className='btn' onClick={handleLogin} >Login</Button>
                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>
                    <span className='fname-label'>Full Name</span><br />
                    <input type="text" onChange={e => setFullName(e.target.value)} /><br />

                    <span className='email-label'>Email Id</span><br />
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                    <br />
                    <span className='password-label'>Password</span>
                    <img className='eye' onClick={showpass} />
                    <br />
                    <input id='pass1' type="password" onChange={e => setPassword(e.target.value)} /><br />

                    <span className='mobile-label'>Mobile Number</span><br />
                    <input type="text" onChange={e => setPhone(e.target.value)} /><br />
                    <Button className='btn' onClick={handleSignup}>Signup</Button>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={snackbaropen}
                    autoHideDuration={3000}
                    onClose={snackbarClose}
                    message={<span id="message-id">{snackbarmsg}</span>}
                // action
                />


            </div>

        </div>
    )
}
