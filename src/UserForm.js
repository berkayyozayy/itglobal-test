import React, { useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap'

import './UserForm.css';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        street: "",
        city: ""
    });

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { name, username, street, city } = formData;

    return (
        <div className='form'>
            <h3 className='form-title'>User Detail Form</h3>
            <form>
                <input
                    value={name}
                    onChange={e => updateFormData(e)}
                    placeholder="Name"
                    type="text"
                    name="name"
                    required
                />
                <input
                    value={username}
                    onChange={e => updateFormData(e)}
                    placeholder="Username"
                    type="text"
                    name="username"
                    required
                />
                <input
                    value={street}
                    onChange={e => updateFormData(e)}
                    placeholder="Street"
                    type="text"
                    name="street"
                />
                <input
                    value={city}
                    onChange={e => updateFormData(e)}
                    placeholder="City"
                    type="text"
                    name="city"
                />
            </form>
            <ReactBootstrap.Button variant='success' type='submit'>Save</ReactBootstrap.Button>
        </div>
    );
};

export default UserForm;
