import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import countryListService from "../../service/countryList.service";
import { CountryDetailInterface } from "../../interface/interface";
import { COLOR } from "../../utils/ColorConstant";
// import classes from "./countryDetail.module.css";

const CountryDetails = () => {
  let { code } = useParams();

  const [countryDetails, setCountryDetails] =
    useState<CountryDetailInterface>();

  useEffect(() => {
    if (code) {
      fetchCountryDetail();
    }
  }, [code]);

  const fetchCountryDetail = async () => {
    if (code) {
      const response = await countryListService.fetchCountryDetail(code);
      if (response?.data) {
        setCountryDetails(response.data);
        console.log(response.data);
      }
    }
  };

  const currencyFetcher = (currency: Record<any, any>) => {
    const currencyValue = Object.values(currency)[0];
    console.log(currencyValue[0]);
    return `${currencyValue?.symbol}| ${currencyValue?.name}`;
  };

  return (
    <>
      <Box sx={{ paddingBottom: "1rem", paddingX: "0.6rem" }}>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: 700,
            textAlign: "center",
            paddingY: "1rem",
          }}
        >
          {countryDetails?.name?.common}
        </Typography>
        <img
          style={{ objectFit: "cover", marginBottom: "1rem" }}
          height="300px"
          width="100%"
          src={countryDetails?.flags?.svg}
          alt="image"
        />
        <Box>
          <Typography
            sx={{
              color: COLOR.grey,
              width: "100%",
              paddingY: "0.6rem",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "1rem",
              background: COLOR.textLightGrey,
            }}
          >
            Capital:
          </Typography>
          <Typography
            sx={{
              width: "100%",
              paddingY: "0.6rem",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "1rem",
              background: COLOR.lighGray,
            }}
          >
            {countryDetails?.capital}
          </Typography>
          <Typography
            sx={{
              color: COLOR.grey,
              width: "100%",
              paddingY: "0.6rem",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "1rem",
              background: COLOR.textLightGrey,
            }}
          >
            continents:
          </Typography>
          <Typography
            sx={{
              width: "100%",
              paddingY: "0.6rem",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "1rem",
              background: COLOR.lighGray,
            }}
          >
            {countryDetails?.continents[0]}
          </Typography>
          <Typography
            sx={{
              color: COLOR.grey,
              width: "100%",
              paddingY: "0.6rem",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "1rem",
              background: COLOR.textLightGrey,
            }}
          >
            Region:
          </Typography>
          <Typography
            sx={{
              width: "100%",
              paddingY: "0.6rem",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "1rem",
              background: COLOR.lighGray,
            }}
          >
            {`${countryDetails?.region}`}
          </Typography>
          <Typography
            sx={{
              color: COLOR.grey,
              width: "100%",
              paddingY: "0.6rem",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "1rem",
              background: COLOR.textLightGrey,
            }}
          >
            Population:
          </Typography>
          <Typography
            sx={{
              width: "100%",
              paddingY: "0.6rem",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "1rem",
              background: COLOR.lighGray,
            }}
          >
            {countryDetails?.population}
          </Typography>
          <Typography
            sx={{
              color: COLOR.grey,
              width: "100%",
              paddingY: "0.6rem",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "1rem",
              background: COLOR.textLightGrey,
            }}
          >
            Currency:
          </Typography>
          <Typography
            sx={{
              width: "100%",
              paddingY: "0.6rem",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "1rem",
              background: COLOR.lighGray,
            }}
          >
            {countryDetails?.currencies &&
              currencyFetcher(countryDetails?.currencies)}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CountryDetails;
