import React, { useState } from "react";
import {
  FormControl,
  InputBase,
  InputAdornment,
  Box,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ appBarHeight }) => {
  const [searching, setSearching] = useState("");

  const handleSearchButton = (e) => console.log("Searching for", searching);

  return (
    <Box
      component="form"
      sx={{
        border: "1px solid black",
        borderRadius: "25px",
        width: "30%",
        ml: 3,
        backgroundColor: "#d9d9d9",
      }}
    >
      <FormControl
        fullWidth
        sx={{
          height: "inherit",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <InputBase
          id="adornment-search"
          placeholder="Search"
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                type="button"
                aria-label="Search"
                onClick={handleSearchButton}
              >
                <SearchIcon sx={{ mr: 1 }} aria-label="search" />
              </IconButton>
            </InputAdornment>
          }
          sx={{
            marginLeft: 2.5,
          }}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
