import { create } from "zustand";

export const useAllTime = create((set) => ({
  allTimes: [],
  addTimes: (newTimes) =>
    set((state) => ({
      allTimes: [...state.allTimes, newTimes],
    })),
  clearAllTime: () =>
    set(() => ({
      allTimes: [],
    })),
}));
