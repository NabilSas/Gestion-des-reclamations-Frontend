import React, { useEffect, useState } from 'react';
import './ProfileData.css'; // Import your CSS file
import logo from '../../assets/img/img5.jpg';



const ProfileData = () => {
    const [connectedUser, setConnectedUser] = useState('');

    const getUserNameFromLocalStorage = () => {
        const storedUserName = localStorage.getItem('user');

        if (storedUserName) {
            setConnectedUser(JSON.parse(storedUserName));
        }
    };

    useEffect(() => {
        getUserNameFromLocalStorage();
    }, []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="center-container">
            <div className="profile-form-container">
                <img src={logo} alt="Static Pic" className="static-pic" />
                <form onSubmit={handleSubmit} className="form">
                    <label>
                        Name:
                        <input type="text" name="name" value={connectedUser.username} onChange={handleChange} disabled />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input type="email" name="email" value={connectedUser.email} onChange={handleChange} disabled />
                    </label>
                    <br />
                    <label>
                        Num Tel:
                        <input type="num"  value={"+212655801021"}  disabled />
                    </label>
                    <br />
                </form>
            </div>
        </div>
    );
};

export default ProfileData;
