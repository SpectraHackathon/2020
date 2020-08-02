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

  var yesLine;
  if(props.item.id != 10){
    yesLine = <hr class="line"></hr>
  }

  var yesBio;
  if(props.item.bio){
    yesBio = <p style={{fontSize: "16px"}}>{props.item.bio}</p>
  }

  var yesPrereq;
  if(props.item.prereq){
    yesPrereq = <p style={{fontSize: "16px"}}><b>Prerequisites: </b> {props.item.prereq}</p>
  }

  var yesDesc;
  if(props.item.description){
    yesDesc = <p style={{fontSize: "16px"}}><b>Description: </b> {props.item.description}</p>
  }

  var dayTwo;
  if(props.item.id == 12){
    dayTwo = <h1 className="date" style={{marginTop: "70px"}}>Day Two: August 9, 2020 (PST Times)</h1>
  }

  var panel;
  if(props.item.id == 10){
    panel = <div>
    <h2>{props.item.speaker2}</h2>
    <img class="circle-speaker" src={props.item.img2} width = "180" height = "180" style={{float:"right"}}/>
    <p style={{fontSize: "16px"}}>{props.item.bio2}</p>
    <a href={props.item.url4} target="_blank">
                  <img src={props.item.socials2} width = "20" height = "20"/></a>

    <h2>{props.item.speaker3}</h2>
    <img class="circle-speaker" src={props.item.img3} width = "180" height = "180"/>
    <p style={{fontSize: "16px"}}>{props.item.bio3}</p>
    <a href={props.item.url5} target="_blank">
    <img src={props.item.socials3} width = "20" height = "20"/></a>

    <h2>{props.item.speaker4}</h2>
    <img class="circle-speaker" src={props.item.img4} width = "180" height = "180" style={{float:"right"}}/>
    <p style={{fontSize: "16px"}}>{props.item.bio4}</p>
    <a href={props.item.url6} target="_blank">
    <img src={props.item.socials4} width = "20" height = "20"/></a>

    </div>
  }



  return (

    <div class="DetailedSchedule">

        {dayTwo}

        <div className="time">

            <h3>{props.item.time}</h3>
            <h3>Location: {props.item.location}</h3>

        </div>

        <h1 style={{color: "#F16F6F"}}>{props.item.title}</h1>

        {panel}

        <h2>{props.item.speaker}</h2>
        <img class="circle-speaker" src={props.item.img} width = "180" height = "180"/>
        {yesBio}

        {yesPrereq}
        {yesDesc}
        {yesLinkedin}
        {yesInsta}
        {yesTwitter}

        {yesLine}



    </div>

  );
}
