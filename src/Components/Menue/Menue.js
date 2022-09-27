import React from 'react';
import './Menue.css'
import Logo from '../../images/Logo.svg'

const Menue = () => {
    return (
        <div className='bg'>
           <img src={Logo} alt="" />
          <ul >
            <li><a href="">Home</a></li>
            <li><a href="">Burger</a></li>
            <li><a href="">Pizza</a></li>
            <li><a href="">Wages</a></li>
            <li><a href="">Stack</a></li>
            <input type="search" name="search" id=" " />
            <button >Search</button>
            
          </ul>
        </div>
    );
};

export default Menue;