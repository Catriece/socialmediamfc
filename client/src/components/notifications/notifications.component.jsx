// Gather and display unread notifications for current user

import React, { useState, useEffect } from "react";
import { Box, Card, Divider, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import PeopleAltRounded from "@mui/icons-material/PeopleAltRounded";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";

const boxStyling = {
  padding: "15px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
};

const linkStyling = {
  textDecoration: "none",
  padding: "2px",
};

const iconStyling = {
  height: "25px",
  width: "25px",
  ml: "5px",
};

const NotificationsComponent = () => {
  const [total, setTotal] = useState(0);
  const [unreadMessages, setUnreadMessages] = useState(6);
  const [circleRequests, setCircleRequests] = useState(5); // for Owners
  const [discussionBoardComments, setDiscussionBoardComments] = useState(4);
  const [challengeComments, setChallengeComments] = useState(3);
  const [postComments, setPostComments] = useState(1);
  const [newMembers, setNewMembers] = useState(0); // Update

  useEffect(() => {
    setTotal(
      unreadMessages +
        circleRequests +
        discussionBoardComments +
        challengeComments +
        postComments
    );

    console.log("Total: ", total);
  }, [total]);

  return (
    <>
      {total ? (
        <Box sx={boxStyling}>
          <Box
            style={{
              display: "flex",
            }}
          >
            {unreadMessages ? (
              <Link style={linkStyling}>
                <Badge color="primary" badgeContent={unreadMessages}>
                  <PeopleAltRounded sx={iconStyling} />
                </Badge>
              </Link>
            ) : null}
            {circleRequests ? (
              <Link style={linkStyling}>
                <Box>
                  <Badge color="primary" badgeContent={circleRequests}>
                    <SupervisedUserCircleRoundedIcon sx={iconStyling} />
                  </Badge>
                </Box>
              </Link>
            ) : null}
            {discussionBoardComments ? (
              <Link style={linkStyling}>
                <Box>
                  <Badge color="primary" badgeContent={discussionBoardComments}>
                    <CommentRoundedIcon sx={iconStyling} />
                  </Badge>
                </Box>
              </Link>
            ) : null}
            {challengeComments ? (
              <Link style={linkStyling}>
                <Box>
                  <Badge color="primary" badgeContent={challengeComments}>
                    <CommentRoundedIcon sx={iconStyling} />
                  </Badge>
                </Box>
              </Link>
            ) : null}
            {postComments ? (
              <Link style={linkStyling}>
                <Box>
                  <Badge color="primary" badgeContent={postComments}>
                    <CommentRoundedIcon sx={iconStyling} />
                  </Badge>
                </Box>
              </Link>
            ) : null}
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default NotificationsComponent;
