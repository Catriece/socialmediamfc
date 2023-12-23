import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  Box,
  Card,
  Avatar,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Divider,
  Button,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import AuthContext from "../../auth/authContext";

const containerStyling = {
  display: "flex",
  flexDirection: "column",
  border: ".5px soild black",
  mt: 3,
};

const ShowJournalPostComponent = () => {
  const [posts, setPosts] = useState(null);
  const { user } = useContext(AuthContext);
  const [familyPosts, setFamilyPosts] = useState(null);
  const [circleMembers, setCircleMembers] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (user) {
      console.log("User: ", user);
      setFamilyPosts(user.userInfo.familyPosts);
      setCircleMembers(user.userInfo.familyCircle);
      setCurrentUser(user.userInfo);
    }
  }, [user]);

  useEffect(() => {
    if ((familyPosts, circleMembers)) {
      const posts = familyPosts.map((post) => {
        const member = circleMembers.find(
          (member) => member.id === post.user_id
        );
        return {
          ...post,
          name: member.name,
          img: member.profile_picture,
        };
      });
      setInfo(posts);
    }
  }, [familyPosts, circleMembers]);

  useEffect(() => {
    if (info) {
      console.log("Posts: ", info);
    }
  }, []);

  return (
    <>
      {currentUser ? (
        <Box
          role="region"
          aria-labelledby="dailyPostSection"
          sx={containerStyling}
        >
          <Card elevation={3} sx={{ height: "100px", borderRadius: "10px" }}>
            <CardContent
              id="User"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 1.5,
              }}
            >
              <Box>
                <Avatar
                  sx={{ height: "40px" }}
                  src={currentUser.profilePicture}
                />
              </Box>
              <Box sx={{ ml: 2, width: "100%" }}>
                <Button
                  variant="outlined"
                  id="dailyPostSection"
                  aria-label={`What's on your mind, ${currentUser.firstName}?`}
                  sx={{
                    width: "inherit",
                    height: "40px",
                    borderRadius: "15px",
                    color: "black",
                    border: ".5px solid black",
                  }}
                >
                  <Typography
                    variant="small"
                    sx={{ textTransform: "lowercase", lineHeight: "1rem" }}
                  >
                    {`What's on your mind, ${currentUser.firstName}?`}{" "}
                  </Typography>
                </Button>
              </Box>
            </CardContent>
            <Divider />
            <CardActions />
          </Card>
          {info
            ? info.map((post, index) => (
                <Card
                  key={post.id}
                  elevation={3}
                  sx={{ borderRadius: "10px", mt: 3 }}
                >
                  <CardHeader
                    avatar={<Avatar src={post.img} />}
                    action={
                      <IconButton aria-label="Menu">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={post.name}
                    subheader={dayjs(post.timestamp).format(
                      "MM-DD-YYYY HH:mm a"
                    )}
                    sx={{
                      textAlign: "left",
                      mt: 1,
                    }}
                  />
                  <CardContent sx={{ textAlign: "left", ml: 2 }}>
                    {post.entry}
                  </CardContent>
                  <Divider />
                  <CardActions
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <IconButton aria-label="Thumbs Up - Like">
                      <ThumbUpRoundedIcon />
                    </IconButton>
                    <IconButton aria-label="Comment">
                      <InsertCommentIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              ))
            : null}
        </Box>
      ) : null}
    </>
  );
};

export default ShowJournalPostComponent;
