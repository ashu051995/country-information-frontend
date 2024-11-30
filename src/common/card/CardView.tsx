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

interface CardProps {
  country: any;
}
export default function CardView(props: CardProps) {
  const { name, code, capital, population, flags, region } = {
    ...props?.country,
  };
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/${code}`);
      }}
    >
      <Card sx={{ width: 300 }}>
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
                  {code}
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
