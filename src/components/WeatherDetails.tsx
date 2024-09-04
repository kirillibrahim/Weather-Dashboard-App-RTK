import React from 'react';
import { useAppSelector } from '../store/store';

const WeatherDetails: React.FC = () => {
  const { weatherInfo, error, loading } = useAppSelector((state) => state.weather);

  if (error) {
    return <div className="text-red-500 text-center py-4">Error: {error}</div>;
  }

  if (loading) {
    return ( <div className="flex justify-center items-center">
       <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
    </div>
    );
  }

  if (!weatherInfo || weatherInfo.temperature === null) {
    return <div className="text-center py-4">No weather data available. Please search for a city.</div>;
  }

  //converte temperature to celsius
  const temperatureCelsius = weatherInfo.temperature - 273.15;

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-gray-800 flex flex-col items-center justify-center">
      <div className="text-lg font-semibold">{weatherInfo.cityName}</div>
      <div className="text-gray-500 text-sm">{new Date().toLocaleDateString()}</div>
      <div className="flex items-center space-x-2 mt-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"  aria-label="Weather Icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 11.88-7.902A7 7 0 0115.25 3 7 7 0 0121 9c0 3.866-3.582 7-8 7H4z" />
        </svg>
        <span className="text-4xl">{temperatureCelsius.toFixed(1)}°</span>
      </div>
      <div className="text-sm text-gray-600 mt-1">{weatherInfo.conditions}</div>
      <div className="flex justify-between space-x-4 w-full mt-4">
        <div>
          {/* Arrow Icon for wind */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"  aria-label="Weather Icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <span className="text-xs mt-1">{weatherInfo.windSpeed} km/h</span>
        </div>
        <div>
          {/* Icon for humidity*/}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"  aria-label="Weather Icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v8.25a3.75 3.75 0 100 7.5V21" />
          </svg>
          <span className="text-xs mt-1">{weatherInfo.humidity}%</span>
        </div>
        <div>
          {/* Icon for clouds */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"  aria-label="Weather Icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm0 0c-2.708 0-6 1.343-6 4v1h12v-1c0-2.657-3.292-4-6-4z" />
          </svg>
          <span className="text-xs mt-1">{weatherInfo.clouds}</span> 
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

