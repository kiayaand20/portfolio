import './Project3.css'
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function Project3() {
  return (
    <div className='project3-container'>
      <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="340"
        image="https://res.cloudinary.com/kacloud20/image/upload/v1642548621/Portfolio/New_Website_Blue_Mockup_Instagram_-_Laptop_3_kdkflp.png"
        alt="sock2-img"
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
          SOCK²
        </Typography>
        <Typography fontFamily="Sen" color="black" textAlign="center">
            <em>Sock²</em> is an aspiring shopping application that features creative
            design socks. Users are able to create an account, browse through all
            sock inventory, and view specific sock details. Similarly, the app provides the
            functionality of adding, editing, and deleting a sock. The newly added socks will
            be included on the new arrivals page. 
          <hr />
          <strong>MADE WITH:</strong> Javascript, React, Express/Mongoose, Material-UI, & CSS
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://socksquared.netlify.app/" style={{textDecoration:'none'}}><Button size="medium">LIVE SITE</Button></a>
        <a href="https://github.com/kiayaand20/sock2-app" style={{textDecoration:'none'}}><Button size="medium">CODE</Button></a>
      </CardActions>
      </Card>
      </div>
  );
}

export default Project3