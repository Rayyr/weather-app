"use client";

import { useState } from "react";
import "./app.css";
import "./globals.css";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setOpen(true);
  };

  async function getWeather() {
    const api_key = "caa4e04e1b499131fcfc68880dca51ac";
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`,
    );

    const data = await result.json(); // convert to JSON
    if (data.cod !== "200") {
      setError(`Sorry , there is no city with this name : ${city}`);
      setWeather("");
    } else {
      setError("");
      setWeather(data);
    }
    return;
  }

  return (
    <div>
      <h1 className="text-heading   text-5xl font-bold">Weather app </h1>

      <div className="cityBar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (city.trim()) {
              getWeather();
            }
          }}
        >
          <input
            type="text"
            id="visitors"
            className="rounded-xl bg-[#F6F9F6] border border-default-medium text-heading text-sm block w-160  h-11 px-2.5 py-2 shadow-xs placeholder:text-body"
            placeholder="Enter a city...."
            required
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setError("");
            }}
          />

          <button
            type="submit"
            className="rounded-xl text-white bg-blue-500 hover:bg-blue-600   font-medium rounded-lg text-sm h-11 px-2.5 py-2"
          >
            Search
          </button>
        </form>
      </div>

      <div className="weather-forecast-all-days">
        {error && (
          <h1 className="invalidCity text-red-500 text-xl font-bold">
            {error}
          </h1>
        )}

        {weather?.list &&
          weather.list
            .filter((item, index) => index % 8 === 0)
            .slice(0, 5)
            .map((item, index) => {
              const date = new Date(item.dt_txt);
              const today = new Date();
              const isToday = date.toDateString() === today.toDateString();

              return (
                <div key="hi">
                  <div
                    key={index}
                    onClick={() => handleDayClick(item)}
                    className={`${isToday ? "weatherDay  bg-blue-500 backdrop-blur-md text-white border border-blue-500 hover:bg-blue-600  active:bg-blue-500 rounded-xl px-4 py-2 shadow" : "weatherDay  bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 active:bg-white/40 rounded-xl px-4 py-2 shadow"}`}
                  >
                    <h3>
                      {new Date(item.dt_txt).toLocaleDateString("en-US", {
                        weekday: "long",
                      })}
                    </h3>
                    <img
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt={`weather forecast for ${new Date(item.dt_txt).toLocaleDateString("en-US", { weekday: "long" })}`}
                    />
                    <p>{item.main.temp} °C</p>
                    <p>{item.weather[0].description}</p>
                  </div>

                  {open && selectedDay && (
                    <div
                      className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center"
                      onClick={() => setOpen(false)}
                    >
                      <div
                        className=" bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl p-6 w-[300px]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <h2 className="text-xl font-bold mb-3">
                          {new Date(selectedDay.dt_txt).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "long",
                            },
                          )}
                        </h2>

                        <p className="text-lg">
                          Min temp : {selectedDay.main.temp_min} °C
                        </p>
                        <p className="text-lg">
                          Max temp : {selectedDay.main.temp_max} °C
                        </p>
                        <p className="text-lg">
                          Pressure : {selectedDay.main.pressure} Pa
                        </p>
                        <p className="text-lg">
                          Sea level : {selectedDay.main.sea_level} m
                        </p>
                        <p className="text-lg">
                          Humidity : {selectedDay.main.humidity}%
                        </p>
                        <p className="text-lg">
                          Wind speed : {selectedDay.wind.speed}m/s
                        </p>

                        <button
                          className="rounded-lg mt-4 text-white bg-blue-500 hover:bg-blue-600  px-3 py-1"
                          onClick={() => setOpen(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
}
