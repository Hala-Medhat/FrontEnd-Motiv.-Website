
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
import './graph.css'
import {Line,Chart,} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Filler,
    Title,
    Tooltip,
    Legend,
    BarElement 
  } from 'chart.js'
  import { useState } from 'react';
import { grey } from '@mui/material/colors';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    Filler,
    Title,
    Tooltip,
    Legend,
    BarElement
  )

function CarStatistics () {
    const [choosen,setChoosen] =useState("day")
    const [data,setData] = useState([
       
       
        {
        label:"7 AM",
        value:50
    },
    {
        label:"7:30 AM",
        value:70
    },
    {
        label:"8 AM",
        value:60
    },

    {
        label:"8:30 AM",
        value:120
    },
    {
        label:"9 AM",
        value:120
    },
    {
        label:"9:30 AM",
        value:118
    },
    {
        label:"10 PM",
        value:160
    },
    {
        label:"10:30 PM",
        value:170
    },
    {
        label:"11 PM",
        value:130
    },
    {
        label:"11:30 PM",
        value:110
    },
    {
        label:"12 PM",
        value:100
    },
    {
        label:"12:30 PM",
        value:110
    },
    {
        label:"1 PM",
        value:120
    },
    {
        label:"1:30 PM",
        value:125
    },
    {
        label:"2 PM",
        value:75
    },
    {
        label:"2:30 PM",
        value:50
    },
    {
        label:"3 PM",
        value:60
    },
    {
        label:"3:30 PM",
        value:70
    },
    {
        label:"4 PM",
        value:75
    },
    {
        label:"4:30 PM",
        value:70
    },
    {
        label:"5 PM",
        value:60
    },
    {
        label:"5:30 PM",
        value:50
    },
    {
        label:"6 PM",
        value:60
    },
    {
        label:"6:30 PM",
        value:75
    },
    {
        label:"7 PM",
        value:73
    },
    {
        label:"7:30 PM",
        value:70
    },
    {
        label:"8 PM",
        value:80
    },
    {
        label:"8:30 PM",
        value:90
    },
    {
        label:"9 PM",
        value:75
    },
    {
        label:"9:30 PM",
        value:70
    },
])
    function handleClick(e){
        setChoosen(e.target.id)
        if(e.target.id=="day"){
            setData([
       
       
                {
                label:"7 AM",
                value:50
            },
            {
                label:"7:30 AM",
                value:70
            },
            {
                label:"8 AM",
                value:60
            },
        
            {
                label:"8:30 AM",
                value:120
            },
            {
                label:"9 AM",
                value:120
            },
            {
                label:"9:30 AM",
                value:118
            },
            {
                label:"10 PM",
                value:160
            },
            {
                label:"10:30 PM",
                value:170
            },
            {
                label:"11 PM",
                value:130
            },
            {
                label:"11:30 PM",
                value:110
            },
            {
                label:"12 PM",
                value:100
            },
            {
                label:"12:30 PM",
                value:110
            },
            {
                label:"1 PM",
                value:120
            },
            {
                label:"1:30 PM",
                value:125
            },
            {
                label:"2 PM",
                value:75
            },
            {
                label:"2:30 PM",
                value:50
            },
            {
                label:"3 PM",
                value:60
            },
            {
                label:"3:30 PM",
                value:70
            },
            {
                label:"4 PM",
                value:75
            },
            {
                label:"4:30 PM",
                value:70
            },
            {
                label:"5 PM",
                value:60
            },
            {
                label:"5:30 PM",
                value:50
            },
            {
                label:"6 PM",
                value:60
            },
            {
                label:"6:30 PM",
                value:75
            },
            {
                label:"7 PM",
                value:73
            },
            {
                label:"7:30 PM",
                value:70
            },
            {
                label:"8 PM",
                value:80
            },
            {
                label:"8:30 PM",
                value:90
            },
            {
                label:"9 PM",
                value:75
            },
            {
                label:"9:30 PM",
                value:70
            },
        ])
        }

       else if(e.target.id=="week"){
            setData([
       
       
                {
                label:"week 1",
                value:50
            },
           
        
           
            {
                label:"week2",
                value:120
            },
           
            {
                label:"week3",
                value:130
            },
            
            {
                label:"week 4",
                value:120
            },
            
            {
                label:"week 5",
                value:60
            },
            
            {
                label:"week 6",
                value:60
            },
           
            {
                label:"week 7",
                value:73
            },
            
            {
                label:"week 8",
                value:75
            },
           
        ])
        }

        if(e.target.id=="month"){
            setData([
       
       
                {
                label:"Jan",
                value:50
            },
           
            {
                label:"Feb",
                value:60
            },
        
           
            {
                label:"Mar",
                value:120
            },
           
            {
                label:"Apr",
                value:160
            },
           
            {
                label:"May",
                value:130
            },
            
            {
                label:"Jun",
                value:100
            },
           
            {
                label:"Jul",
                value:120
            },
          
            {
                label:"Aug",
                value:75
            },
            
            {
                label:"Sep",
                value:60
            },
           
           
            {
                label:"Oct",
                value:60
            },
           
           
            {
                label:"Nov",
                value:70
            },
        
            {
                label:"Dec",
                value:75
            },
            
        ])
        }
    }
    return (
        <>
        

        <Card sx={{ width:" 100%" ,borderRadius:"15px",p:"1rem 1.5rem",
   }} variant="outlined">
    <Stack gap={3}>
    <Typography variant="p" sx={{fontSize:"20px",color:"#242731"}}>
          <span style={{fontWeight:"700"}}>Car</span>  Statistics

          </Typography>
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
 
      <Typography variant="p" sx={{fontSize:{md:"12px",sm:"12px",lg:"14px",xl:"14px"},color:"#5F6165",fontWeight:"700"}}>
      
20 Feburary 2022

          </Typography>

          <Stack direction={"row"}  sx={{backgroundColor:"#f1f1f1",borderRadius:"50px",
          gap:{lg:"22px",xl:"22px",m:"20px",s:"20px"}}}>
          <Button variant="contained" id="day" className="choose" sx={{
          backgroundColor:choosen!="day"?"#f1f1f1":"#FF764C",color:choosen!="day"&&"black",
          "&:hover":{backgroundColor:choosen!="day"?"#f1f1f1":"#FF764C",boxShadow:"none"}}} onClick={handleClick}>
        Day
      </Button>
      <Button variant="contained" id="week" className="choose" sx={{
     backgroundColor:choosen!="week"?"#f1f1f1":"#FF764C",color:choosen!="week"&&"black",
     "&:hover":{backgroundColor:choosen!="week"?"#f1f1f1":"#FF764C",boxShadow:"none"}}} onClick={handleClick}>
        Week
      </Button>
      <Button variant="contained" id="month" className="choose" sx={{
     backgroundColor:choosen!="month"?"#f1f1f1":"#FF764C" ,color:choosen!="month"&&"black",
     "&:hover":{backgroundColor:choosen!="month"?"#f1f1f1":"#FF764C",boxShadow:"none"}}} onClick={handleClick}>
        Month
      </Button>
      </Stack>
      </Stack>

      <Line 
      options={{
       
        elements: {
            line: {
                tension: 0
            }
        },
            scales: {
                y:
                  {
                    min: 0,
                    max: 200,
                    stepSize: 5,
                    display:false
                  },
                  x:{
                      ticks:{
                          maxTicksLimit:8,
                          
                          
                      },
                      
                      
                  }
       },
       plugins: {
        legend: {
          display: false,
        },
      
      },
    }}
      data={{
          labels: data.map(d=> d.label),
          datasets:[{
              data: data.map(d=>d.value),
              borderColor: '#FF764C',
              tension: 0.4,
              lineTension: 0,           
              borderWidth:1.3,
              backgroundColor: " rgba(255,118,76,10%)",
              fill:true,
              pointRadius: 0,
              lineTension: 0.3
      
             
          }],

       
      }}
     /> 
      </Stack>
  
     
    </Card>
        </>
    )
}
export default CarStatistics