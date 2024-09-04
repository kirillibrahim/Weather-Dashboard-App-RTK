# Weather Dashboard Application

This project is a Weather Dashboard Application built using React, Redux, and Tailwind CSS. It allows users to search for current weather conditions in various cities and displays detailed weather information.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- npm

### Installation

Follow these steps to get your development environment running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kirillibrahim/Weather-Dashboard-App-RTK.git
   cd weather-dashboard-app
   ```

2. **Install NPM packages:**
   ```bash
   npm install
   ```

3. **Setup the API key:**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api) to obtain your API key.
   - Create a `.env` file in the root directory of the project.
   - Add your API key to the `.env` file as follows:
     ```plaintext
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```
   Replace `your_api_key_here` with the API key you obtained from OpenWeatherMap.

4. **Run the application:**
   ```bash
   npm start
   ```
   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Development Approach

### Overview

The application was developed focusing on usability, performance, and modularity. Key technologies include React for its efficient rendering and robust ecosystem, Redux for state management, and Tailwind CSS for rapid custom styling.

### Key Decisions

- **React Functional Components**: Chosen for their simplicity and compatibility with React hooks.
- **Redux Toolkit**: Utilized to simplify Redux state management and reduce boilerplate.
- **API Integration**: Integrated with OpenWeatherMap API for real-time weather data. Emphasis was placed on graceful error handling and efficient state updates.
- **Environment Variables**: Implemented to securely manage the API key, ensuring sensitive configurations remain private and are not hard-coded.
