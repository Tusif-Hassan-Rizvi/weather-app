import { useState } from "react";
import "./App.css";
import SearchIcon from "./assets/search-icon.svg";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <>
      <div className="container">
        <section className="search-section">
          <div className="common-container ">
            {/* search section  */}
            <div className="search-section-wrapper">
              <div className="search-box">
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
              </div>
            </div>
          </div>
        </section>

        <section className="weather-details-section">
          <div className="common-container">
            <div className="weather-details-wrapper">
              <WeatherCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
