import './Project4.css'
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function Project4() {
  return (
    <div className='project4-container'>
      <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="340"
        image="https://res.cloudinary.com/kacloud20/image/upload/v1644364931/Portfolio/New_Website_Blue_Mockup_Instagram_-_Laptop_5_ch93ud.png"
        alt="black-archives-img"
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
          blackArchives
        </Typography>
        <Typography fontFamily="Gilda Display" fontSize="18px" color="black" textAlign="center">
            <em>blackArchives</em> is an online database devoted to celebrating the work of Black Film Directors.
            The application will feature information on each director and details about their films. Users can view
            Director and Film information; however, due to authentication, users will not be able to add, update and
            delete directors or films from the list until signed in.
          <hr />
          <strong>MADE WITH:</strong> HTML, CSS, Javascript, Python, React
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://blackarchives.netlify.app/"  rel="noreferrer" target="_blank" style={{textDecoration:'none'}}><Button size="large">LIVE SITE</Button></a>
        <a href="https://github.com/kiayaand20/blackarchives"  rel="noreferrer" target="_blank" style={{textDecoration:'none'}}><Button size="large">CODE</Button></a>
      </CardActions>
      </Card>
      </div>
  );
}

export default Project4