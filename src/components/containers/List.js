import React, { Component } from 'react'
import actions from '../../actions'
import  { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { TextUtils } from '../../utils'
import { Navbar } from '../layouts/index'


class List extends Component {
  constructor(){
    super()
    this.state = {

    }
  }


  componentDidMount(){
  this.props.getMiddlemen()
  }

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

                <p style={{marginBottom: '10px'}}>Her finder du alle verificerede MM's.</p>
              </div>
              <div className="row">

                    <div style={{marginTop: '-55px'}} className="col-lg-12">

                        <h2 className="page-header"></h2>

                    </div>
                    {(this.props.verify == null) ? null :
                      this.props.verify.map((oneFrag, i) => {
                        return (
                      <div key={i} style={{width: '25%', marginBottom: '40px'}} className="col-lg-2 col-sm-3 text-center">
                          <a href={'https://www.facebook.com/'+ oneFrag.facebookid} target="_"><img style={{marginBottom: '10px'}} className="img-circle img-responsive img-center" src={oneFrag.image} alt=""/></a>
                          <h3 style={{fontSize: '14px', fontWeight: '300'}}>{oneFrag.name}</h3>
                          <h3 style={{fontSize: '14px', fontWeight: '300', textTransform: 'capitalize'}}><b>Stilling:</b> {oneFrag.role}</h3>

                          <h3 style={{fontSize: '14px', fontWeight: '300'}}><b>Antal handler:</b> {oneFrag.trades}</h3>
                          <h3 style={{fontSize: '14px', fontWeight: '300'}}><b>Største handel:</b> {oneFrag.toptrade}.00 kr</h3>
                          <h3 style={{fontSize: '14px', fontWeight: '300'}}><b>Depositum:</b> {oneFrag.deposit}.00 kr</h3>

                          <a href={'https://www.facebook.com/'+ oneFrag.facebookid} target="_" className="btn btn-facebook"><i className="fa fa-facebook fa-fw"></i> Facebook</a>
                          <a href={'https://steamcommunity.com/id/'+ oneFrag.steamid} target="_" className="btn btn-steam"><i className="fa fa-steam fa-fw"></i> Steam</a>

                      </div>
                    )
                    })
                    }

                </div>


          </div>

          </div>
        </div>

      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    verify: state.verify.allprofiles
  }
}

const dispatchToProps = (dispatch) => {
  return {
    getMiddlemen: (params) => dispatch(actions.getMiddlemen(params))
  }
}

export default connect(stateToProps, dispatchToProps)(List)
