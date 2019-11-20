import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['overview', 'integratedSmartSolutionSection', 'features', 'getStarted'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="overview">
                    <a href="#">Overview</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="integratedSmartSolutionSection">
                    <a href="#">Integrated Security Solution</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="features">
                    <a href="#">Features</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="getStarted">
                    <a href="#">Get Started</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
