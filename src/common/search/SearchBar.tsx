import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { maxWidth, viewPort } from "../../utils/responsive/ViewPort";
import { COLOR } from "../../utils/ColorConstant";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";

const Navbar = () => {
  const mobileView = maxWidth(viewPort.maxMobile);
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearch = () => {};
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: "1rem",
      }}
    >
      <TextField
        placeholder="search"
        fullWidth
        type="text"
        variant="outlined"
        autoComplete="off"
        sx={{
          mb: 0,
          width: "100%",
          maxWidth: false ? "none" : "35.5rem",
          "& .MuiInputBase-root": {
            background: COLOR.lighGray,
            borderRadius: "1rem",
            height: mobileView ? "2rem" : "2.8rem",
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOR.grey,
          },
          "& fieldset .MuiOutlinedInput-notchedOutline": {
            borderColor: COLOR.grey,
          },
        }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearch}
        onClick={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: searchValue && (
            <InputAdornment position="end">
              <IconButton onClick={() => setSearchValue("")}>
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Navbar;
