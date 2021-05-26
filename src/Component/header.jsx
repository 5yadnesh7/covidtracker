import React from 'react';
import '../App.css';
import mylogo from "./mylogo.png";

function header(props) {
    return (
        <div>
            <div className="header">
                {/* <a href="#default" class="logo">CompanyLogo</a> */}
                <span className="logo"><img src={mylogo} alt="mylogo" className="logo" width="50" height="50" />Covid Tracker</span>
                <div className="header-right">
                    <a className={props.home} href="/home">Home</a>
                    <a className={props.vacine} href="/vaccinate">Vaccinated</a>
                    <a className={props.india} href="/india">Cases in India</a>
                    <a className={props.world} href="/World">Cases in World</a>
                    <a className={props.api} href="/Api">Api</a>
                    <a className={props.about} href="/about">About</a>
                </div>
            </div>
        </div>
    );
}

export default header;