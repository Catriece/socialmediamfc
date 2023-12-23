import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";

import { Badge } from "@mui/material";
import AuthContext from "../../auth/authContext";

const UserBioCard = ({ cardWidth, src, alt }) => {
  const { user } = useContext(AuthContext);
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState(null);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (user) {
      setUsername(user.userInfo.username);
      setRole(user.userInfo.role);
    }
  }, [user]);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5050/api/user/userinfo?username=${username}`)
        .then((res) => {
          if (res.status === 200 && res.data !== false) {
            setProfilePicture(res.data[0].profile_picture);
            setName(res.data[0].name);
            setAge(
              dayjs().diff(dayjs(res.data[0].birthday, "YYYY-MM-DD"), "year")
            );
          }
        });
    } catch (err) {
      console.error("Error fetching user information", err);
    }
  }, [username]);

  return (
    <Card
      elevation={2}
      role="region"
      aria-label="User Biography Card"
      sx={{ width: cardWidth, backgroundColor: "#efefef" }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar
          src={profilePicture}
          alt={name}
          role="region"
          aria-label="User image or Initial"
          sx={{ "--Avatar-size": "10rem" }}
        />
        <Chip
          size="md"
          variant="soft"
          color="primary"
          role="region"
          aria-label="Account Type"
          sx={{
            mt: -1,
            mb: 1,
            border: "3px solid",
            borderColor: "background.surface",
          }}
        >
          {role}
        </Chip>
        <Typography
          role="region"
          aria-label="Users name and age"
          level="title-lg"
        >{`${name}, ${age}`}</Typography>
      </CardContent>
      <CardOverflow sx={{ backgroundColor: "#fff" }}>
        <CardActions buttonFlex="1">
          <ButtonGroup
            variant="outlined"
            sx={{ bgcolor: "background.surface" }}
          >
            {/* Notifications and BadgeContnent will share same prop name: notifications */}
            <Button role="button" aria-label={`Notifications 9`}>
              <Badge
                badgeContent={10}
                color="secondary"
                variant="standard"
                max={9}
              >
                Notifications
                {/* <NotificationsRoundedIcon sx={{ height: 25, width: 25 }} /> */}
              </Badge>
            </Button>

            <Button role="link" aria-label="Edit">
              Edit
            </Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
};

export default UserBioCard;
