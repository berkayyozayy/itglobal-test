import React, { useState } from 'react';

import './UserForm.css';

const initFormData = {
    name: "",
    username: "",
    email: "",
}

const UserForm = ({ addNewEntry }) => {
    const [formData, setFormData] = useState(initFormData);
    const [isSubmitted, setIsSubmitted] = useState(false)

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const onSubmit = (event) => {
        event.preventDefault()
        setIsSubmitted(true)
        addNewEntry(formData)
        setFormData(initFormData)
    }

    const { name, username, email } = formData;

    return (
        <div className='form'>
            <h3 className='form-title'>User Detail Form</h3>
            {isSubmitted}
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        value={name}
                        onChange={e => updateFormData(e)}
                        placeholder="Name"
                        type="text"
                        name="name"
                        className='form-input'
                        required
                    />
                </div>
                <div>
                    <input
                        value={username}
                        onChange={e => updateFormData(e)}
                        placeholder="Username"
                        type="text"
                        name="username"
                        className='form-input'
                        required
                    />
                </div>
                <div>
                    <input
                        value={email}
                        onChange={e => updateFormData(e)}
                        placeholder="Email"
                        type="text"
                        name="email"
                        className='form-input'
                    />
                </div>
                <div>
                    <input
                        type='submit'
                        value='Save'
                        className='submit-btn'
                    />
                </div>
            </form>
        </div>
    );
};

export default UserForm;
