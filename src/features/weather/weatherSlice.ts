import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchWeatherData } from '../../api/weatherAPI';
import { WeatherState, WeatherInfo } from './types';

const initialState: WeatherState = {
  weatherInfo: {
    cityName: '',
    temperature: null,
    conditions: '',
    windSpeed: null,
    humidity: null,
    clouds: null
  },
  loading: false,
  error: null,
  previousSearches: [] 
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await fetchWeatherData(city);
      return response;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherInfo(state, action: PayloadAction<WeatherInfo>) {
      state.weatherInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<any>) => {
        const newSearch: WeatherInfo = {
          cityName: action.payload.name,
          temperature: action.payload.main.temp,
          conditions: action.payload.weather[0].main,
          windSpeed: action.payload.wind.speed,
          humidity: action.payload.main.humidity,
          clouds: action.payload.clouds.all,
        };

        state.weatherInfo = newSearch;
        state.loading = false;
        state.error = null;

        //check if the city is already in previous searches
        if (!state.previousSearches.some(search => search.cityName === newSearch.cityName)) {
          state.previousSearches = [newSearch, ...state.previousSearches.slice(0, 9)];
        }
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Failed to fetch weather data';
      });
  }
});

export const { setWeatherInfo } = weatherSlice.actions; 

export default weatherSlice.reducer;
