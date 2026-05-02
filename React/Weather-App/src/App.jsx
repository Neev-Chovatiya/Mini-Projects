import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  const getWeather = async () => {
    if (city.trim() === "") return;
    try {
      setError("");
      const apikey = "5bc711bde60f17aa40339b89d86dece6";
      setloading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`,
      );
      const data = await response.json();
      console.log(data);
      if (data.cod !== 200) {
        setError("City Not Found");
        setWeather(null);
        return;
      }
      setWeather(data);
      setloading(false);
    } catch (error) {
      setloading(false);
      setError("Something Went Wrong");
    }
  };

  const getWeatherIcon = () => {
    if (!weather) return "";

    const condition = weather.weather[0].main;

    switch (condition) {
      case "Clear":
        return "☀️";

      case "Clouds":
        return "☁️";

      case "Rain":
        return "🌧️";

      case "Snow":
        return "❄️";

      case "Thunderstorm":
        return "⛈️";

      default:
        return "🌤️";
    }
  };

  const getBackground = () => {
    if (!weather) {
      return "bg-blue-100";
    }

    const condition = weather.weather[0].main;

    switch (condition) {
      case "Clear":
        return "bg-yellow-200";

      case "Clouds":
        return "bg-gray-300";

      case "Rain":
        return "bg-slate-400";

      case "Snow":
        return "bg-cyan-100";

      case "Thunderstorm":
        return "bg-gray-500";

      default:
        return "bg-blue-100";
    }
  };

  return (
    <div
      className={`min-h-screen ${getBackground()} flex items-center justify-center transition-all duration-500`}
    >
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Weather App</h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter city"
            className="flex-1 border rounded px-3 py-2 outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getWeather();
              }
            }}
          />

          <button
            onClick={getWeather}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {loading && <p className="text-center mt-4">Loading...</p>}

        {weather && (
          <div className="mt-6 text-center">
            <div className="text-6xl">{getWeatherIcon()}</div>

            <h2 className="text-2xl font-bold">{weather.name}</h2>

            <p className="text-xl mt-2">{weather.main.temp} °C</p>

            <p className="mt-2">{weather.weather[0].main}</p>

            <p className="mt-2">Humidity: {weather.main.humidity}%</p>

            <p className="mt-2">Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
