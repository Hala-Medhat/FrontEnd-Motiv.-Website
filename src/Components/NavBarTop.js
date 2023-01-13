import Searchbar  from "./SearchBar"
import { AppBar, styled, Typography ,Box, Avatar} from "@mui/material"
import { Toolbar } from "@mui/material"
import { ThemeContext } from "@emotion/react"
import { borderRadius, fontWeight } from "@mui/system"
import { InputBase } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from "@mui/material"
import PublicIcon from '@mui/icons-material/Public';
import { Container,Stack } from "@mui/material"
import { Divider } from "@mui/material"

import {NavLink} from 'react-router-dom'
import { Route } from 'react-router-dom';
import {Outlet,Navigate} from 'react-router-dom'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import avatar from '../Images/avatar.png'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    minHeight:"0%",
    paddingLeft:"0.8rem !important",
    paddingRight:"0.8rem !important",

})

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      
    right: "7px",
    top: "8px",
     
    },
  }));

const NavBarTop= ({children})=> {
  
 
return (
<>
        <AppBar position="sticky" sx={{padding:{sm:"0.9rem",xs:"0.5rem"},height:"fit-content",backgroundColor:"white",boxShadow:"1px 0px 1px 1px rgb(0 0 0 / 5%)"}}>
           
            <StyledToolbar style={{minHeight:"0%"}}>
               
            
               <Searchbar/>
               <Stack direction = "row"  gap={3} alignItems={"center"}>
                 
                 
             
                 <StyledBadge color="error"  badgeContent=" " variant="dot">
                 <NotificationsNoneIcon sx={{color:"#707070"}}/>
      </StyledBadge>
                  
                     
      <Avatar alt="Remy Sharp" src={avatar} />
                 
                 
                    
              
             
                
                
                 </Stack>
            </StyledToolbar>
         
           </AppBar>
          
          
         
           </>
)   
    
}

export default NavBarTop