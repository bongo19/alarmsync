import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Alarm Sync</h1>
        < p > Protection
        for every window, room, and door. </p> <br />
             All monitored
            24 / 7 by professionals ready to dispatch police.
    </header>
)

export default Header
