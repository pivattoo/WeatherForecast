import api from "../lib/inpeApi";
import apiUrls from "../constants/apiUrls";
export const getClimateCapitals = async() => {
    const fetchedData = await api.get(apiUrls.currentWeather)
    return fetchedData.data //retorna Promise pending -_-
}