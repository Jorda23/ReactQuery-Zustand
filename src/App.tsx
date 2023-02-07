import WeatherApp from "./components/WeatherApp";

export const App = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-indigo-800">

      <div className="shadow-2xl w-[24rem]  bg-white  z-50">
        <WeatherApp />
      </div>
    </div>
  );
};
