const Weather = ({ weatherData }) => {
  return weatherData === null ? null : (
    <div className="weather-data">
      <h5>{weatherData.name}</h5>
      <h1>
        {weatherData.main.temp.toFixed(0)}
        <span>&#176;</span>
      </h1>
      <div className="row">
        <div className="col offset-s4 s2 text-center">
          <h5>
            {weatherData.main.temp_min.toFixed(0)}
            <span>&#176;</span>
          </h5>
          <p>Min</p>
        </div>
        <div className="col s2">
          <h5>
            {weatherData.main.temp_max.toFixed(0)}
            <span>&#176;</span>
          </h5>
          <p>Max</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
