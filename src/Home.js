import React, { useState } from "react";
import axios from "axios";

import Search from "./Search";
import Loader from "./Loader";
import Weather from "./Weather";

function Home() {
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [err, setErr] = useState(null);
  //   const { data: weatherData, isLoading, err } = useFetch(
  //     ``
  //   );

  const changeCityName = (city) => {
    setCity(city);
  };

  const getWeatherData = (e) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=182f64186d901bf6304b0b4bbbe1264d&units=metric`
      )
      .then((response) => {
        if (response.status === 200) {
          setWeatherData(response.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setErr(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="content">
      <div className="header valign-wrapper">
        <div className="container">
          <h1 className="white-text">My Weather App</h1>
          <br />
          <p className="white-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="main container">
        <Search
          changeCityName={changeCityName}
          searchHandler={getWeatherData}
        />
        {err ? (
          <div className="error">Invalid City Name</div>
        ) : isLoading ? (
          <Loader />
        ) : (
          <Weather weatherData={weatherData} />
        )}
      </div>
    </div>
  );
}

export default Home;
