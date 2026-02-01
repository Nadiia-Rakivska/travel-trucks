// import { create } from "zustand";
// import { Camper } from "@/types/camper";
// import { persist } from "zustand/middleware";
// interface Filters {
//   location?: string;
//   form?: string;
//   equipment?: string[];
// }

// interface CampersState {
//   totalCampers: number;
//   campers: Camper[];
//   favorites: string[];
//   filters: Filters;
//   isLoading: boolean;

//   setCampers: (campers: Camper[]) => void;
//   resetCampers: () => void;
//   setFilters: (filters: Filters) => void;
//   toggleFavorite: (id: string) => void;
//   appendCampers: (items: Camper[]) => void;
//   setTotalCampers: (total: number) => void;
// }

// export const useCampersStore = create<CampersState>((set, get) => ({
//   campers: [],
//   favorites: [],
//   filters: {},
//   isLoading: false,
//   totalCampers: 0,

//   setCampers: (campers) => set({ campers }),

//   resetCampers: () => set({ campers: [] }),

//   setFilters: (filters) =>
//     set((state) => ({
//       filters: { ...state.filters, ...filters },
//     })),
//   appendCampers: (items: Camper[]) =>
//     set((state) => ({
//       campers: [...state.campers, ...items],
//     })),
//   setTotalCampers: (total) => set({ totalCampers: total }),
//   toggleFavorite: (id) =>
//     set((state) => ({
//       favorites: state.favorites.includes(id)
//         ? state.favorites.filter((fav) => fav !== id)
//         : [...state.favorites, id],
//     })),
// }));

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Camper } from "@/types/camper";

interface Filters {
  location?: string;
  form?: string;
  equipment?: string[];
}

interface CampersState {
  totalCampers: number;
  campers: Camper[];
  favorites: string[];
  filters: Filters;
  isLoading: boolean;

  setCampers: (campers: Camper[]) => void;
  resetCampers: () => void;
  setFilters: (filters: Filters) => void;
  toggleFavorite: (id: string) => void;
  appendCampers: (items: Camper[]) => void;
  setTotalCampers: (total: number) => void;
}

export const useCampersStore = create<CampersState>()(
  persist(
    (set, get) => ({
      campers: [],
      favorites: [],
      filters: {},
      isLoading: false,
      totalCampers: 0,

      setCampers: (campers) => set({ campers }),

      resetCampers: () => set({ campers: [] }),

      setFilters: (filters) =>
        set((state) => ({
          filters: { ...state.filters, ...filters },
        })),
      appendCampers: (items: Camper[]) =>
        set((state) => ({
          campers: [...state.campers, ...items],
        })),
      setTotalCampers: (total) => set({ totalCampers: total }),
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((fav) => fav !== id)
            : [...state.favorites, id],
        })),
    }),
    {
      name: "campers-store", // ключ для збереження в localStorage
      // можна вказати, що зберігати (наприклад, тільки favorites)
      partialize: (state) => ({
        favorites: state.favorites,
        filters: state.filters,
      }),
    },
  ),
);