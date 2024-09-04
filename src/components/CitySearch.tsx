import React, { useState } from 'react';
import { useAppDispatch } from '../store/store';
import { fetchWeather } from '../features/weather/weatherSlice';  

const CitySearch: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(event.target.value);
  };

  const handleSearch = (): void => {
    if (city.trim() !== '') {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        className="w-full p-2 rounded bg-gray-100 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter city name"
         aria-label="City name"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ml-2"  aria-label="Search for city weather">
        Search
      </button>
    </div>
  );
};

export default CitySearch;
