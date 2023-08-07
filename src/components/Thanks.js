import React from 'react'
import { Link } from 'react-router-dom'

function Thanks({title,dec,link}) {
  return (
    <>
    <div class="successfull container">
 <img src="/images/successfull.webp" alt="successfull"/>
 <h2>{title}</h2>
 <p>{dec}</p>
 {
     link&&<Link to={link} class="btn_page2" >My Courses</Link>
 }
 
   </div>
    </>
  )
}

export default Thanks