import React from "react";
import "./ContactUs.css";  

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      {/* Contact Form Section */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow">
            <h4 className="text-center mb-3">Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <div className="card p-4 shadow text-center">
            <h4 className="mb-3">Our Contact Details</h4>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> biharbites@gmail.com</li>
              <li><strong>Phone:</strong> +91 8676860092</li>
              <li><strong>Address:</strong> Darbhanga, Bihar, India</li>
              <li><strong>Working Hours:</strong> Mon - Sat, 9 AM - 6 PM</li>
            </ul>
          </div>
        </div>
      </div>
        
      {/* Google Maps Section */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <div className="card p-4 shadow">
            <h4 className="text-center mb-3">Find Us on Google Maps</h4>
            <div className="map-container">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4531.631308347082!2d85.90539597991398!3d26.14442888848434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb841a2837709%3A0x11b01f90483f132!2sDonar%20Chowk%2C%20Laheriasarai%2C%20Darbhanga%2C%20Bihar%20846009!5e0!3m2!1sen!2sin!4v1742552998498!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: "0", borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;
