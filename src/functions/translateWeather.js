export const translateWeather = weather => {
  switch (weather) {
    case "Rain":
      return "雨"
      break
    default:
      return "不明"
      break
  }
}
