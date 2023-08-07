import React from "react";
import { Link } from "react-router-dom";

function ItemCourse({title,star,dec,oldsalary,newsalary,image,best}) {
   
  return (
    <div className="service ">
        {
            best&& <h5>{best}</h5>
        }
      <a href="CourseDetails.html">
        <img
          src={`./images/service/service${image}.webp`}
          className="imgService"
          alt="service"
        />
      </a>
      <div className="aboutservice">
        <a href="CourseDetails.html">
          <div className="head">
            <h3>{title}</h3>
            <div className="Star">
              <img src="/images/star.svg" alt="star" />
              <p>{star}</p>
            </div>
          </div>
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
        </a>
        <Link to="/checkOut" className="btn_page2">
          Enroll Now
        </Link>
      </div>
    </div>
  );
}

export default ItemCourse;
