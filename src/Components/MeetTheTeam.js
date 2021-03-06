import React from "react";
import Samar from "./teamImgs/Samar.png";
import twitter from "./icons/twitterGray.png";
import linkedIn from "./icons/linkedGray.png";

export default function MeetTheTeam({ title, subtitle, id }) {

  const teamStyle = {
    color: "#114A75",
    marginBottom: "10px"
  }

  const roleColor = {
    color: "#C0C0C0",
    marginTop: "0px",
    marginBottom: "20px"
  }

  return (

      <div className="section-content" id={id}>

          <h1>{title}</h1>

          <div className="row">
            <div className="col-lg team-member">
              <img class="circle" src={Samar} id={1}/>
                <h2 style={teamStyle}>Samar Barakat</h2>
                <p style={roleColor}>Director & Webmaster</p>
                <a href="https://twitter.com/sbarakitkat" target="_blank"><img src={twitter} width = "20" height = "20"/></a>
                <a href="https://www.linkedin.com/in/sbarakitkat/" target="_blank"><img src={linkedIn} width = "20" height = "20"/></a>
              </div>

          </div>

          <div className="row">
                {subtitle}
          </div>

      </div>

  );
}
