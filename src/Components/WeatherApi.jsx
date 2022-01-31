import axios from "axios";
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "6e92ef049e4dd177df2693ba590dcbf1";
console.log(baseUrl);
export const getWeatherData = async (cityname) => {
  try {
    const { data } = await axios.get(
      baseUrl + `q=${cityname},&appid=${apiKey}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
