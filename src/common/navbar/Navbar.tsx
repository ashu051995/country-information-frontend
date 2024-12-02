import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Toolbar,
} from "@mui/material";
import { maxWidth, viewPort } from "../../utils/responsive/ViewPort";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";
import { COLOR } from "../../utils/ColorConstant";

interface NavbarProps {
  searchValue: string;
  searchType: string;
  handleSearchType: (event: string) => void;
  handleSearch: (value: string) => void;
}

const Navbar = (props: NavbarProps) => {
  const mobileView = maxWidth(viewPort.maxMobile);
  const { searchValue, searchType, handleSearch, handleSearchType } = props;

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
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: "1rem",
            }}
          >
            <InputLabel id="demo-simple-select-label">Search Type</InputLabel>
            <Box sx={{ marginX: "0.6rem" }}>
              <Select
                sx={{ width: "8rem", height: "2.5rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchType}
                label="Age"
                onChange={(e) => {
                  handleSearchType(e?.target?.value);
                }}
                aria-placeholder="Search Type"
              >
                <MenuItem value={"name"}>Name</MenuItem>
                <MenuItem value={"capital"}>Capital</MenuItem>
                <MenuItem value={"region"}>Region</MenuItem>
                <MenuItem value={"timeZone"}>TimeZone</MenuItem>
              </Select>
            </Box>
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
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: COLOR.grey,
                  },
                "& fieldset .MuiOutlinedInput-notchedOutline": {
                  borderColor: COLOR.grey,
                },
              }}
              value={searchValue}
              onChange={(e) => {
                handleSearch(e?.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: searchValue && (
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleSearch("")}>
                      <CloseIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
