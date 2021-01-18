import summer from "./assets/summer.jpg";
import spring from "./assets/spring.jpg";
import autumn from "./assets/autumn.jpg";
import winter from "./assets/winter.jpg";

const Weather = ({ weatherData }) => {
  let imgSrc = summer;
  if (weatherData) {
    if (weatherData.main.temp < 12) {
      imgSrc = winter;
    } else if (weatherData.main.temp < 26) {
      imgSrc = autumn;
    } else if (weatherData.main.temp < 36) {
      imgSrc = spring;
    } else {
      imgSrc = summer;
    }
  }
  return weatherData === null ? null : (
    <div className="weather-data">
      <div className="row">
        <div className="col l3 offset-l1 m4 s8 offset-s2">
          <div className="card city-card">
            <h5 id="city-name">{weatherData.name}</h5>
            <h1 id="main-temp">
              {weatherData.main.temp.toFixed(0)}
              <span>&#176;</span>
            </h1>
            <h6 id="info">{weatherData.weather[0].main}</h6>
            <p id="max-temp">
              H:{weatherData.main.temp_max.toFixed(0)}
              <span>&#176;</span>
            </p>
            <p id="min-temp">
              L:{weatherData.main.temp_min.toFixed(0)}
              <span>&#176;</span>
            </p>
          </div>
        </div>
        <div className="col l7 m8 s8 offset-s2">
          <div className="card details-card">
            <img src={imgSrc} alt="" srcSet="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
