import React from 'react';
import { useState , useRef} from 'react';
import {Link} from 'react-router-dom'
import { AppBar, styled, Typography ,Box, Avatar,Stack} from "@mui/material"
import { Toolbar } from "@mui/material"
import { ThemeContext } from "@emotion/react"
import { borderRadius, fontWeight } from "@mui/system"
import { InputBase } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from "@mui/material"
import PublicIcon from '@mui/icons-material/Public';
import { Container } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ClickAwayListener } from '@mui/material';
import { FiSearch } from "react-icons/fi";




const SearchStyled =styled("div")(({theme}) => ({
    backgroundColor:"#f1f1f1",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"25%",
    position:"relative",
    display:"flex",
    alignItems:"center"
    


}));


 function SearchBar() {

     const [searchInput,setSearchInput] = useState('')
     const [close,setClose]=useState(false)
   
     const ref = useRef(null)
   
    
    return (
        
        <ClickAwayListener onClickAway={()=>{setClose(true)}} >
                    <SearchStyled position={"relative"} sx={{width:"30%",minWidth:"220px",height:"46px"}}>
                     <IconButton  
                     sx={{borderRadius:"8px",
                     "&:hover":{
                      cursor: "pointer",
                      
                      
                      }}}>
            
                    <FiSearch style={{color:"grey",fontSize:"1.2rem",fontWeight:"bold",
                   "&:hover":{
                    cursor: "pointer",
                   
                    }}}/>
                  </IconButton>
                     
                    
          <InputBase  sx={{width:"100%",fontSize:"0.8rem",pl:"1%",caretColor:"#f1774f",fontWeight:"400"}} autoFocus

          placeholder=" Search or type" />
                       
        </SearchStyled>
            
       </ClickAwayListener>
          
        );
      }
      
      export default SearchBar;