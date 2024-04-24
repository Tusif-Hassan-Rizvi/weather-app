import React from "react";

function WeatherCard() {
  return (
    <>
      <div className="weather-card">
        <div className="top-header">
          <span className="city-name card-info">Grugram</span>
          <span className="currunt-time card-info">9:00</span>
          <span className="temprature card-info">
            32<sup>.c</sup>
          </span>
        </div>

        <div className="weather-report">
          <div className="report-box">
            <span className="report-label">Humidity</span>
            <span className="humidity card-info">17%</span>
          </div>

          <div className="report-box">
            <span className="report-label">Wind</span>
            <span className="wind card-info">5 Km/hr</span>
          </div>

          <div className="report-box">
            <span className="report-label">Air Quilty</span>
            <span className="Air-quality card-info">168</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
