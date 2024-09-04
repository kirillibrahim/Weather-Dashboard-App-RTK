import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/store';
import { setWeatherInfo } from '../features/weather/weatherSlice'; 
import {WeatherInfo} from "../features/weather/types"
const PreviousSearches: React.FC = () => {
  const previousSearches: WeatherInfo[] = useAppSelector((state) => state.weather.previousSearches);
  const weatherInfo = useAppSelector((state) => state.weather.weatherInfo);
  const dispatch = useAppDispatch();

  const handleSelectCity = (search: WeatherInfo) => {
    //check if city name is already there
    if (weatherInfo.cityName !== search.cityName) {
      dispatch(setWeatherInfo(search));
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow space-y-2">
      <h3 className="text-lg font-semibold">Previous Searches</h3>
      {previousSearches.length === 0 ? (
        <p className="text-gray-500">No previous searches found.</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {previousSearches.map((search: WeatherInfo, index) => (
            <button
              key={index}
              onClick={() => handleSelectCity(search)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              style={{ flex: '1 0 21%' }}
              aria-label={`Select ${search.cityName}`}
            >
              {search.cityName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
  
};

export default PreviousSearches;
