import React from "react";
import { Grid, Typography, useMediaQuery, Card } from "@mui/material";
import LoginForm from "./login.form";
import {
  styleContainer,
  styleLargeScreenContainer,
  styleLoginCard,
  styleTypography,
  styleTypographyContainer,
  styleLogo,
} from "./styles.login.page";

const LoginPage = () => {
  const is_small = useMediaQuery("(max-width: 800px");
  return (
    <Grid container sx={styleContainer}>
      {is_small ? (
        <>
          <Typography variant="h1" fontSize="40px" fontWeight={600}>
            My Family Circle
          </Typography>
          <Typography variant="h2" fontSize="30px" sx={{ margin: 1 }}>
            Welcome back!
          </Typography>
          <LoginForm />
        </>
      ) : (
        <Grid container sx={styleLargeScreenContainer}>
          <Grid item xs={12} sx={styleLogo}>
            <Typography variant={"h2"}>My Family Circle</Typography>
          </Grid>
          <Grid item xs={5}>
            <Card elevation={2} sx={styleLoginCard}>
              <LoginForm />
            </Card>
          </Grid>
          <Grid sx={{ display: "flex", alignItems: "flex-end" }} item xs={7}>
            <div style={styleTypographyContainer}>
              <Typography sx={styleTypography}>
                Social Media <br /> for the <br /> <i>Whole</i> Family
              </Typography>
            </div>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default LoginPage;
