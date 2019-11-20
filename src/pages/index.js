import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/stock_woman.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: this.state.stickyNav }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: this.state.stickyNav }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="AlarmSync - POC" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="overview" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>What makes us different</h2>
                </header>
                <p>
                You built your business around securing your community. We have built ours around simplifying how you do it.
                </p>
                <p>Our flexible and quick wireless installation solution opens the door for you to reach renters and other short term residents that 
                  might not have considered security installation but want safety and home automation.</p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="integratedSmartSolutionSection" className="main special">
            <header className="major">
              <h2>Integrated Smart Home & Security Solution</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Comfort and Control</h3>
                <p>
                Power-up connected smart devices that make sense.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Smart Like it Should Be</h3>
                <p>
                Provide your customers with an intelligent, mobile-first experience on a complete end-to-end solution they can trust.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Expand Your Market</h3>
                <p>
                New business opportunities with our IP-first, blazing-fast network that includes optional LTE and 2-Way voice.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="features" className="main special">
            <header className="major">
              <h2>Features</h2>
              <p>
              Enhance your customers existing Alarm System with industry-leading universal wireless sensors. 
              </p>
            </header>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="getStarted" className="main special">
            <header className="major">
              <h2>Find the Perfect System</h2>
              <p>
              Total solutions that deliver the experience your customers want and the simplification your bottom line deserves.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
