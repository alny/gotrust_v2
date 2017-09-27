import React, { Component } from 'react'
import  { Link } from 'react-router'


class Navbar extends Component {
  render(){
    return(
      <div className="dropdown fixed-menu">
        <button className="btn btn-primary dropdown-toggle fixed-button" type="button" data-toggle="dropdown"><i className="fa fa-bars" aria-hidden="true"></i></button>
        <ul className="dropdown-menu dropdown-menu-right">
          <li><Link to={'/about'}><i style={{marginRight: '5px'}} className="fa fa-chevron-right" aria-hidden="true"></i> Om</Link></li>
          <li><Link to={'/faq'}><i style={{marginRight: '5px'}} className="fa fa-chevron-right" aria-hidden="true"></i> FAQ</Link></li>
          <li><a href="https://www.facebook.com/" target="_blank"><i style={{marginRight: '5px'}} className="fa fa-chevron-right" aria-hidden="true"></i> Kontakt</a></li>
          <li><Link to={'/deposit'}><i style={{marginRight: '5px'}} className="fa fa-chevron-right" aria-hidden="true"></i> Depositum</Link></li>

        </ul>
      </div>
    )
  }
}

export default Navbar
