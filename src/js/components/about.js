/* File Name: about.js                                              *
 * Description: Error message that would stop the user              */

import React, { Component, StartupActions } from 'react'
// import { connect } from 'react-redux'


class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  // The question template
  render(props) {    
    return (
      <div className = 'aboutComponent'>
        <div>
          <img src={require("../../images/Executive.png")} height="600px"/>
        </div>

        <p>
          Jabooda Homes Inc is based in Mercer Island, WA and holds JABOOHI853D7 (Construction Contractor, General) licenses according to the Washington license board. 
          We have over 10 years of experience with construction and development, and make construction processes simple by maintaining friendly client relationships. 
          Our homes are built in modern, contemporary, traditional and custom styles; many with Green Four Star certifications included. We are members of the Master 
          Builders Association, with one objective in mind: to fulfill and satisfy everyone's needs inside their home. Our projects include both custom and spec 
          residential homes; both multi-family and single-family homes. We take proud responsibility for all of our work.
        </p>
      </div>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
// Mapping dispatch actions to the props
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  startup: () => dispatch(StartupActions.startup())
})

// Maps the state in to props (for displaying on the front end)
const mapStateToProps = (state) => ({
})

// export default connect(mapStateToProps, mapDispatchToProps)(Error)
export default About