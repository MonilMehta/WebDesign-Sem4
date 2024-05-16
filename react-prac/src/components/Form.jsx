import React, { useState } from 'react';
import './styles/form.css';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('India');
    const [newsletter, setNewsletter] = useState(false);
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);

        // Validate name using regex pattern
        const nameRegex = /^[a-zA-Z]+$/;
        if (!nameRegex.test(value)) {
            setNameError('Name must contain only letters (no spaces or special characters)');
        } else {
            setNameError('');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        // Validate password using regex pattern
        const passwordRegex = /^[a-zA-Z1-9]+$/;
        if (!passwordRegex.test(value)) {
            setPasswordError('Password must contain at least 6 characters including at least one number, one lowercase letter, and one uppercase letter');
        } else {
            setPasswordError('');
        }
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleNewsletterChange = (e) => {
        setNewsletter(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Log form data to console
        console.log('Form submitted');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Gender:', gender);
        console.log('Country:', country);
        console.log('Subscribe to newsletter:', newsletter);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' value={name} onChange={handleNameChange} required />
                {nameError && <p className='error'>{nameError}</p>}

                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' value={email} onChange={handleEmailChange} required />

                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' value={password} onChange={handlePasswordChange} required />
                {passwordError && <p className='error'>{passwordError}</p>}

                <label htmlFor='gender'>Gender:</label>
                <div>
                    <input type='radio' id='male' name='gender' value='male' onChange={handleGenderChange} />
                    <label htmlFor='male'>Male</label>

                    <input type='radio' id='female' name='gender' value='female' onChange={handleGenderChange} />
                    <label htmlFor='female'>Female</label>

                </div>

                <label htmlFor='country'>Country:</label>
                <select id='country' name='country' value={country} onChange={handleCountryChange}>
                    <option value='India'>India</option>
                    <option value='USA'>USA</option>
                    <option value='UK'>UK</option>
                    <option value='Australia'>Australia</option>
                </select>

                <label htmlFor='newsletter'>
                    <input type='checkbox' id='newsletter' name='newsletter' checked={newsletter} onChange={handleNewsletterChange} />
                    Subscribe to newsletter
                </label>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;
