import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Display from '../Display/Display';
import './Food.css'

const Food = () => {

    const[meal,setMeal] = useState([]) ;
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setMeal(data.meals)) 
       //console.log(meal)
         
    } ,[])

    const [cart , setCart] =useState([]) ;
  

    
    const click = (food) => {
        
        const newcart = [...cart , food];
        
        setCart(newcart) ;
        console.log(cart)
               
}
    

    return (
       
        <div className='Home-container' >

          <div className='food-container'> {meal.map(food=>
            <Display 
            key = {food.idMeal}
            food={food} 
            eventhand={click}
            ></Display> )} 
            </div> 
        
            <div className='Cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Food;