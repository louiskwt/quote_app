import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CreateIcon from "@mui/icons-material/Create";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

import "./Header.css";
import { Divider } from "@mui/material";

const Header = () => {
  // user context
  const { userState, logoutUser } = useContext(UserContext);

  const drawerId = userState.token ? "drawer" : "hiddenDrawer";

  const headerClass = userState.token ? "header" : "hidden";

  // Drawer state
  const [drawerState, setDrawerState] = useState(false);

  // toggle drawer function
  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setDrawerState(open);
  };

  let drawer = (
    <>
      <IconButton id={drawerId} onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer anchor={"left"} open={drawerState} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${userState.name}`}
                secondary={new Date().toDateString()}
              />
            </ListItem>
          </List>

          <Divider />

          <List>
            <Link to="/" className="header__link">
              <ListItem button>
                <ListItemIcon>
                  <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText primary="報價單" />
              </ListItem>
            </Link>
            <Link to="/create" className="header__link">
              <ListItem button>
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="製作報價單" />
              </ListItem>
            </Link>
            <ListItem button onClick={logoutUser}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="登出" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );

  return <div className={headerClass}>{drawer}</div>;
};

export default Header;
