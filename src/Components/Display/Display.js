
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import './Display.css'
import Cart from '../Cart/Cart';

const Display = (props) => {
    const { idMeal, strMeal , strCategory , strArea , eventhand} = props.food ;
    //console.log(idMeal) 
   

 
    return (
        
        <div className='display'>
           <img src={props.food?.strMealThumb} alt="" />
           <h3>Name :{props.food.strMeal}</h3>
           <h3>Area : {props.food.strArea}</h3>
           <button className='btn' onClick={()=> props.eventhand(props.food.strMeal)}>Add to order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Display;