import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const QuizNav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['overview', 'integratedSmartSolutionSection', 'features', 'getStarted'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="overview">
                    <a href="#">Building Type</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="integratedSmartSolutionSection">
                    <a href="#">Number of Doors</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="features">
                    <a href="#">Pets</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="getStarted">
                    <a href="#">Key Rings</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="getStarted">
                    <a href="#">Custom Solution</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default QuizNav