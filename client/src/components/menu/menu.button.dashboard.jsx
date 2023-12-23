// TODO: Initial load should show blue outline around posts button

import React, { useState, useEffect, useContext, Fragment } from "react";
import {
  Card,
  Box,
  Button,
  ButtonGroup,
  CardHeader,
  CardContent,
} from "@mui/material";
import DynamicFeedRoundedIcon from "@mui/icons-material/DynamicFeedRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ChecklistRtlRoundedIcon from "@mui/icons-material/ChecklistRtlRounded";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";
import AuthContext from "../../auth/authContext";
import ShowJournalPostComponent from "../posts/posts.component";

const buttonStyling = {
  width: "25.5%",
  fontSize: "small",
  border: ".0125rem #aaa solid",
  padding: 2,
};

const ButtonMenuComponent = ({
  cardWidth,
  getPosts,
  getMemories,
  getDiscussionBoards,
  getChallenges,
}) => {
  const { user } = useContext(AuthContext);
  const [buttonName, setButtonName] = useState("Posts");
  const [posts, setPosts] = useState(null);
  const [memories, setMemories] = useState(null);
  const [discussionBoards, setDiscussionBoards] = useState(null);
  const [challenges, setChallenges] = useState(null);
  const [showContent, setShowContent] = useState(buttonName);

  useEffect(() => {
    if (user) {
      console.log("UI", user.userInfo);
      setPosts(user.userInfo.familyPosts);
    }
  });

  //   functions for buttons
  const handlePostButton = () => {
    setButtonName("Posts");
  };

  const handleMemoriesButton = () => {
    setButtonName("Memories and Milestones");
  };

  const handleDiscussionBoardButton = () => {
    setButtonName("Discussion Boards");
  };

  const handleChallengesButton = () => {
    setButtonName("Challenges");
  };

  return (
    <Box
      role="region"
      aria-labelledby="dynamicLabel"
      style={{ display: "flex", flexDirection: "column", width: cardWidth }}
    >
      <Card
        elevation={2}
        id="Menu-Navigation"
        role="region"
        aria-label="Menu Navigation"
        sx={{ backgroundColor: "#fff" }}
      >
        <CardHeader
          subheader={buttonName}
          id="dynamicLabel"
          role="heading"
          aria-level="2"
          sx={{
            padding: 1,
            bgcolor: "#efefef",
            ".MuiCardHeader-subheader": { color: "#333", fontWeight: 600 },
          }}
        />
        <CardContent sx={{ padding: "20px 8px 0 8px" }}>
          <ButtonGroup
            sx={{
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Button
              type="button"
              aria-label="Show Post"
              onClick={handlePostButton}
              sx={buttonStyling}
            >
              {<DynamicFeedRoundedIcon sx={{ color: "#444" }} />}
            </Button>
            <Button
              type="button"
              aria-label="Show Memories"
              onClick={handleMemoriesButton}
              sx={buttonStyling}
            >
              {<PortraitRoundedIcon sx={{ color: "#444" }} />}
            </Button>
            <Button
              type="button"
              aria-label="Show Discussion Board"
              onClick={handleDiscussionBoardButton}
              sx={buttonStyling}
            >
              {<ChatRoundedIcon sx={{ color: "#444" }} />}
            </Button>
            <Button
              type="button"
              aria-label="Show Challenges"
              onClick={handleChallengesButton}
              sx={buttonStyling}
            >
              {<ChecklistRtlRoundedIcon sx={{ color: "#444" }} />}
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
      <Box>
        {buttonName == "Posts" && <ShowJournalPostComponent />}
        {buttonName == "Challenge" && <ShowChallengesComponent />}
        {buttonName == "Discussion" && <ShowJournalPostComponent />}
      </Box>
    </Box>
  );
};

export default ButtonMenuComponent;
