import { Button, Stack,IconButton,Grid } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {RxDashboard} from "react-icons/rx";
import Filter from "../Images/Filter.png"
import Car1 from '../Images/Car1.png'
import Car2 from '../Images/Car2.png'
import Car3 from '../Images/Car3.png'
import Car4 from '../Images/Car4.png'
import Car5 from '../Images/Car5.png'
import Car6 from '../Images/Car6.png'
import OneCar from '../Components/Booking/OneCar'
import './Book.css'




function Booking() {
const cars = [
    {name:"Porshe 718 Cayman S",
    manufacture:"Coupe",
   favourite:false,
   price:400,
   image:Car1,
},
{name:"Porshe 718 Cayman S",
manufacture:"Coupe",
favourite:true,
price:400,
image:Car2,
},
{name:"Porshe 718 Cayman S",
manufacture:"Coupe",
favourite:false,
price:400,
image:Car3,
},
{name:"Porshe 718 Cayman S",
manufacture:"Coupe",
favourite:false,
price:400,
image:Car4,
},
{name:"Porshe 718 Cayman S",
manufacture:"Coupe",
favourite:false,
price:400,
image:Car5,
},
{name:"Porshe 718 Cayman S",
manufacture:"Coupe",
favourite:false,
price:400,
image:Car6,
},
{name:"Porshe 718 Cayman S",
manufacture:"Coupe",
favourite:false,
price:400,
image:Car1,
},
{name:"Porshe 718 Cayman S",
manufacture:"Coupe",
favourite:false,
price:400,
image:Car2,
},
{name:"Porshe 718 Cayman S",
manufacture:"Coupe",
favourite:false,
price:400,
image:Car3,
},

]

    return(
        <Stack gap="38px">
        
        <h2 >Booking</h2>
        <Stack sx={{    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"}} >
        <Stack direction={"row"} gap={2} >
        <Button variant="outlined" endIcon={<ArrowDropDownIcon sx={{color:"grey",pl:"1rem"}}/>} className="fil">
        New
      </Button>

      <Button variant="outlined" endIcon={<ArrowDropDownIcon sx={{color:"grey",pl:"1rem"}}/>} className="fil">
        Toyota
      </Button>
        </Stack>

        <Stack direction={"row"} gap={2}>
        <IconButton aria-label="fingerprint" sx={{backgroundColor:"white",boxShadow:" 0px 1px 3px 0px rgb(0 0 0 / 20%)"
}}>
        <RxDashboard style={{fontSize:"0.9rem"}}/>
        </IconButton>

        <IconButton aria-label="fingerprint" sx={{backgroundColor:"#A162F7",boxShadow:" 0px 1px 3px 0px rgb(0 0 0 / 20%)"
}}>
        <img src={Filter} style={{width:"16px"}}/>
        </IconButton>


        </Stack>
        </Stack>

        
      <Grid item xs={12} >
        <Grid container justifyContent="flex-start" sx={{gap:{md:"24px",sm:"24px",l:"24px",xl:"20px"}}}>
          {cars.map((Car,i) => (
             <Grid key={i} item sx={{width:"30.9%",minWidth:"260px"}}>
            <OneCar Car={Car} />
            </Grid>
          ))}
        </Grid>
        </Grid>
     

        </Stack>
    )
}
export default Booking