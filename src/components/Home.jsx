import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/shopping-bg.jpg"
          className="card-img"
          alt="Background"
          height="100%"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-border mb-0">
              NEW SEASON
              <br />
              ARRIVALS
            </h5>
            <button type="button" class="btn btn-light card-text mt-5">
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                CHECK OUT ALL THE TRENDS {">>"}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
