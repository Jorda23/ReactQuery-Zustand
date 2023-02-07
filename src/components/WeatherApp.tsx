import { useWeatherInfo } from "../hooks/useWeatherInfo";
import Icons from "../helpers/Icons";
import useCityStore from "../store/useCityStore";
import LocationGroupButton from "./LocationGroupButton";

const WeatherApp = () => {
  const { city } = useCityStore();
  const { data } = useWeatherInfo(city);

  const weatherNow = data?.list[0].weather[0];
  const values = data?.list[0].main;
  const forecast = data?.list ? data?.list : [];

  return (
    <div>
      <h1 className="text-center text-xl text-gray-600 pt-4">
        React Query And Zustand
      </h1>
      <h1 className="text-center text-xl text-gray-600 pt-4">
        {data?.city?.name}
      </h1>

      <div className="flex items-center justify-center gap-x-4 min-h-15rem">
        <h1 className="text-5xl text-gray-500">
          {values?.temp.toFixed(0)}&deg;
        </h1>
        <img className="w-52 " src={Icons(weatherNow?.main)} alt="icono" />
      </div>

      <div>
        <LocationGroupButton />

        <div className="bg-indigo-700 text-white text-3xl w-full min-h-[7rem] flex items-center justify-center gap-2">
          <h1>{forecast[0]?.main.temp_max.toFixed(0)}&deg; |</h1>

          <h1>{forecast[0]?.main.temp_min.toFixed(0)}&deg;</h1>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
