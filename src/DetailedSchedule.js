import React from "react";

export default function DetailedSchedule(props) {

  var yesLinkedin;
  if(props.item.url1){
    yesLinkedin = <a href={props.item.url1} target="_blank">
                  <img src={props.item.socials1} width = "20" height = "20"/></a>
  }

  var yesInsta;
  if(props.item.url2){
    yesInsta = <a href={props.item.url2} target="_blank">
              <img src={props.item.socials2} width = "20" height = "20"/></a>
  }

  var yesTwitter;
  if(props.item.url3){
    yesTwitter = <a href={props.item.url3} target="_blank">
                <img src={props.item.socials3} width = "20" height = "20"/></a>
  }

  var yesPrereq;
  if(props.item.prereq){
    yesPrereq = <p style={{fontSize: "16px"}}><b>Prerequisites: </b> {props.item.prereq}</p>
  }

  var yesDesc;
  if(props.item.description){
    yesDesc = <p style={{fontSize: "16px"}}><b>Workshop Description: </b> {props.item.description}</p>
  }



  return (

    <div class="DetailedSchedule">

        <div style={{display: "flex", justifyContent: "space-between"}}>

            <h3>{props.item.time}</h3>
            <h3>Location: {props.item.location}</h3>

        </div>

        <h1 style={{color: "#F16F6F"}}>{props.item.title}</h1>
        <h2>{props.item.speaker}</h2>
        {yesLinkedin}
        {yesInsta}
        {yesTwitter}
        <p style={{fontSize: "16px"}}><b>Speaker Bio: </b>{props.item.bio}</p>
        {yesPrereq}
        {yesDesc}

        <hr class="line"></hr>


    </div>

  );
}
