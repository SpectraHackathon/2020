import React, { Component } from "react";
import './App.css';
import { Link } from 'react-router-dom';

import fullScheduleData from "./fullScheduleData";
import DetailedSchedule from "./DetailedSchedule";
import ScrollTop from "./ScrollTop"

class FullSchedule extends Component {

  constructor() {
        super()
        this.state = {
            data:fullScheduleData
        }

    }

  render(){

    const schedData = this.state.data.map(item => <DetailedSchedule key={item.id} item={item}/>)


    return (

      <div>

      <div className="header">

        <Link to="/" className='text-link'><p>Back to home</p></Link>
        <h1>Spectra 4.0 Talks & Workshops</h1>
      </div>

        <div className="section-content">

        <h1 className="date">Day One: August 8, 2020 (PST Times)</h1>

        {schedData}

        </div>

        <ScrollTop />

      </div>

    );
  }
}

export default FullSchedule;
