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
    <div className='project2-container'>
      <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="340"
        image="https://res.cloudinary.com/kacloud20/image/upload/v1642548617/Portfolio/New_Website_Blue_Mockup_Instagram_-_Laptop_2_aazsia.png"
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
        <Typography fontFamily="Sen" fontSize="16.5px" color="black" textAlign="center">
            <em>Whatever the Weather</em> is an online application that allows users to view
            fun activity ideas based on the season. The user can select a season on the
            homepage, which will direct them to another page populated with activity names,
            an image, and a brief description. The user can also
            add their favorite seasonal activity via an online form.
          <hr />
          <strong>MADE WITH:</strong> Javascript, React, Material-UI, & CSS
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://whatever-theweather.netlify.app/" style={{textDecoration:'none'}}><Button size="medium">LIVE SITE</Button></a>
        <a href="https://github.com/kiayaand20/Whatever-the-Weather" style={{textDecoration:'none'}}><Button size="medium">CODE</Button></a>
      </CardActions>
        </Card>
      </div>
  );
}

export default Project2