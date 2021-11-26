import  Typography  from "@material-ui/core/Typography";
import React from 'react'
import Cardcontent from "../component/Cardcontent";
import { Grid } from "@material-ui/core";
//{window.location.href = "https://google.com/contact"} {useEffect}
const Cardprofile = () => {
    return (
    <Typography>
        {<br/>}
        <Grid container style={{padding: '10px'}}>
            <Grid xs={12} sm={4} >
                <Cardcontent name='Ronald  Velarde' description='I am still learning about web developemnt but I am looking forward to master all the tools. I am very adaptive and persistant on the current things that I learn' link= 'My Profile' /> 
            </Grid>
            
            <Grid xs={12} sm={4}>
                <Cardcontent name='Ralph Santolorin' description='I still new to the concept of web developement but I am still working hard to understand all the things we do in this bootcamp.' link= 'My Profile'/>
            </Grid>

            <Grid xs={12} sm={4}>
                <Cardcontent name='Ryan Gerome Regis' description='I already have some background about some of the front-end tools like JavaScript. However, I am on the process of learning the other tools on web development. I am a very resourceful and hardworking person. ' link= 'My Profile'/>
            </Grid>
        </Grid>
    </Typography>
               
      
    )
}

export default Cardprofile
