import React from "react";
import useStore from "@/store";

export const MoreButton = () => {
  const { isDarkMode } = useStore();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        fill={isDarkMode ? "#fff" : "#000"}
        fillOpacity={0.5}
        d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2z"
        opacity={0.4}
      />
      <path
        fill={isDarkMode ? "#fff" : "#000"}
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M7.521 10.803c-.66 0-1.198.537-1.198 1.196a1.2 1.2 0 0 0 1.198 1.198A1.2 1.2 0 0 0 8.72 12c0-.66-.537-1.197-1.198-1.197zm4.48 0c-.662 0-1.199.537-1.199 1.196A1.2 1.2 0 0 0 12 13.197 1.2 1.2 0 0 0 13.198 12c0-.66-.537-1.197-1.198-1.197zM15.28 12a1.198 1.198 0 0 1 2.397 0 1.2 1.2 0 0 1-1.198 1.198A1.2 1.2 0 0 1 15.282 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
