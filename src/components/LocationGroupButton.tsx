import useCityStore from "../store/useCityStore";

const LocationGroupButton = () => {
  const { setCity } = useCityStore();

  return (
    <div className="flex py-2 items-center bg-indigo-700 justify-around text-white text-sm">
      <button onClick={() => setCity("Managua")}>Managua</button>

      <button className="border-x-2 px-6" onClick={() => setCity("Miami")}>
        Miami
      </button>

      <button onClick={() => setCity("London")}>London</button>
    </div>
  );
};

export default LocationGroupButton;
