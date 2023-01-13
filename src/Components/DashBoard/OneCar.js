
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Button, Stack,IconButton } from "@mui/material"
import {RxGear} from "react-icons/rx";
import {SlEnergy} from "react-icons/sl";
import {ImLoop} from "react-icons/im";
import {GiRecycle} from "react-icons/gi";


function OneCar ({Car ,index}) {
    return (
        <>
        

        <Card sx={{minWidth:"fit-content",borderRadius:"10px",p:"16.5px 27px",
    backgroundColor:index==0?"#e2dea6":(index==1?"#e4ebf2":"#f3e3e4")}} variant="outlined">
    
      <Stack direction="row"gap={2} alignItems={"center"}>
      
         <GiRecycle style={{color:"grey",fontSize:"1.1rem"}} /> 
        
          <Typography variant="p" sx={{fontSize:"16px",fontWeight:"700"}}>
          {Car.recommended}% Recommended
          </Typography>
         
      </Stack>
     
      <CardMedia
        component="img"
        height="194"
        image={Car.image}
        alt="Paella dish"
        sx={{ objectFit: "contain",width: "80%",height:"6.5rem"}}
      />
       <Typography variant="p" sx={{fontSize:"20px",fontWeight:"700",mt:"11px"}}>
          {Car.name}
          </Typography>
      <CardContent sx={{pt:"9px" ,pb:"0px !important",pl:"0px",pr:"0px "}}>

          <Stack sx={{flexDirection:"row" ,justifyContent:"space-between",alignItems:"center"}}>
              <Stack direction="row" gap={2} alignItems={"center"}>
                  
                  <ImLoop style={{color:"#72767C",fontSize:"0.9rem"}}/>

                  <Typography variant="p" sx={{fontSize:"14px",fontWeight:"500",color:"#72767C"}}>{Car.speed} k</Typography>
                  <RxGear style={{color:"#72767C",fontSize:"0.9rem"}}/>
                  <SlEnergy style={{color:"#72767C",fontSize:"0.9rem"}}/>

                  
              </Stack>
              <Typography variant="p" sx={{fontSize:"14px",fontWeight:"500",color:"#72767C"}}>${Car.price} /h</Typography>

          </Stack>
       
      </CardContent>
     
    </Card>
        </>
    )
}
export default OneCar