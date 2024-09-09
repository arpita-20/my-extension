import { Button } from "@mui/material";
import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

const IconStashIntro = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full h-full bg-[#121212] text-white flex flex-col justify-between p-4">
      <div className="flex flex-col gap-5">
        <div className="w-[270px] items-center flex">
          <img src="/icon_stash.jpg" alt="" />
        </div>
        <p className="text-[#C6C6C6] text-base">
          Stack icons that you see on your favorite websites!{" "}
        </p>
        <p className="text-[#C6C6C6] text-base">For education purpose only!</p>
      </div>
      <Button
        component={Link}
        variant="contained"
        id="fetchDOMBtn"
        sx={{
          backgroundColor: "white",
          color: "#121212",
          "&:hover": {
            boxShadow: "5px 5px #FFEB30",
            border: "1px solid #121212",
          },
        }}
        endIcon={<EastIcon />}
        to="/IconsListPage"
      >
        Continue
      </Button>
    </div>
  );
};

export default IconStashIntro;
