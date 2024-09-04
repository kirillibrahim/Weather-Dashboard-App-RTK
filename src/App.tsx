import React from 'react';
import CitySearch from './components/CitySearch';
import WeatherDetails from './components/WeatherDetails';
import PreviousSearches from './components/PreviousSearches';
import './App.css';  

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col justify-center items-center">
      <header className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Weather Dashboard</h1>
      </header>

      <main className="w-full max-w-4xl p-4 bg-white shadow-md rounded-lg">
        <CitySearch />
        <WeatherDetails />
        <PreviousSearches />
      </main>

      <footer className="text-center p-4 mt-4">
        <p>Powered by Kirolos <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Personal Website</a></p>
      </footer>
    </div>
  );
}

export default App;


