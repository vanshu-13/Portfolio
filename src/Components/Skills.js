import React from 'react'

export default function Skills() {
  return (
    <section id="skills" className="skills section-bg">
    <div className="container">

      <div className="section-title">
        <h2>Skills</h2>
        <p>Every manager needs certain core skills to motivate the people in their team and gain the best possible
          results for the company. Here are some of the most important qualities of all.</p>
      </div>

      <div className="row skills-content">

        <div className="col-lg-6">

          <div className="progress">
            <span className="skill">HTML <i className="val">98%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" style={{"width": "98%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">CSS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">JavaScript <i className="val">85%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" style={{"width": "85%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
          </div>

        </div>

        <div className="col-lg-6">

          <div className="progress">
            <span className="skill">PHP <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" style={{"width": "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
          </div>


          <div className="progress">
            <span className="skill">WordPress/CMS <i className="val">72%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" style={{"width": "72%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Photoshop <i className="val">78%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" style={{"width": "78%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
  )
}
