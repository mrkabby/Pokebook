
import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const DetailTabs = ({ selectedTab, handleChange }) => {
  return (
    <>
      <Box sx={{ width: "370px", height: "60px" }} className="rounded-full mt-11 bg-[#E1E1E1]">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          centered
          aria-label="basic tabs example"
          textColor="black"
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          <Tab
            label="About"
            sx={{
              px: "30px",
              color: "black",
              margin: "6px",
              borderRadius: "30px",
              backgroundColor: selectedTab === 0 ? "white" : "inherit",
            }}
          />
          <Tab
            label="Stats"
            sx={{
              px: "30px",
              margin: "6px",
              borderRadius: "30px",
              backgroundColor: selectedTab === 1 ? "white" : "inherit",
            }}
          />
          <Tab
            label="Similar"
            sx={{
              px: "30px",
              margin: "6px",
              borderRadius: "30px",
              backgroundColor: selectedTab === 2 ? "white" : "inherit",
            }}
          />
        </Tabs>
      </Box>
    </>
  );
};

export default DetailTabs;
