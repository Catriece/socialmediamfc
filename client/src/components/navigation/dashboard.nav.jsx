import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AppBar, Box, Toolbar, useMediaQuery } from "@mui/material";
import SearchBar from "./search.component";
import logo from "../../assets/logo.png";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AvatarMenu from "../menu/menu.mobile.dashboard";

const iconStyling = {
  height: "25px",
  width: "25px",
  border: ".5px solid #d9d9d9",
  padding: "6px",
  borderRadius: "50%",
  backgroundColor: "#777",
  ml: 1,
};

const HomePageNavigation = () => {
  const mdScreen = useMediaQuery("(min-width: 800px)");
  const [profilePicture, setProfilePicture] = useState(null);

  const { id } = useParams();

  return (
    <Box sx={{ display: "flex", height: "60px" }}>
      <AppBar
        aria-label="Top Navigation Bar"
        id="App Bar"
        style={{
          height: "inherit",
          backgroundColor: "#efefef",
          position: "fixed",
        }}
      >
        <Toolbar
          role="region"
          aria-label="Navigation"
          style={{ height: "inherit" }}
        >
          <a
            href={`/user-account/${id}/profile`}
            style={{ height: "inherit" }}
            aria-label="Logo Link to Profile"
          >
            <img
              src={logo}
              alt="My Family Circle Logo"
              style={{ height: "inherit" }}
            />
          </a>
          <h1 role="heading" style={{ color: "#000", fontSize: "large" }}>
            My Family Circle
          </h1>
          {mdScreen ? <SearchBar /> : null}
          <Box sx={{ flexGrow: 1 }} />
          {mdScreen ? (
            <>
              <AddRoundedIcon
                aria-label="Add Icon"
                aria-hidden={mdScreen ? "false" : "true"}
                role={mdScreen ? "button" : ""}
                tabIndex={mdScreen ? "0" : "-1"}
                sx={iconStyling}
              />
              <QuestionAnswerRoundedIcon
                aria-label="Messages Link"
                aria-hidden={mdScreen ? "false" : "true"}
                role={mdScreen ? "link" : ""}
                tabIndex={mdScreen ? "0" : "-1"}
                sx={iconStyling}
              />
              <NotificationsRoundedIcon
                aria-label="Notifications Icon"
                aria-hidden={mdScreen ? "false" : "true"}
                role={mdScreen ? "button" : ""}
                tabIndex={mdScreen ? "0" : "-1"}
                sx={iconStyling}
              />
              {profilePicture ? (
                <Avatar
                  aria-label="User Profile Picture"
                  aria-hidden={mdScreen ? "false" : "true"}
                  role={mdScreen ? "link" : ""}
                  tabIndex={mdScreen ? "0" : "-1"}
                />
              ) : (
                <PersonRoundedIcon
                  aria-label="Avatar Icon"
                  aria-hidden={mdScreen ? "false" : "true"}
                  role={mdScreen ? "link" : ""}
                  tabIndex={mdScreen ? "0" : "-1"}
                  sx={iconStyling}
                />
              )}
            </>
          ) : (
            <AvatarMenu />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HomePageNavigation;
