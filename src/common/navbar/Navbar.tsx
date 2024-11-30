import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";
import SearchBar from "../search/SearchBar";
import { maxWidth, viewPort } from "../../utils/responsive/ViewPort";
import { COLOR } from "../../utils/ColorConstant";

const Navbar = () => {
  const mobileView = maxWidth(viewPort.maxMobile);
  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        px: mobileView ? "6.25vw" : "3.25rem",
        borderBottom: mobileView ? "" : `2px solid ${COLOR.offWhite}`,
        background: "#FFFFFF",
      }}
    >
      <Toolbar
        sx={{
          "&.MuiToolbar-root": {
            paddingLeft: "unset",
            paddingRight: "unset",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: COLOR.white,
            minHeight: mobileView ? "2rem" : "3rem",
            borderBottom: COLOR.offWhite,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <SearchBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
