import axios from "axios";
import { GET_WEATHER_FAIL, GET_WEATHER_SUCCESS, LOADING_WEATHER } from "../constants/weatherTypes";

export const getWeather = (query) => async dispatch => {
    dispatch({ type: LOADING_WEATHER })
    try {
        const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=ea827e23cd9c461db31215716222609&q=${query}&days=5&aqi=no&alerts=no`);
        dispatch({ type: GET_WEATHER_SUCCESS, payload: res.data })

    } catch (error) {
        console.log(error)
        dispatch({ type: GET_WEATHER_FAIL, payload: error })
    }
}