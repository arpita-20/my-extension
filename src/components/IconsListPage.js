import React, { useState } from "react";
import IconListPageHeader from "./IconListPageHeader";
import Divider from "@mui/material/Divider";
import IconListPageContent from "./IconListPageContent";

const IconsListPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  console.log(isDarkMode);
  return (
    <div
      className={`flex flex-col ${
        isDarkMode ? "bg-[#121212]" : "bg-white"
      } w-full h-full gap-7`}
    >
      <IconListPageHeader
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Divider sx={{ backgroundColor: "#262626" }} />
      <div className="w-full h-full overflow-auto p-4">
        <IconListPageContent isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default IconsListPage;
