import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";
import { COLOR } from "../../utils/ColorConstant";
import { useNavigate } from "react-router-dom";
import { add, sub, format } from "date-fns";

interface CardProps {
  country: any;
}
export default function CardView(props: CardProps) {
  const { name, code, capital, population, flags, region, timezones } = {
    ...props?.country,
  };

  const formatedOffSet = timezones[0]?.replace?.("UTC", "")?.split(":");
  const navigate = useNavigate();

  let dateTimeZoned = new Date();
  if (formatedOffSet[0] && parseInt(formatedOffSet[0]) > 0) {
    dateTimeZoned = add(new Date(), {
      hours: parseInt(formatedOffSet[0]),
      minutes: parseInt(formatedOffSet[1]),
    });
  } else if (formatedOffSet[0]) {
    dateTimeZoned = sub(new Date(), {
      hours: parseInt(formatedOffSet[0]),
      minutes: parseInt(formatedOffSet[1]),
    });
  }

  const draftDate = format(dateTimeZoned, "MMM daa, paa");
  console.log("formattime", draftDate);

  return (
    <div
      onClick={() => {
        navigate(`/${code}`);
      }}
    >
      <Card sx={{ width: 320 }}>
        <CardActionArea>
          <Box sx={{ display: "flex" }}>
            <img
              style={{ objectFit: "cover" }}
              height="140px"
              width="100px"
              src={flags?.svg}
              alt={flags?.alt}
            />
            <Box>
              <Box sx={{ display: "flex", marginLeft: "0.6rem" }}>
                <Typography>Capital:</Typography>
                <Typography
                  sx={{
                    marginLeft: "0.6rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: COLOR.grey,
                  }}
                >
                  {capital}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginLeft: "0.6rem" }}>
                <Typography>Population:</Typography>
                <Typography
                  sx={{
                    marginLeft: "0.6rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: COLOR.grey,
                  }}
                >
                  {population}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginLeft: "0.6rem" }}>
                <Typography>region:</Typography>
                <Typography
                  sx={{
                    marginLeft: "0.6rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: COLOR.grey,
                  }}
                >
                  {region}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginLeft: "0.6rem" }}>
                <Typography>code:</Typography>
                <Typography
                  sx={{
                    marginLeft: "0.6rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: COLOR.grey,
                  }}
                >
                  {code}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginLeft: "0.6rem" }}>
                <Typography>Time:</Typography>
                <Typography
                  sx={{
                    marginLeft: "0.6rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: COLOR.grey,
                  }}
                >
                  {draftDate}
                </Typography>
              </Box>
            </Box>
          </Box>

          <CardContent>
            <Typography variant="h5">{name?.common}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
