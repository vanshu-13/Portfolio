import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            In the year 1991 Shri Narayan Das Agrawal decided to fulfil the
            dream of his father, Late Shri Ganeshi Lal Agrawal and initiated the
            Sri Jagannath Prasad Ganeshi Lal Bajaj Charitable Trust Samiti in an
            attempt to make the holy city of Mathura a recognized destination
            for knowledge seekers from different walks of life.
          </p>
        </div>

        <div>
          <iframe
            style={{ border: "0", width: "100%", height: "270px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.607577800783!2d77.59113581425528!3d27.60569343656049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc3da92c6341!2sGLA%20University!5e0!3m2!1sen!2sin!4v1667071180994!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            frameborder="0"
          ></iframe>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="contact-about">
              <h3>Vanshika</h3>
              <p></p>
              <div className="social-links">
                <a href="https://twitter.com/i/flow/login" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/login.php/"
                  className="facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/"
                  className="instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/vanshika-vanshu-692106254/"
                  className="linkedin"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>GLA University, Mathura, Uttar Pradesh, India</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>vanshikavanshu1613@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 8002211613</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-8">
            <form
              action="https://script.google.com/macros/s/AKfycbw19vYRnbwXzA0RHtrZaZR2UDPUu1NCfvfK2v5Wswy7g8DzNsDZcwH6K4DElDuTsau1/exec"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
