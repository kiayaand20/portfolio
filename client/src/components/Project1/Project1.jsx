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
          fontFamily="Gilda Display"
          textAlign="center"
          fontWeight="bold"
        >
          The Beauty Bar
        </Typography>
        <Typography fontFamily="Gilda Display" fontSize="19px" color="black" textAlign="center">
          <em>The Beauty Bar</em> is a web application that displays a wide
          variety of beauty products from popular and trendy brands.
          Users are able to search for items by product type, brand, price,
          and ingredient preferences. Products come from an outside Makeup API.
          <hr />
          <strong>MADE WITH:</strong> HTML, CSS, Javascript
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://kiayaand20.github.io/The-Beauty-Bar/" style={{textDecoration:'none'}}><Button size="large">LIVE SITE</Button></a>
        <a href="https://github.com/kiayaand20/The-Beauty-Bar" style={{textDecoration:'none'}}><Button size="large">CODE</Button></a>
      </CardActions>
      </Card>
      </div>
  );
}

export default Project1