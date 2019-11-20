import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import QuizNav from '../components/Quiz-Nav'

class Generic extends React.Component {
  render() {
    return (
      <Layout>
         <QuizNav sticky={false}/>
        <div id="main">
          <section id="content" className="main special">
          <header className="major">
                  <h2>What are you protecting?</h2>
          </header>
          <form>
          <input type="radio" name="firstName" value="House" />
      
          <input type="radio" name="lastName" value="Apartment" />

        <button type="button">Next</button>
      </form>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
