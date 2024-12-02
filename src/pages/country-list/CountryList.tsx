import { Box, CircularProgress } from "@mui/material";

import Navbar from "../../common/navbar/Navbar";
import CardView from "../../common/card/CardView";
import { maxWidth, viewPort } from "../../utils/responsive/ViewPort";
import Filter from "../../common/filter/Filter";
import { useEffect, useState } from "react";
import countryListService from "../../service/countryList.service";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../../hooks/useDebounce";
import OverlayLoader from "../../common/overlay-loader/OverLoader";

// const top100Films = [
//   { label: "The", year: 1994 },
//   { label: "father", year: 1972 },
//   { label: "od", year: 1974 },
//   { label: "The Dark Knight", year: 2008 },
//   { label: "12 Angry Men", year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: "Pulp Fiction", year: 1994 },
// ];

interface PaginationState {
  index: number;
  hasMore: boolean;
}

const CountryList = () => {
  const [countryList, setCountryList] = useState<any>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("name");
  const [loading, setLoading] = useState<boolean>(false);
  const [paginationState, setPaginationState] = useState<PaginationState>({
    index: 0,
    hasMore: false,
  });

  const limit = 15;
  const mobileView = maxWidth(viewPort.maxMobile);
  const debounceInput = useDebounce(searchValue, 300);

  useEffect(() => {
    getCountryList();
  }, []);

  useEffect(() => {
    if (debounceInput.length >= 3) {
      searchCountryList();
    } else if (debounceInput.length < 1) {
      getCountryList(true);
    }
  }, [debounceInput]);

  const searchCountryList = async (isScrolled?: boolean) => {
    setLoading(true);
    const response = await countryListService.searchCountrylist({
      limit: limit,
      index: paginationState.index,
      name: searchValue.toLocaleLowerCase(),
      searchType: searchType,
    });
    setLoading(false);
    const updateCountryList =
      countryList && isScrolled
        ? [...countryList, ...response?.data]
        : response?.data;

    const pStateUpdate = {
      index: isScrolled ? paginationState.index + 1 : 0,
      hasMore: response?.data?.length % limit === 0 ? true : false,
    };
    setCountryList(updateCountryList);
    setPaginationState(pStateUpdate);
  };

  const getCountryList = async (resetPagination?: boolean) => {
    setLoading(true);
    const response = await countryListService.fetchCountryList({
      limit: limit,
      index: paginationState.index,
    });
    setLoading(false);
    const updateCountryList =
      countryList && !resetPagination
        ? [...countryList, ...response?.data]
        : response?.data;

    setCountryList(updateCountryList);

    const pStateUpdate = {
      index: resetPagination ? 0 : paginationState.index + 1,
      hasMore: response?.data?.length % limit === 0 ? true : false,
    };
    setPaginationState(pStateUpdate);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchType = (value: string) => {
    setSearchType(value);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", px: "1rem" }}>
      <OverlayLoader show={loading} />
      <Navbar
        searchType={searchType}
        searchValue={searchValue}
        handleSearch={handleSearch}
        handleSearchType={handleSearchType}
      />
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          marginTop: "1rem",
        }}
      >
        <Filter filterName="Region" />
      </Box> */}
      {countryList ? (
        <InfiniteScroll
          dataLength={countryList?.length}
          next={() => {
            searchValue ? searchCountryList(true) : getCountryList();
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
