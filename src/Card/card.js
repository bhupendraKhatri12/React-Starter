import React, { Component,useEffect,useState} from 'react'
import './card.css'
const Card =(data)=>{

   const [datas, setData] = useState([]);

   useEffect(() => {;;
      // Fetch data from an API
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data));
  
      // Clean up the effect
      return () => {
        // Perform any necessary cleanup here
      };
    }, []);

   return(
    <div className='card'>
    <h1>Name :  {data.name}</h1>
    <br/>
    <h3>Age :  {data.age}</h3>
    <br/>
    <h3>Address :  {data.address}</h3>
    <br/>

    </div>
   )

}

export default Card;