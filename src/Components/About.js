import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row no-gutters">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <h3>About</h3>
              <p>
                Hi, I'm Vanshika, I was born and grew up in Purnea, went to
                school in Purnea, Bihar. I love to read books. I volunteer
                regularly and passionate about social good and technology.
              </p>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>Btech CS [Blockchain Student]</h3>
                <p className="fst-italic"></p>
                <div className="row">
                  <div className="col-lg-5">
                    <ul>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>Birthday:</strong> 12 Feb 2005
                      </li>

                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>Phone:</strong> +91 8002211613
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>City:</strong> Mathura, Uttar Pradesh
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>Age:</strong> 19
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>Degree:</strong> Student
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>Email:</strong> vanshikavanshu1613@gmail.com
                      </li>
                      <li>
                        <i className="bi bi-rounded-right"></i>{" "}
                        <strong>Freelance:</strong> Available
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  I love to dig into customer problems and solve them with
                  modern technology. I create, scale and optimize business
                  portfolios that matter.To accomplish this, I focus on
                  delivering key outcomes, building amazing teams and quickly
                  adapting to new learnings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
