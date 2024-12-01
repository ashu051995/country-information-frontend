import {
  Autocomplete,
  Box,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

import Navbar from "../../common/navbar/Navbar";
import CardView from "../../common/card/CardView";
import { COLOR } from "../../utils/ColorConstant";
import { maxWidth, viewPort } from "../../utils/responsive/ViewPort";
import Filter from "../../common/filter/Filter";
import { useEffect, useState } from "react";
import countryListService from "../../service/countryList.service";
import InfiniteScroll from "react-infinite-scroll-component";

const top100Films = [
  { label: "The", year: 1994 },
  { label: "father", year: 1972 },
  { label: "od", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

interface PaginationState {
  index: number;
  hasMore: boolean;
}

const CountryList = () => {
  const limit = 15;
  const mobileView = maxWidth(viewPort.maxMobile);
  const [countryList, setCountryList] = useState<any>();
  const [paginationState, setPaginationState] = useState<PaginationState>({
    index: 0,
    hasMore: false,
  });
  useEffect(() => {
    getCountryList();
  }, []);

  const getCountryList = async () => {
    const response = await countryListService.fetchCountryList({
      limit: limit,
      index: paginationState.index,
    });

    const updateCountryList = countryList
      ? [...countryList, ...response?.data]
      : response?.data;

    setCountryList(updateCountryList);

    const pStateUpdate = {
      index: paginationState.index + 1,
      hasMore: response?.data?.length % limit === 0 ? true : false,
    };
    setPaginationState(pStateUpdate);
  };
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
      {countryList ? (
        <InfiniteScroll
          dataLength={countryList?.length}
          next={() => {
            getCountryList();
          }}
          hasMore={paginationState.hasMore}
          loader={
            <Box
              sx={{
                textAlign: "center",
                marginTop: "1.25rem",
                overflow: "hidden",
              }}
            >
              <CircularProgress color="inherit" />
            </Box>
          }
        >
          <Box sx={{ marginTop: "1rem", display: "flex", flexWrap: "wrap" }}>
            {countryList.map((country: any) => {
              return (
                <Box sx={{ margin: "1rem" }}>
                  <CardView country={country} />
                </Box>
              );
            })}
          </Box>
        </InfiniteScroll>
      ) : (
        <Box
          sx={{ textAlign: "center", marginTop: "2rem", padding: "2rem" }}
        ></Box>
      )}
    </Box>
  );
};

export default CountryList;
