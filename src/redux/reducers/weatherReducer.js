import { GET_WEATHER_FAIL, GET_WEATHER_SUCCESS, LOADING_WEATHER } from "../constants/weatherTypes";

const initialState = {
    loading: false,
    data: null,
    errors: null
}
export const weahterReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case LOADING_WEATHER:
            return { ...state, loading: true }
        case GET_WEATHER_SUCCESS:
            return { ...state, data: payload, loading: false }
        case GET_WEATHER_FAIL:
            return { ...state, errors: payload, loading: false }
        default:
            return state
    }
}