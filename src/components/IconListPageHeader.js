import React from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { IconButton } from "@mui/material";

const IconListPageHeader = () => {
  return (
    <div className="flex justify-between items-center px-5 pt-5">
      <p className="text-white font-extrabold text-xl">icon stash</p>
      <div className="flex gap-4">
        <IconButton>
          <DarkModeOutlinedIcon fontSize="small" sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton>
          <CloseOutlinedIcon fontSize="small" sx={{ color: "#fff" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default IconListPageHeader;
