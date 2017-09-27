import React, { Component } from 'react'
import  { Link } from 'react-router'
import { Navbar } from '../layouts/index'



class Deposit extends Component {
  render(){
    return(
      <div>
        <div className="bodyGradient">
          <Link to={'/'}><img style={{width: '6%', left: '46%'}} className="logo-img" src="images/lion_logo2.png" alt=""/></Link>

          <div className="main" style={{paddingTop: '160px'}}>
            <div className="container" style={{width: '1300px'}}>
              <Link to={'/'}><button className="btn btn-primary fixed-verify">Tilbage</button></Link>

              <Navbar/>


              <div className="row logoPanel">

                <p style={{marginBottom: '10px'}}>Her kan du altid holde øje med dit depositum - Send dit depositum til en af følgende BOTS</p>
                  <h2 className="page-header"></h2>

              </div>
              <div className="row">



        <div className="row pricing">
					<div style={{marginLeft: '25%'}} className="col-md-3">
						<div className="well">
							<h3 style={{color: '#fff'}}><b>BOT 1</b></h3>
							<hr/>
							<p style={{color: '#333'}}>Antal Skins: <b>54</b></p>
							<hr/>
							<p style={{color: '#333'}}>Total Depositum: <b>2390.00 kr</b></p>
							<hr/>
							<p style={{color: '#333'}}><b>Stay True</b></p>
							<hr/>
							<a href="#" target="_" style={{fontWeight: '300', padding: '5px', width: '100%', marginLeft: '9px'}} className="btn btn-steam"><i style={{marginLeft: '-15px', marginRight: '6px'}} className="fa fa-steam fa-fw"></i> Steam TRADE URL</a>
						</div>
					</div>
					<div className="col-md-3">
						<div className="well">
							<h3 style={{color: '#fff'}}><b>BOT 2</b></h3>
              <hr/>
							<p style={{color: '#333'}}>Antal Skins: <b>54</b></p>
							<hr/>
							<p style={{color: '#333'}}>Total Depositum: <b>2390.00 kr</b></p>
							<hr/>
							<p style={{color: '#333'}}><b>Stay True</b></p>
							<hr/>
              <a href="#" target="_" style={{fontWeight: '300', padding: '5px', width: '100%', marginLeft: '9px'}} className="btn btn-steam"><i style={{marginLeft: '-15px', marginRight: '6px'}} className="fa fa-steam fa-fw"></i> Steam TRADE URL</a>
						</div>
					</div>
        </div>


          </div>

          </div>
        </div>

      </div>
    </div>

    )
  }
}

export default Deposit
