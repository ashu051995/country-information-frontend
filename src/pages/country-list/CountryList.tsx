import { Autocomplete, Box, TextField, Button } from "@mui/material";

import Navbar from "../../common/navbar/Navbar";
import CardView from "../../common/card/CardView";
import { COLOR } from "../../utils/ColorConstant";
import { maxWidth, viewPort } from "../../utils/responsive/ViewPort";
import Filter from "../../common/filter/Filter";

const top100Films = [
  { label: "The", year: 1994 },
  { label: "father", year: 1972 },
  { label: "od", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const CountryList = () => {
  const mobileView = maxWidth(viewPort.maxMobile);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", px: "1rem" }}>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          marginTop: "1rem",
        }}
      >
        <Filter filterName="Region" />
        {/* <Autocomplete
          disablePortal
          multiple
          options={top100Films}
          sx={{
            maxWidth: "10rem",
            width: "100%",
            height: "2rem",
            borderRadius: "20px",
            "& .MuiOutllinedInput-root .muiAutocomplete-input": {
              padding: "4px 4px 7.5px 5px",
              height: "1rem",
            },
          }}
          renderInput={(params) => (
            <TextField
              sx={{
                "& .MuiInputBase-root": {
                  //   background: COLOR.lighGray,
                  borderRadius: "1rem",
                  height: mobileView ? "2rem" : "2.8rem",
                },
              }}
              {...params}
              label=""
            />
          )}
        /> */}
      </Box>
      <Box sx={{ marginTop: "1rem" }}>
        <CardView />
      </Box>
      <Box
        sx={{
          marginY: "1rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{ height: "3rem", borderRadius: "0.6rem" }}
          variant="contained"
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default CountryList;
