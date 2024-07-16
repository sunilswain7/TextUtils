import React, { useState } from 'react'

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
});
  const [btntxt, setMybtntxt] = useState('Enable Dark Mode')
  const toggleStyle= () => {
    if (myStyle.backgroundColor === 'white') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black' 
      })
      setMybtntxt('Enable Light Mode')
    }
    else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setMybtntxt('Enable Dark Mode')

    }
  }
  
  return (
    <div>
      
      <div className="container" style={myStyle}>
      <h2 className='terimaa my-3'>Guided Missile Destroyers</h2>
        <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              Ins Visakhapatnam
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>US$1.3 billion</strong> Anti-air warfare :-
                  4 × 8-cell VLS, for a total of 32 Barak 8 surface-to-air missiles;
                  Anti-surface warfare :-
                  2 x 8-cell VLS, for 16 BrahMos anti-ship missiles;
                  Anti-submarine warfare :-
                  4 × 533 mm (21 in) torpedo tubes
                  2 × RBU-6000 anti-submarine rocket launchers;
                  Guns :-
                  1 × OTO Melara 76 mm naval gun
                  4 x AK-630M CIWS
                  2 x OFT 12.7 mm M2 Stabilized Remote Controlled Gun
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            USS Jack H.Lucas
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>US$2.2 billion</strong> Guns:
                  DDG-51 to 80: 1 × 5-inch (lightweight gun)
                  DDG-81 onwards: 1 × 5-inch(lightweight gun)
                  DDG-51 to 84: 2 × 20 mm (0.8 in) Phalanx CIWS
                  DDG-85 onwards: 1 × 20 mm Phalanx CIWS
                  2 × 25 mm (0.98 in) Mk 38 machine gun system
                  1 × Optical Dazzling Interdictor, Navy[N 2]
                  DDG-88: 1 × High Energy Laser and Integrated Optical-dazzler with Surveillance
                  Missiles:
                  RIM-66M surface-to-air missile
                  RIM-156 surface-to-air missile
                  RIM-174A standard ERAM
                  RIM-161 anti-ballistic missile 
                  RIM-162 ESSM
                  BGM-109 Tomahawk cruise missile
                  RUM-139 vertical launch ASROC
                  1 × SeaRAM[N 3]
                  Torpedoes:
                  2 × Mark 32 triple torpedo tubes:
                  Mark 46 lightweight torpedo
                  Mark 50 lightweight torpedo
                  Mark 54 lightweight torpedo
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
            Admiral Levchenko
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>CONFIDENTIAL.</strong> 2 × 4 SS-N-14 anti submarine missiles
              8 × 8 vertical launchers for SA-N-9 surface to air missiles
              2 × 1 barrel 100 mm (3.9 in) gun (AK-100)[3]
              4 × 30 mm Gatling guns
              2 × 4 553 mm (21.8 in) torpedo tubes, Type 53 ASW/ASuW torpedo
              2 × RBU-6000 anti submarine rocket launchers
                          </div>
          </div>
        </div>
      </div>
      <div className="container my-3"><button onClick={toggleStyle} type="button" className="btn btn-primary">{btntxt}</button></div>
      </div>
        
  
  
    </div>
  )
}
