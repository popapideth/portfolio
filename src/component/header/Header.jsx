import React from 'react';
import './Header.css'; 
import ProfileImg from '../../assets/profile.jpg'


const Header = () => {
    return (
        <header className="header">
            <img src={ProfileImg} className='profile_img'></img>
            <div className="header_title">
                <h1 className='title'>Apideth Tupairor</h1>
                <h2 className='subtitle'>Web Developer</h2>
            </div>
            
        </header>
    );
};

export default Header;
