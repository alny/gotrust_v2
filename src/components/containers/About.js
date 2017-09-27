import React, { Component } from 'react';
import  { Link } from 'react-router';
import { Navbar } from '../layouts/index';


class About extends Component {
  render() {
    return (
      <div>
        <div className="bodyGradient">
          <Link to={'/'}>
            <img
              style={{ width: '6%', left: '46%' }}
              className="logo-img" src="images/lion_logo2.png" alt=""
            />
          </Link>

          <div className="main" style={{ paddingTop: '160px' }}>
            <div className="container" style={{ width: '1300px' }}>

              <Link to={'/'}>
                <button className="btn btn-primary fixed-verify">Tilbage</button>
              </Link>

              <Navbar />


              <div className="row logoPanel">

                <p style={{ marginBottom: '10px', marginLeft: '-4%' }}>Om GoTrust</p>
                  <h2 className="page-header" />

              </div>
              <div className="container">
              <img src="https://scontent.fzgh1-1.fna.fbcdn.net/v/t1.0-9/10421623_10205103972056347_5988214202153858099_n.jpg?oh=a19ef1345d1fd70d4534b7f4a28b38db&oe=59B01124" alt="" className="profilePicture" />
              <h3>Hvem står bag GoTrust?</h3>
              <p>
              Alexander Nygaard, gamer, moviemaker og webudvikler. Jeg har udviklet GoTrust i håbet om at løse problemet med falske identiteter/profiler, der de seneste par år er eksploderet, især indenfor skin trading.
              Det er alt for nemt at oprette/købe sig til diverse accounts, og udgive sig for at være en anden person. For det utrænede øje og nye tradere kan det være rigtig svært at spotte om den enkeltes facebook eller steam profil er the real deal eller endnu en af de mange scammere.
              Derfor har jeg udviklet en platform, hvor du "verificerer" personen du handler med, ved at indsætte deres facebook eller steam link i søgefeltet, og dermed vil vores system tjekke og give dig besked på om du handler med den rigtige profil.
              </p>
              <hr/>
              <h3>Hvad handler GoTrust om?</h3>
              <p>
                GoTrust handler om at give tryghed til alle nye som gamle tradere, der hver dag handler med skins og som skal bruge lang tid på at tjekke om de nu kan stole på den de handler med.
                Det problem har vi nu løst, og du kan derfor med et enkelt klik, nemt og hurtigt tjekke hver eneste person du handler med.
              </p>
              <hr/>
              <h3>Hvorfor bygge en side som denne?</h3>
              <p>
              Vi mener ikke at en kæmpe database med navne og profiler på tidligere scammere, er løsningen på dette kæmpe problem med falske profiler.
              Det er simpelthen for nemt bare at skifte sit navn eller oprette/købe nye profiler og så scamme videre.
              Vi mener derimod at løsningen er et samarbejde med alle de personer som rent faktisk har en ren tavle og samvittighed som folk kender fra tidligere handler og trygt kan stole på.
              Samtidig er et depositum et godt udgangspunkt for trygheden af handlen.
              Præcis som når du lejer en bil, en lejlighed eller en båd, så er det en rigtig god tryghed for begge parter at vide at personen ikke bare kan stjæle/ødelægge dine ting og stikke afsted med det uden nogen konsekvenser.
              </p>
              </div>

          </div>
        </div>

      </div>
    </div>

    )
  }
}

export default About
