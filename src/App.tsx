import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./assets/search-icon.svg";
import WeatherCard from "./components/WeatherCard";

interface WeatherInfo {
  cityName: string;
  temprature: number;
  tempratureFeel: number;
  humidity: number;
  wind: number;
  visibility: number;
  cloud: number;
}

function App() {
  const [searchValue, setSearchValue] = useState<string>("delhi");
  const [weatherData, setWheaterData] = useState<WeatherInfo>({
    cityName: "",
    temprature: 0,
    tempratureFeel: 0,
    humidity: 0,
    wind: 0,
    visibility: 0,
    cloud: 0,
  });
  const [notFound, setNotFound] = useState<string | null>(null);
  const apiKey = process.env.REACT_APP_WEATHER_API;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=751473a6aeb3d67db6a80b705b4e63b1`;

  const weatherApiCall = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.cod === "404") {
        setNotFound(data.message);
        setSearchValue("")
      }
      else{
        const filterData: WeatherInfo = {
          cityName: data.name,
          temprature: Math.floor(data.main.temp/10) ,
          tempratureFeel: Math.floor(data.main.feels_like/10),
          humidity: data.main.humidity,
          wind: data.wind.speed,
          visibility: (data.visibility)/1000,
          cloud: data.clouds.all,
        };
  
        setWheaterData(filterData);
        setSearchValue("");
      }

     
    } catch (error) {
      console.log(error);
      alert("something went wrong!");
    }
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotFound(null);
    weatherApiCall();
  };

  useEffect(() => {
    weatherApiCall();
  }, []);
  return (
    <>
      <div className="container">
        <section className="search-section">
          <div className="common-container ">
            {/* search section  */}
            <div className="search-section-wrapper">
              <form className="search-box" onSubmit={handleSearch}>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search your location"
                  value={searchValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchValue(e.target.value)
                  }
                />
                <img
                  src={SearchIcon}
                  width={20}
                  height={20}
                  alt="search"
                  className="search-icon"
                />
              </form>
            </div>
          </div>
        </section>

        <section className="weather-details-section">
          <div className="common-container">
            <div className="weather-details-wrapper">
              {notFound ? (
                <h1 className="roboto-bold not-found">{notFound}!</h1>
              ) : (
                <WeatherCard locationdata={weatherData} />
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
