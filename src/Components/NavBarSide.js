import { AppBar, Stack, Typography,Box } from "@mui/material"
import {RxDashboard} from "react-icons/rx";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {RiScissors2Line} from "react-icons/ri";
import {BsCalendar4Range} from "react-icons/bs";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import logo from '../Images/logo.png'
import './NavSide.css'

import {BiLogOut} from "react-icons/bi";



function NavBarSide(){
    var path = window.location.href.split("http://localhost:3000/")[1]; 
    if(path=="") path="Dashboard"
    
    return(
        <>
         <AppBar className="navbar navbar-expand-lg navbar-light bg-light" sx={{
        position:"relative",zIndex:"initial",boxShadow:"0px 0px 1px 1px rgb(0 0 0 / 5%)",backgroundColor:"white"}}>
            <Stack sx={{p:"30px 24px" ,}} gap={"43px"}>
                <Stack sx={{color:"black"}} direction="row" alignItems={"center"} gap={"12px"}>
                    <img src={logo} style={{    width: "13%",borderRadius: "8px"}} />
                    <Typography variant="p" sx={{fontWeight:"900",fontSize:"1.6rem"}}>
                        Motiv.
                    </Typography>
                </Stack>
                <Stack sx={{justifyContent: "space-between",
    minHeight: "76vh"}} >
                <Stack gap={"6px"} sx={{color:"#5F6165",fontSize:"13px",fontWeight:"500"}}>
                    <Stack direction="row"  gap={1} alignItems={"center"} sx={{backgroundColor:path=="Dashboard"&&"#f0eff8"}}
                    className="one-elem" onClick={() => window.location.href=`/Dashboard`}>
                    <RxDashboard style={{fontWeight:"bolder"}}/>
                    <Typography variant="p"> Dashboard</Typography>
                    </Stack>


                    <Stack direction="row"  gap={1} alignItems={"center"} className="one-elem">
                    <AccountCircleOutlinedIcon style={{fontWeight:"bolder",fontSize:"1rem"}}/>
                    <Typography variant="p"> Assets</Typography>
                    </Stack>

                    
                    <Stack direction="row"  gap={1} alignItems={"center"} sx={{backgroundColor:path=="Booking"&&"#f0eff8"}}
                    className="one-elem" onClick={() => window.location.href=`/Booking`}>
                    <DirectionsCarIcon style={{fontWeight:"bolder",fontSize:"1rem"}}/>
                    <Typography variant="p"> Booking</Typography>
                    </Stack>

                    
                    
                    <Stack direction="row"  gap={1} alignItems={"center"} className="one-elem">
                    <ShoppingBagOutlinedIcon style={{fontWeight:"bolder",fontSize:"1rem"}}/>
                    <Typography variant="p"> Sell Cars</Typography>
                    </Stack>


                    <Stack direction="row"  gap={1} alignItems={"center"} className="one-elem">
                    <ShoppingCartOutlinedIcon style={{fontWeight:"bolder",fontSize:"1rem"}}/>
                    <Typography variant="p"> Buy Cars</Typography>
                    </Stack>


                    <Stack direction="row"  gap={1} alignItems={"center"} className="one-elem">
                    <RiScissors2Line style={{fontWeight:"bolder",fontSize:"1rem",}}/>
                    <Typography variant="p"> Services</Typography>
                    </Stack>

                    <Stack direction="row"  gap={1} alignItems={"center"} className="one-elem">
                    <BsCalendar4Range style={{fontWeight:"bolder",fontSize:"0.8rem",}}/>
                    <Typography variant="p"> Calendar</Typography>
                    </Stack>

                    <Stack direction="row"  gap={1} alignItems={"center"} className="one-elem">
                    <MessageOutlinedIcon style={{fontWeight:"bolder",fontSize:"1rem",}}/>
                    <Typography variant="p"> Messages</Typography>
                    </Stack>


                  
                   
                </Stack>
                <Stack gap={"6px"} sx={{color:"#5F6165",fontSize:"13px",fontWeight:"500"}}>
                <Stack direction="row"  gap={1} alignItems={"center"} className="one-elem">
                    <SettingsOutlinedIcon style={{fontWeight:"bolder",fontSize:"1rem",}}/>
                    <Typography variant="p"> Settings</Typography>
                    </Stack>

                    <Stack direction="row"  gap={1} alignItems={"center"} className="one-elem">
                    <BiLogOut style={{fontWeight:"bolder",fontSize:"0.8rem",}}/>
                    <Typography variant="p"> Log out</Typography>
                    </Stack>
                    </Stack>
                

            </Stack>
            </Stack>

        </AppBar>
        </>
    )
}
export default NavBarSide