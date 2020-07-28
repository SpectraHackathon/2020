import React from "react";
import { Link } from 'react-router-dom';


export default function WhatsTheSchedule({ title, dayOne, dayTwo, id }) {


  const otherStyle = {
    color: "#F3F0EB",
    textAlign: "center",
  }

  return (

      <div className="section-content" id={id}>

          <h1>{title}</h1>
          <Link to="/FullSchedule" className='text-link2'>
                <p>(Click Here for Full Schedule)</p>
                </Link>

          <div className="faq-entry">
            <div className="faq-row">
              <div className="col-lg">
                <h2 className="box" style={otherStyle}>Day 1 - 8/8/20</h2>
                {dayOne}
              </div>
              <div className="col-lg">
                <h2 className="box" style={otherStyle}>Day 2 - 8/9/20</h2>
                {dayTwo}
              </div>
            </div>
          </div>
      </div>

  );
}
