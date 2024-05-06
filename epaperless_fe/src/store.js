import { create } from "zustand";

const useStore = create((set) => ({
  // CONSTANTS
  EPAPERLESS_API_KEY: "5JdDbsLLgnG*pAi8t%qG6r6", //move to db
  EPAPERLESS_BASE_URL: "http://127.0.0.1:8000",
  EPAPERLESS_UPLOAD_URL: "/uploadfiles",

  // sidebar
  isSidebarVisible: true,

  setInitialVisibilityState: (value) =>
    set((state) => ({ isSidebarVisible: value })),
  toggleSidebar: () =>
    set((state) => ({ isSidebarVisible: !state.isSidebarVisible })),

  // dark theme
  isDarkMode: false, // Default value
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  // docs
  documentsList: [],
  setDocumentsList: (value) => set((state) => ({ documentsList: value })),

  // upload

  sin: "",
  tags: [],
  meta: "",
  setSin: (value) => set((state) => ({ sin: value })),
  setTags: (value) => set((state) => ({ tags: value })),
  setMeta: (value) => set((state) => ({ meta: value })),

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
