import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['overview', 'integratedSmartSolutionSection', 'features', 'getStarted'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="overview">
                    <a href="#">Security Cameras</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="integratedSmartSolutionSection">
                    <a href="#">Panels</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="features">
                    <a href="#">Sensors</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="getStarted">
                    <a href="#">Accessories</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
