import React from "react";

export default function Service() {
  return (
    <section id="services" className="services section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            "I offer a versatile range of professional services designed to help
            individuals and businesses achieve their goals. My expertise
            includes [ Frontend Development, Backend Development, Smart
            Contracts, Content Creation], which I customize to meet your
            specific needs. I bring a wealth of experience, a strong attention
            to detail, and a commitment to delivering high-quality results.
            Whether you're seeking personal development, business guidance, or
            creative solutions, my approach is client-focused, ensuring a
            seamless and positive experience from start to finish. I take pride
            in building strong relationships with my clients, providing reliable
            support, and helping you reach your objectives."
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4 className="title">
                <a href="">Frontend development</a>
              </h4>
              <p className="description">
                Frontend Development, where I create intuitive and visually
                appealing user interfaces
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file"></i>
              </div>
              <h4 className="title">
                <a href="">Backend Development</a>
              </h4>
              <p className="description">
                Backend Development, where I build robust and scalable
                server-side applications
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4 className="title">
                <a href="">Smart Contracts</a>
              </h4>
              <p className="description">
                Smart Contracts, leveraging blockchain technology to design
                secure and automated agreements.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-world"></i>
              </div>
              <h4 className="title">
                <a href="">Content Creation</a>
              </h4>
              <p className="description">
                Producing engaging and high-quality content tailored to your
                brand's voice and audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
