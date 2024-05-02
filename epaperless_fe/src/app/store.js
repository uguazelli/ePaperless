import { create } from "zustand";

const useStore = create((set) => ({
  currentPage: "",
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useStore;
