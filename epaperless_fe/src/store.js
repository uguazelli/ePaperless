import { create } from "zustand";

const useStore = create((set) => ({
  // sidebar
  isSidebarVisible: true,
  isSmallScreen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarVisible: !state.isSidebarVisible })),
  setIsSmallScreen: () =>
    set((state) => ({ isSmallScreen: !state.isSmallScreen })),

  // dark theme
  isDarkMode: false, // Default value
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  // docs
  documentsList: [],
  setDocumentsList: (value) => set((state) => ({ documentsList: value })),

  // AWS
  // aws_s3: "",
  // aws_region: "",
  // aws_username: "",
  // aws_access_key: "",
  // aws_secret_key: "",
  // set_aws_s3: (value) => set((state) => ({ aws_s3: value })),
  // set_aws_region: (value) => set((state) => ({ aws_region: value })),
  // set_aws_username: (value) => set((state) => ({ aws_username: value })),
  // set_aws_access_key: (value) => set((state) => ({ aws_access_key: value })),
  // set_aws_secret_key: (value) => set((state) => ({ aws_secret_key: value })),
}));

export default useStore;
