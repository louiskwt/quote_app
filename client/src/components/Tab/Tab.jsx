import React from "react";
import { Box, Fab } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Tab = ({ iconType, id }) => {
  const TabType = {
    add: {
      icon: <AddIcon />,
      link: "/create",
      color: "primary",
    },
    edit: {
      icon: <ModeEditIcon />,
      link: `/update/${id}`,
      color: "success",
    },
  };

  return (
    <Box id="tab" sx={{ position: "fixed", bottom: "1rem", right: "0.5rem" }}>
      <Link to={TabType[iconType]["link"]}>
        <Fab data-testid="tab" color={TabType[iconType]["color"]}>
          {TabType[iconType]["icon"]}
        </Fab>
      </Link>
    </Box>
  );
};

export default Tab;
