import './Project1.css'
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function Project1() {
  return (
    <div className='project1-container'>
      <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="340"
        image="https://res.cloudinary.com/kacloud20/image/upload/v1642540533/Portfolio/New_Website_Blue_Mockup_Instagram_-_Laptop_1_omdtls.png"
        alt="beauty-bar-img"
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
          THE BEAUTY BAR
        </Typography>
        <Typography fontFamily="Sen" color="black" textAlign="center">
          <em>The Beauty Bar</em> is an application that displays a variety
          of beauty products by category. Users will be able to search by
          product type, brand, price, and ingredient preferences. Products come
          from an outside Makeup API.
          <hr />
          <strong>MADE WITH:</strong> HTML, CSS, Javascript
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

export default Project1