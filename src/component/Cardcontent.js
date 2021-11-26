import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import { Link } from '@material-ui/core';
//ito nasa taas

const Cardcontent = (props) => {
    return (
        <Card sm={{ maxWidth: 300, maxHeight: 450}} style={{padding: '0', backgroundColor: 'beige', margin: '20px', height: '450px'}}>
        <CardMedia
          component="img"
          height="150"
          image={require('./profile.jpg')}
         
          alt="Profile pic"
        />
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <Typography >
            {<br/>}
          Check out my portfolio below.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://github.com/RonV833/clinical" target="_blank">{props.link}</Button>
       
        </CardActions>
      </Card>
    )
}

export default Cardcontent
