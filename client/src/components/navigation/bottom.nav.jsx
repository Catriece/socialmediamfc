// Bottom navigation for mobile devices

import React, { useState, useEffect } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const BottomNav = () => {
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { md: "none" },
      }}
    >
      <BottomNavigation
        sx={{ width: "100vw" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Circles"
          value="circles"
          aria-label="Circles"
          role="button"
          icon={<SupervisorAccountRoundedIcon />}
        />
        <BottomNavigationAction
          label="Notifications"
          value="notifications"
          aria-label="Notifications"
          role="button"
          icon={<NotificationsRoundedIcon />}
        />
        <BottomNavigationAction
          label="Messages"
          value="messages"
          aria-label="Messages"
          role="button"
          icon={<ForumRoundedIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          aria-label="Profile"
          role="button"
          icon={<PersonRoundedIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;
