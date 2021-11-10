import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function MediaCard({ country }) {
  console.log(country);

  return (
    <>
      {country.length == 0 ? (
        <div style={{display:'flex',alignItems:"center",justifyContent:'center'}}>
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        country.map((m) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={m.name}>
              <CardMedia
                component="img"
                height="140"
                image={m.flags}
                alt="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {m.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {m.offical}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {m.region}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })
      )}
    </>
  );
}
export default MediaCard;
