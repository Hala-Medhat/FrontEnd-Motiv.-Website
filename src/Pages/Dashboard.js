import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Button, Stack,IconButton,Grid ,CircularProgress} from "@mui/material"
import {CgArrowsVAlt} from "react-icons/cg";
import BoltIcon from '@mui/icons-material/Bolt';
import {IoIosWater} from "react-icons/io";
import {GiCarWheel} from "react-icons/gi";
import ProgressBar from 'react-customizable-progressbar'
import OneCar from '../Components/DashBoard/OneCar';
import Car7 from '../Images/Car7.png'
import Car8 from '../Images/Car8.png'
import Car9 from '../Images/Car9.png'
import MilesStatistics from '../Components/DashBoard/MilesStatistics'
import CarStatistics from '../Components/DashBoard/Car Statistics'
import './Dash.css'


function Dashboard() {
    const cars = [{
        name:"Mini Cooper",
        recommended:64,
        speed:132,
        price:32,
        image:Car7

    },
   { name:"Porsche 911 Carrera",
    recommended:74,
    speed:130,
    price:28,
    image:Car8

},
{ name:"Porsche 911 Carrera",
recommended:74,
speed:130,
price:28,
image:Car9


}
]
    return(
        <>
         <Grid item xs={12} sx={{marginTop:"27px"}}>
        <Grid container justifyContent="space-between" spacing={3.6} >
         
             <Grid  item className="grid-dash-top">
        {/* energy */}
        <Card className="one-grid-dash-top" 
        sx={{backgroundColor:"#A162F7"}} variant="outlined">
<Stack alignItems="center" gap={2}>
<IconButton sx={{width:"fit-content",
    backgroundColor:" rgba(255 255 255/3%)"
}}>
    <BoltIcon sx={{color:"white",fontSize:"1.3rem"}}/>
</IconButton>
<Typography variant="p" sx={{fontSize:"24px",fontWeight:"700",color:"white",letterSpacing:"0.7px"}}>
    Energy
    </Typography>
    <ProgressBar
            radius={45}
            progress={45}
            strokeWidth={10}
            strokeColor="white"
            trackStrokeLinecap="round"
            strokeLinecap="round"
            trackStrokeWidth={10}
            trackStrokeColor="rgba(255 255 255 /25%)" 
            cut={110}
            rotate={-215}
            width="130px"
        >
            <div className="indicator" style={{    position: "absolute",
    top: "55px",
    left: "47px"}}>
              <Typography variant="p" sx={{fontSize:"1rem",fontWeight:"700",color:"white",letterSpacing:"0.7px"}}>
    45%
    </Typography>
    </div>
        </ProgressBar>
    </Stack>

    </Card>
    
            </Grid>

            <Grid  item className="grid-dash-top">
        {/* Range */}
        <Card className="one-grid-dash-top" variant="outlined">
<Stack sx={{alignItems: "center"}} gap={2}>
<IconButton sx={{width:"fit-content",
    backgroundColor:" rgba(255 125 142/8%)"
}}>
    <CgArrowsVAlt style={{color:"#FF7E86",fontSize:"1.3rem"}}/>
</IconButton>
<Typography variant="p" sx={{fontSize:"24px",fontWeight:"700",letterSpacing:"0.7px"}}>
    Range
    </Typography>

    <ProgressBar
            radius={45}
            progress={(157/250)*100}
            strokeWidth={10}
            strokeColor="#FF7E86"
            trackStrokeLinecap="round"
            strokeLinecap="round"
            trackStrokeWidth={10}
            trackStrokeColor="rgba(0 0 0 /10%)" 
        
            cut={110}
            rotate={-215}
            width="130px"
        >
            <div className="indicator" style={{    position: "absolute",
    top: "55px",
    left: "40px"}}>
              <Typography variant="p" sx={{fontSize:"1rem",fontWeight:"700"}}>
    157k%
    </Typography>
    </div>
        </ProgressBar>
    </Stack>
    </Card>
    
            </Grid>
            <Grid  item className="grid-dash-top">
        {/* break-fluid */}
        <Card className="one-grid-dash-top" variant="outlined">
<Stack sx={{alignItems: "center"}} gap={2}>
<IconButton sx={{width:"fit-content",
    backgroundColor:" rgba(156 102 245 /8%)"
}}>
    <IoIosWater style={{color:"#A162F7",fontSize:"1.3rem"}}/>
</IconButton>
<Typography variant="p" sx={{fontSize:"24px",fontWeight:"700"}}>
    Break Fluid
    </Typography>

    <ProgressBar
            radius={45}
            progress={9}
            strokeWidth={10}
            strokeColor="#A162F7"
            trackStrokeLinecap="round"
            strokeLinecap="round"
            trackStrokeWidth={10}
            trackStrokeColor="rgba(0 0 0 /10%)" 
            cut={110}
            rotate={-215}
            width="130px"
        >
            <div className="indicator" style={{    position: "absolute",
    top: "55px",
    left: "52px"}}>
              <Typography variant="p" sx={{fontSize:"1rem",fontWeight:"700"}}>
    9%
    </Typography>
    </div>
        </ProgressBar>
    </Stack>
    </Card>
    
            </Grid>

            <Grid  item className="grid-dash-top">
        {/* tire */}
        <Card className="one-grid-dash-top" variant="outlined">
<Stack sx={{alignItems: "center"}} gap={2}>
<IconButton sx={{width:"fit-content",
    backgroundColor:" rgba(245 203 13/8%)"
}}>
    <GiCarWheel style={{color:"#F6CC0D",fontSize:"1.3rem"}}/>
</IconButton>
<Typography variant="p" sx={{fontSize:"24px",fontWeight:"700"}}>
    Tire Wear
    </Typography>

    <ProgressBar
            radius={45}
            progress={25}
            strokeWidth={10}
            strokeColor="#F6CC0D"
            trackStrokeLinecap="round"
            strokeLinecap="round"
            trackStrokeWidth={10}
            trackStrokeColor="rgba(0 0 0 /10%)" 
            cut={110}
            rotate={-215}
            width="130px"
        >
            <div className="indicator" style={{    position: "absolute",
    top: "55px",
    left: "47px"}}>
              <Typography variant="p" sx={{fontSize:"1rem",fontWeight:"700",letterSpacing:"0.7px"}}>
    25%
    </Typography>
    </div>
        </ProgressBar>
    </Stack>
    </Card>
    
            </Grid>
          
        </Grid>
        </Grid>

        <Grid item xs={12} sx={{marginTop:"23px"}}>
        <Grid container justifyContent="flex-start" spacing={4} gap={"5%"}>
        
             <Grid  item sx={{width:" 45%" ,minWidth:"350px",}}>
            <MilesStatistics />
            </Grid>

            <Grid  item sx={{width:" 45%" ,minWidth:"350px"}}>
            <CarStatistics />
            </Grid>

        </Grid>

        <Grid item xs={12} sx={{marginTop:"23px"}}>
        <Grid container justifyContent="space-between" spacing={2.4}>
          {cars.map((Car,i) => (
             <Grid key={i} item sx={{width:"33.3%",minWidth:"300px"}}>
            <OneCar Car={Car} index={i} />
            </Grid>
          ))}
        </Grid>
        </Grid>

        
        </Grid>

        </>
    )
}
export default Dashboard