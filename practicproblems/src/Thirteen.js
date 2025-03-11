//Weather app that fetches and displays weather information based on Users location
import React, { useEffect, useState } from "react";

export default function Thirteen() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=97ba119df4273ae37dfa508aaad085c0&units=metric`
        )
          .then((response) => {
            if (!response.ok) {
              console.error("Failed to fetch weather data:", response.status);
              return null;
            }
            return response.json();
          })
          .then((data) => {
            if (data) {
              setWeather(data);
            }
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
            setLoading(false);
          });
      });
    }
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : weather && weather.main ? (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature: {weather.main?.temp}°C</p>
          <p>Conditions: {weather.weather?.[0]?.description}</p>
        </div>
      ) : (
        <p>Unable to fetch weather data.</p>
      )}
    </div>
  );
}
