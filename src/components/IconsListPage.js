import React from "react";
import IconListPageHeader from "./IconListPageHeader";
import Divider from "@mui/material/Divider";
import IconListPageContent from "./IconListPageContent";

const IconsListPage = () => {
  return (
    <div className="flex flex-col bg-[#121212] w-full h-full gap-7">
      <IconListPageHeader />
      <Divider sx={{ backgroundColor: "#262626" }} />
      <div className="w-full h-full overflow-auto p-4">
        <IconListPageContent />
      </div>
    </div>
  );
};

export default IconsListPage;
