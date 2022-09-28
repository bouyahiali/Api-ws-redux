import React from "react";
import "./weathercard.css";

const WeatherCard = ({ location, current }) => {
  return (
    <div>
      <div className="container">
        <div className="card card-1">
          <div id="demo" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to={0} className="active" />
              <li data-target="#demo" data-slide-to={1} />
              <li data-target="#demo" data-slide-to={2} />
            </ul>
            {/* The slideshow */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-6">
                    <div className="temp">{current.temp_c}°C</div>
                    <div className="location">{location.name}</div>
                  </div>
                  <div className="col-6 justify-content-right">
                    <img
                      className="img-fluid"
                      src={current.condition.icon}
                      alt=""
                    />
                  </div>
                </div>
                <p>{current.condition.text}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-2"></div>
      </div>
    </div>
  );
};

export default WeatherCard;
