import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="resume section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            To land a job in a marketing organisation that offers a stimulating
            learning environment for developing and putting into practice new
            ideas for the company's development. Looking for entry level
            employment where I can develop my abilities as a marketing expert
            and help a firm succeed overall.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Vanshika Vanshu</h4>
              <p>
                <em>
                  Hi, I'm Vanshika, an enthusiast leaner willing to build a
                  career in Web development. I have worked on various projects
                  as a web developer and gained experience in developing
                  user-centered digital/print marketing material from initial
                  concept to final, polished deliverable projects.
                </em>
              </p>
              <p>
                <ul>
                  <li>GLA University, Mathura</li>
                  <li>(+91) 80022-11613</li>
                  <li>vanshikavanshu1613@gmail.com</li>
                </ul>
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B.Tech (Computer Science &amp; Engineering)</h4>
              <h5>2022 - 2026</h5>
              <p>
                <em>GLA University, Mathura, Uttar Pradesh</em>
              </p>
              <p>
                I am pursuing my Bachelor's Degree from GLA University. GLA is
                one of the best universities in Uttar Pradesh well known for its
                Placement Records.
              </p>
            </div>
            <div className="resume-item">
              <h4>Intermediate (12th)</h4>
              <h5>2020 - 2022</h5>
              <p>
                <em>Milla Convent English School</em>
              </p>
              <p>
                I have completed my 12th from Milla Convent English School.
                (CBSE)
              </p>
            </div>
            <div className="resume-item">
              <h4>Matriculation (10th)</h4>
              <h5>2020</h5>
              <p>
                <em>St. Peter's School (Eng.Med)</em>
              </p>
              <p>I have completed my 10th from St. Peter's School. (CBSE)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
