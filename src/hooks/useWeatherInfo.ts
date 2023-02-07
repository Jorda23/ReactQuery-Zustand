import { useQuery, QueryFunctionContext } from "@tanstack/react-query";
import { WeatherResponse } from "./interfaces/types";
import weatherApi from "../api/weatherApi";
import { api_key } from '../shared/utils/configEnv';

async function getWeather(element: QueryFunctionContext) {
  const [_, search] = element.queryKey;

  const { data } = await weatherApi.get<WeatherResponse>(
    `/forecast?q=${search}&lang=sp&units=metric&appid=${api_key}`
  );
  return data;
}

export function useWeatherInfo(search: string) {
  return useQuery(["weatherCity", search], getWeather);
}
