import React, { Component,useEffect,useState} from 'react'
import './card.css'
const Card =(data)=>{

   const [datas, setData] = useState([]);


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