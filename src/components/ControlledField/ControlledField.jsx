import React, { useState } from 'react';

const ControlledField = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('')
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(password.length < 6 ||  password.length > 10){
            alert('password must be at least 6 to 10 characters')
        } else {
            alert('form submited')
            console.log('submited')
        }
        console.log(name, email, password)
    }
 
    const handlePasswordOnChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
               
        if(password.length < 5){
            setError('password must be at least 6 characters')
        } else {
            setError('')
        }
    }
    const handleEmailOnChange = e => {
        setEmail(e.target.value)
    }
    const handleNameOnChage = e => {
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" name='name' placeholder='Name' required onChange={handleNameOnChage} defaultValue={name}/>
                <br />

                <input type="email" name="email" placeholder='Email' required onChange={handleEmailOnChange} defaultValue={email}/>
                <br />

                <input type="password" name="password" defaultValue={password} onChange={handlePasswordOnChange} placeholder='password' required/>
                <br />

                <input type="submit" value="submit" />
                
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>

        </div>
    );
};

export default ControlledField;