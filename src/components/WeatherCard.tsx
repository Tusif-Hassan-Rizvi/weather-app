import React from "react";

interface WeatherInfo {
  cityName: string;
  temprature: number;
  tempratureFeel: number;
  humidity: number;
  wind: number;
  visibility: number;
  cloud: number;
}

interface WeatherCardProps {
  locationdata: WeatherInfo;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ locationdata }) => {
  const {
    cityName,
    temprature,
    tempratureFeel,
    humidity,
    wind,
    visibility,
    cloud,
  } = locationdata;
  return (
    <>
      <div className="weather-card">
        <div className="top-header">
          <span className="city-name poppins-bold header-label">{cityName}</span>
          <span className="temprature poppins-bold header-label">
            {temprature}
            <sup>.c</sup>
          </span>
        </div>

        <div className="weather-report">
          <div className="report-box">
            <span className="report-label poppins-semibold">Temprature Feel</span>
            <span className="humidity card-info poppins-extrabold ">
              {tempratureFeel}
              <sup>.c</sup>
            </span>
          </div>
          <div className="report-box">
            <span className="report-label poppins-semibold">Humidity</span>
            <span className="humidity card-info poppins-extrabold ">{humidity}%</span>
          </div>

          <div className="report-box">
            <span className="report-label poppins-semibold">Wind</span>
            <span className="wind card-info poppins-extrabold ">{wind} Km/hr</span>
          </div>

          <div className="report-box">
            <span className="report-label poppins-semibold">Visibility</span>
            <span className="Air-quality card-info poppins-extrabold ">{visibility}</span>
          </div>
          <div className="report-box">
            <span className="report-label poppins-semibold">Cloud</span>
            <span className="Air-quality card-info poppins-extrabold ">{cloud}%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
