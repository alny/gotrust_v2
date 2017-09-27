import React, { Component } from 'react'
import actions from '../../actions'
import  { Link } from 'react-router'
import { connect } from 'react-redux'
import { TextUtils } from '../../utils'
import { Navbar } from '../layouts/index'


class Home extends Component {
  constructor(){
    super()
    this.state = {
      facebook: {
        url: ''
      },
      badDisplay: 'none',
      goodDisplay: 'none',
      name: '',
      steamid: '',
      facebookid: '',
      deposit: '',
      isDisabled: false
    }
  }
  disabled(event){
    event.preventDefault()
    this.setState({
      isDisabled: false,
      badDisplay: 'none',
      goodDisplay: 'none'
    })
  }

  updateURL(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.facebook.url)
    updated[event.target.id] = event.target.value
    this.setState({
      facebook: updated
    })
  }

  submitURL(event){
      if(this.state.facebook.url.length == 0){
        toastr.warning('Please insert a Link')
        return
      }
      if(this.state.facebook.url.length <= 20){
        toastr.warning('Please insert a valid link')
        return
      }

      if(this.state.facebook.url.includes("steamcommunity.com/") == true){
        event.preventDefault()
        console.log(JSON.stringify(this.state.facebook.url))
        var uId = TextUtils.getFacebookID(this.state.facebook.url)
        this.props.checkSteam(uId)
        .then(response => {

          if(response.result != null){
            this.setState({
              goodDisplay: 'block',
              badDisplay: 'none',
              isDisabled: true,
              name: (response.result.name == null) ? null : response.result.name
            })
          } else {
            this.setState({
              badDisplay: 'block',
              goodDisplay: 'none',
              isDisabled: true
            })
          }
          console.log(JSON.stringify(response))
        })
        console.log(JSON.stringify(uId))
      }

      if(this.state.facebook.url.includes("facebook.com/") == true){
        event.preventDefault()
        console.log(JSON.stringify(this.state.facebook.url))
        var uId = TextUtils.getFacebookID(this.state.facebook.url)
        this.props.checkFacebook(uId)
        .then(response => {

          if(response.result != null){
            this.setState({
              goodDisplay: 'block',
              badDisplay: 'none',
              isDisabled: true,
              name: (response.result.name == null) ? null : response.result.name,
              steamid: (response.result.steamid == null) ? null : response.result.steamid,
              facebookid: (response.result.facebookid == null) ? null : response.result.facebookid,
              deposit: (response.result.deposit == null) ? null : response.result.deposit

            })
          } else {
            this.setState({
              badDisplay: 'block',
              goodDisplay: 'none',
              isDisabled: true
            })
          }
          console.log(JSON.stringify(response))
        })
        console.log(JSON.stringify(uId))
      }

  }

  componentDidMount(){
    this.props.getTopMiddlemen()
  }

  render(){
    return(
    <div>
      <div className="bodyGradient">

        <Link to={'/'}><img className="logo-img" src="images/logo.png" alt=""/></Link>

        <div className="main">
          <div className="container" style={{marginTop: '120px'}}>
          <Link to={'/verify'}><button className="btn btn-primary fixed-verify">Bliv Verificeret</button></Link>
            <Link to={'/list'}><button className="btn btn-primary fixed-anmeld">MM Liste</button></Link>

            <Navbar/>

            <div className="row logoPanel">
              <div className="main-logo">
                <span className="logo">GoTrust - Stay True</span>
              </div>
              <p>Tjek om du handler med en troværdig person eller MM.</p>
            </div>
          </div>
        </div>
        <div id="searchContainer" className="secondaryHeader">
          <div className="container">

              <div className="input-group">
                <input onChange={this.updateURL.bind(this)} autoCapitalize="off" autoCorrect="off" className="form-control" id="url" maxLength="255" name="Account" placeholder="Indsæt Facebook eller Steam Link..." spellCheck="false" type="email"/>
                <span className="input-group-btn">
              <button style={{backgroundColor: '#514e46'}} onClick={this.submitURL.bind(this)} className="btn btn-primary btn-lg" disabled={this.state.isDisabled} type="submit" id="searchPwnage">Verify</button>
              {(this.state.isDisabled == false) ? null :
                <button onClick={this.disabled.bind(this)} style={{marginLeft: '5px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', fontSize: '18px'}} className="btn btn-primary btn-lg" type="submit" id="searchPwnage">Ny søgning</button>
              }

                </span>
              </div>


          </div>
        </div>
      </div>


      <div id="invalidAccount" className="pwnedSearchResult pwnedRow panel-collapse" style={{display: this.state.badDisplay}}>
        <div className="container">
          <div className="row pwnResultBanner">
          <div className="pwnTitle">
            <h2>
              Ikke verficeret — Brug din sunde fornuft og vær kritisk når du handler med denne bruger!
              </h2>
            <p id="pwnCount">Hvis handlen er over 500.00 kr, vil vi råde dig til at bruge en af de mange MM's fra listen.</p>
          </div>

          <p className="socialLinks">
          <a className="socialLink" href="#"><i className="fa fa-facebook-square fa-3x"></i></a>
          <a className="socialLink" href="#"><i className="fa fa-twitter-square fa-3x"></i></a>
          </p>
          </div>
        </div>
      </div>
      <div id="noPwnage" className="pwnedSearchResult panel-collapse" style={{display: this.state.goodDisplay}}>
        <div className="container">
          <div className="row pwnResultBanner">
            <div className="pwnTitle">
              <h2>Gode Nyheder &mdash; {this.state.name} er verficeret!</h2>
              <p>
                Du kan derfor trygt handle med personen.
              </p>
              <p className="actionsBar text-center">
              <a href="#" className="pwnResultLink notifyOfPwning"><i className="fa fa-check-circle" aria-hidden="true"></i>Depositum:</a>
              <h3>{this.state.deposit}.00 kr</h3>
              </p>

            </div>
            <p style={{fontWeight: '300'}}>Dette er personen's sociale profiler:</p>
            <a href={'https://www.facebook.com/'+ this.state.facebookid} target="_" style={{fontWeight: '300', padding: '5px'}} className="btn btn-facebook"><i className="fa fa-facebook fa-fw"></i> Facebook</a>
            <a href={'https://steamcommunity.com/id/'+ this.state.steamid} target="_" style={{fontWeight: '300', padding: '5px'}} className="btn btn-steam"><i style={{marginLeft: '-15px', marginRight: '6px'}} className="fa fa-steam fa-fw"></i> Steam</a>
            <p className="actionsBar text-center">

            </p>
            <p className="socialLinks">
              <a className="socialLink" href="#"><i className="fa fa-facebook-square fa-3x"></i></a>
              <a className="socialLink" href="#"><i className="fa fa-twitter-square fa-3x"></i></a>
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row pwnedSummaryRow">
          <div className="col-sm-3"><span className="pwnSummaryCount">46</span><br/>Verficerede MM's</div>
          <div className="col-sm-3"><span className="pwnSummaryCount">214</span><br/>Verficerede brugere</div>
          <div className="col-sm-3"><span className="pwnSummaryCount">334</span><br/>Antal handler</div>
          <div className="col-sm-3"><span className="pwnSummaryCount">65</span><br/>Scammere</div>
        </div>
        <hr className="hr-fix"/>
        <div className="row">
          <h3>Top MM's:</h3>
          <div className="row pwnedCompanyList">
            {(this.props.topmiddlemen == null) ? null :
              this.props.topmiddlemen.map((topMM, i) => {
                return (<Link to={'/list'} key={i}>
                  <span className="pwnLogoContainer"><img className="pwnLogo tiny" src={topMM.image} alt=""/></span>
                  <span className="pwnCount">{topMM.name}</span>
                  <span className="pwnCompany">
                    |
                  <i className="pwnCompanyName">Antal Handler: {topMM.trades}</i>
                  </span>
                </Link>)

              })
            }
            <br/>
          </div>

          <p><Link to={'/list'} className="btn btn-primary" href="#" id="viewAllBreaches">Se hele listen</Link></p>
        </div>
      </div>
    </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    middleman: state.middleman.all,
    topmiddlemen: state.verify.alltopmiddlemen
  }
}

const dispatchToProps = (dispatch) => {
  return {
    checkSteam: (id, params) => dispatch(actions.checkSteam(id, params)),
    checkFacebook: (id, params) => dispatch(actions.checkFacebook(id, params)),
    getTopMiddlemen: (params) => dispatch(actions.getTopMiddlemen(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Home)
