import { create } from "zustand";
import { persist } from "zustand/middleware";

interface props {
  city: string;
  setCity: (name: string) => void;
}

const useCityStore = create(
  persist<props>(
    (set) => ({
      city: "Managua",
      setCity: (name: string) => {
        set(() => ({
          city: name,
        }));
      },
    }),
    {
      name: "weather-app",
    }
  )
);

export default useCityStore;
