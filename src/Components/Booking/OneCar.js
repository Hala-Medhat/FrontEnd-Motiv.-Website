
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Button, Stack,IconButton, Box } from "@mui/material"
import {ImLoop} from "react-icons/im";

function OneCar ({Car}) {
    return (
        <Box>
        

        <Card sx={{borderRadius:"15px",p:"24px"}} variant="outlined">
    <Stack >
      <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
          <Typography variant="p" sx={{fontSize:"18px",fontWeight:"700",color:"#242731"}}>
          {Car.name}

          </Typography>
          <IconButton aria-label="add to favorites">
           {!Car.favourite ? <FavoriteBorderIcon sx={{color:"grey",fontSize:"1.1rem"}} /> :
            <FavoriteIcon sx={{color:"red",fontSize:"1.1rem"}} />}
          </IconButton>
      </Stack>
      <Typography variant="p"  sx={{fontSize:"16px",fontWeight:"400",mb:"21px",mt:"4.5px",color:"#72767C"}}>
          {Car.manufacture}

          </Typography>
      <CardMedia
        component="img"
        height="194"
        image={Car.image}
        alt="Paella dish"
        sx={{ objectFit: "contain",width: "80%",position: "relative",left: "10%",height:"6.5rem"}}
      />
      <CardContent sx={{pt:"22px" ,pb:"0px !important",pl:"0px",pr:"0px "}}>

          <Stack sx={{flexDirection:"row" ,justifyContent:"space-between",alignItems:"center"}}>
              <Stack direction="row" gap={2}>
                  <Stack direction="row" gap={"4px"} alignItems={"center"}>
                  <PersonOutlineOutlinedIcon sx={{color:"#9c66f5",fontSize:"1.3rem"}}/>
                  <Typography variant="p" sx={{color:"#72767C",fontSize:"16px"}}>4</Typography>
                  </Stack>
                  <Stack direction="row" gap={"4px"} alignItems={"center"}>
                  <ImLoop style={{color:"#9c66f5",fontSize:"0.9rem"}}/>
                  <Typography variant="p" sx={{color:"#72767C",fontSize:"16px"}}>Manual</Typography>
                  </Stack>
                  
              </Stack>
              <Typography variant="p" sx={{fontSize:"18px",color:"#242731",fontWeight:"500"}}>${Car.price} 
              <span style={{color:"grey"}}> /d</span></Typography>

          </Stack>
       
      </CardContent>
      </Stack>
    </Card>
        </Box>
    )
}
export default OneCar