import React, { useState } from "react";
import HomePageNavigation from "../../components/navigation/dashboard.nav";
import { Grid, Box, useMediaQuery } from "@mui/material";
import UserBioCard from "../../components/profile_media/user.bio.card.component";
import ButtonMenuComponent from "../../components/menu/menu.button.dashboard.jsx";
import BottomNav from "../../components/navigation/bottom.nav.jsx";

const HomePage = () => {
  const [view, setView] = useState("viewPosts");

  const mobileView = useMediaQuery("max-width: 599px");
  const desktopView = useMediaQuery("(min-width: 600px)");
  const columns = desktopView ? 6 : 9;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
        width: "100svw",
      }}
    >
      {/* Row 1 */}
      <Grid item xs={12} sx={{ padding: 0, position: "static" }}>
        <HomePageNavigation />
      </Grid>

      {/* Row 2 */}

      <Box
        sx={{
          width: "90vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <UserBioCard cardWidth={"90%"} />
      </Box>

      <Box
        sx={{
          width: "90vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <ButtonMenuComponent cardWidth={"90%"} />
      </Box>
      <BottomNav />

      {/* <Grid
        item
        md={2.5}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button onClick={(e) => setView("viewPosts")}>
          View Journal Posts
        </Button>
        <Button onClick={handleChallengeButton}>View Challenges</Button>
        <Button onClick={handleDiscussionButton}>View Discussion Board</Button>
      </Grid> */}
    </Grid>
  );
};

export default HomePage;
