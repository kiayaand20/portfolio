import './Project2.css'
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Project2() {
  return (
    <div className='project1-container'>
      <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="340"
        image=""
        alt="weather-img"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          fontFamily="Sen"
          textAlign="center"
          fontWeight="bold"
        >
          WHATEVER THE WEATHER
        </Typography>
        <Typography fontFamily="Sen" color="black" textAlign="center">
            <em>Whatever the Weather</em> is an application that allows users to view
            fun activity ideas based on the season. The user can select a season on the
            homepage, which will direct them to another page populated with activity names,
            an image, and a brief description. The user will also be allotted the opportunity
            to add their favorite seasonal activity.
          <hr />
          <strong>MADE WITH:</strong> Javascript, CSS
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">LIVE SITE</Button>
        <Button size="small">CODE</Button>
      </CardActions>
      </Card>
      </div>
  );
}

export default Project2