import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] =useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submited')
    }

    const handlePasswordOnChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Email' id="" required/>
                <br />
                <input type="password" name="password" defaultValue={password} onChange={handlePasswordOnChange} placeholder='password' id="" required/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlledField;