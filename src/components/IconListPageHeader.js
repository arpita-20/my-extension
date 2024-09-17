import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { IconButton } from "@mui/material";

// eslint-disable-next-line react/prop-types
const IconListPageHeader = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="flex justify-between items-center px-5 pt-5">
      <p
        className={`${
          isDarkMode ? "text-white" : "text-[#121212]"
        } font-extrabold text-xl`}
      >
        icon stash
      </p>
      <div className="flex gap-4">
        <IconButton onClick={() => setIsDarkMode(!isDarkMode)}>
          <DarkModeOutlinedIcon
            fontSize="small"
            sx={{ color: isDarkMode ? "#fff" : "#121212" }}
          />
        </IconButton>
        <IconButton onClick={() => window.close()}>
          <CloseOutlinedIcon
            fontSize="small"
            sx={{ color: isDarkMode ? "#fff" : "#121212" }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default IconListPageHeader;
