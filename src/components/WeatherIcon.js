import React from "react"
import clearIcon from "../img/icon_weather_clear.svg"
import rainIcon from "../img/icon_weather_rain.svg"
import cloudsIcon from "../img/icon_weather_clouds.svg"

const WeatherIcon = ({ main }) => {
  switch (main) {
    case "Clear":
      return <img src={clearIcon} alt={main} />
    case "Rain":
      return <img src={rainIcon} alt={main} />
    case "Clouds":
      return <img src={cloudsIcon} alt={main} />
    default:
      return <img src={clearIcon} alt={main} />
  }
}

export default WeatherIcon
