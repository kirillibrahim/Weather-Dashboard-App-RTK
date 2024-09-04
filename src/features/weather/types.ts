
export interface WeatherInfo {
    cityName: string;
    temperature: number | null;
    conditions: string;
    windSpeed: number | null;
    humidity: number | null;
    clouds: number | null;
  }
  

 
  export interface WeatherState {
    weatherInfo: WeatherInfo;
    loading: boolean;
    error: string | null;
    previousSearches: WeatherInfo[];
  }

