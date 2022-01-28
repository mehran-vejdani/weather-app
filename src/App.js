import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <h2 className="title">
          <i className="fa fa-cloud"></i>Weather App
        </h2>
        <div className="search-form">
          <input type="text" placeholder="Enter Your City Name" />
          <button className="search">search</button>
        </div>
        <div className="main-container">
          <h4>Live Weather Condition </h4>
          <div className="weather-icon">
            <i className="fa fa-sun"></i>
          </div>
          <h3>Sunny</h3>
          <div className="temprature">
            <h1>25&deg;C</h1>
          </div>
          <div className="location">
            <h3>
              <i className="fa fa-street-view"></i>United States | NewYork{" "}
            </h3>
          </div>
          <div className="temprature-range">
            <h6>Min:25&deg;C || Max:28&deg;C || Humidity:10%</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
