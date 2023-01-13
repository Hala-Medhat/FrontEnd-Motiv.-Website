import NavBarTop from "./NavBarTop"
import NavBarSide from "./NavBarSide"
import { Stack,Box, Typography } from "@mui/material"
import {BsXDiamondFill} from "react-icons/bs";
import {Outlet,Navigate} from 'react-router-dom'

function NavBar(){
    const path = window.location.href.split("http://localhost:3000/")[1]; 
    return(
        <>
        <Box sx={{
    backgroundColor: "#f1f1f1"}}>
        {/* <Stack direction="row" sx={{pt:"0.8rem",pb:"0.2rem" }} alignItems={"center"} gap={1}>
        <BsXDiamondFill style={{color:"#9c66f5"}}/>
        <Typography sx={{color:"#9c66f5",fontWeight:"bold"}}>{path}</Typography>
        </Stack> */}
        <Stack direction={"row"} gap={"1px"}>
            <Box sx={{width:"18.5%",minWidth:"190px",backgroundColor:"white",height: "100vh",
    position: "sticky",display:{xs:"none",sm:"block",md:"block",lg:"block",xl:"block"},
    top: "0"}} >
            <NavBarSide />
            </Box>
            <Box sx={{width:{xs:"100%",sm:"81.5%"},minWidth:"320px"}}>
            <Stack gap="30px">
            <NavBarTop />
            <Box sx={{pb:"30px",pl:"30px",pr:"30px"}}>
            <Outlet />
            </Box>
            </Stack>
            </Box>
        </Stack>
        </Box>
        </>
    )
}
export default NavBar