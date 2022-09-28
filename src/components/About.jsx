import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1
            className="display-6 fw-bolder text-center"
            style={{ color: "#c65e1e" }}
          >
            About Us
          </h1>
          <h4 className="text-center mt-5">
            Our mission is to connect buyers and creators with a representation
            of creativity which is why we exist.
          </h4>
          <p className="mt-3">
            We believe in promoting creators who design & create great products.
            Each product tells its own story, it can be created from Mom to a
            budding entrepreneur to an industrialist each rooted in passion,
            which only keeps on giving.
          </p>
          <p>
            It all started with a tiny spark of inspiration from our Founder -
            CEO Vittal Ramakrishna who believes in the plethora of talent of the
            creators and their dream to embark on their own entrepreneurial
            journey.
          </p>
          <p>
            We, in our truest sense, aspire to stand with the creators which not
            only strengthen the creativity but also brightens up the faces
            behind them.
          </p>
        </div>
      </div>
      <h5 className="fw-bolder text-center" style={{ color: "#c65e1e" }}>
        Connect With Us
      </h5>
      <div class="d-flex justify-content-center">
        <div className="p-3">
          <FaFacebookSquare size={50} />
        </div>
        <div className="p-3" onClick="https://www.facebook.com/kreateindia">
          <FaInstagram size={50} />
        </div>
        <div className="p-3">
          <FaTwitter size={50} />
        </div>
        <div className="p-3">
          <FaYoutube size={50} />
        </div>
      </div>
    </div>
  );
}
