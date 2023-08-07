import React from 'react'
import { Link } from 'react-router-dom'

function ItemCourse2({title,star,dec,oldsalary,newsalary,image,info}) {
  return (
    <div className="item">
        
    <Link to="/coursesDetails" className="imageLink">
      <img
         src={`./images/service/service${image}.webp`}
        className="imgService"
        alt="service"
      />
    </Link>
    <div className="aboutservice">
      <Link to="/coursesDetails" className="aboutservice">
        <div className="head">
        <h3>{title}</h3>
          <div className="Star">
            <img src="./images/star.svg" alt="star" />
            <p>{star}</p>
          </div>
        </div>
        <h4>
        {info}
        </h4>
        <p className="dec_service">{dec}</p>
        <div className="salary">
        {!oldsalary&& <p>{newsalary}</p>}
           {
            oldsalary&& <>
            <span className="sall">{oldsalary}</span>
            <p>{newsalary}</p>
            </>
           }
        </div>
      </Link>

      <Link to="/checkOut" className="btn_page2">
          Enroll Now
        </Link>
    </div>
  </div>
  )
}

export default ItemCourse2