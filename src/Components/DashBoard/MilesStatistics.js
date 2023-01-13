
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
import {Bar,Chart} from 'react-chartjs-2'
import './graph.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement 
  } from 'chart.js'
  import { useEffect, useState } from 'react';
import { grey } from '@mui/material/colors';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  )


function MileStatistics () {
    const [choosen,setChoosen] =useState("day")
    const [data,setData] = useState([{
        label:"1 PM",
        value:157
    },
    {
        label:"2 PM",
        value:130
    },
    {
        label:"3 PM",
        value:180
    },
    {
        label:"4 PM",
        value:120
    },
    {
        label:"5 PM",
        value:140
    },
    {
        label:"6 PM",
        value:80
    },
    {
        label:"7 PM",
        value:100
    },
])
    function handleClick(e){
        setChoosen(e.target.id)
if(e.target.id=="day")
        setData([{
            label:"1 PM",
            value:157
        },
        {
            label:"2 PM",
            value:130
        },
        {
            label:"3 PM",
            value:180
        },
        {
            label:"4 PM",
            value:120
        },
        {
            label:"5 PM",
            value:140
        },
        {
            label:"6 PM",
            value:80
        },
        {
            label:"7 PM",
            value:100
        },
    ])
    else if(e.target.id=="week"){
        setData(
        [{
            label:"week 1",
            value:157
        },
        {
            label:"week 2",
            value:130
        },
        {
            label:"week 3",
            value:180
        },
        {
            label:"week 4",
            value:120
        },
        {
            label:"week 5",
            value:140
        },
        {
            label:"week 6",
            value:80
        },
        {
            label:"week 7",
            value:100
        },
    ])
    }

    else if(e.target.id=="month"){
        setData(
        [{
            label:"Jan",
            value:157
        },
        {
            label:"Feb",
            value:130
        },
        {
            label:"Mar",
            value:180
        },
        {
            label:"Apr",
            value:120
        },
        {
            label:"May",
            value:140
        },
        {
            label:"Jun",
            value:80
        },
        {
            label:"Jul",
            value:100
        },
    ])
    }
    }
    const [hovering,setHovering] = useState(null)
    const [colors,setColors] = useState([])
    useEffect(()=>{
        setColors([])
        const timer = setTimeout(() => 
       { if(hovering!=null){
          
            for(var i=0;i<data.length;i++) {
                
                if(i==hovering)
                 
                   setColors(c=>[...c,"#1976d2"])
                else 
                setColors(c=>[...c,"#f1f1f1"])

            }
         
          
        }
        else {
            const c =[]
            for(var i=0;i<data.length;i++) {
                 
                setColors(c=>[...c,"#1976d2"])

            }
         
         
        }},
         5);
       
    },[hovering])
    return (
        <>
        

        <Card sx={{ width:" 100%" ,borderRadius:"15px",p:"1rem 1.5rem",
   }} variant="outlined">
    <Stack gap={3}>
    <Typography variant="p" sx={{color:"#242731",fontSize:"20px"}}>
          <span style={{fontWeight:"700"}}>Miles</span>  Statistics

          </Typography>
          <Stack direction={"row"} justifyContent={"space-between"}  alignItems={"center"}>
          <Stack direction={"row"} sx={{gap:{lg:"22px",xl:"22px",m:"20px",s:"20px"}}}>
          <Button variant="contained" id="day" className="choose" sx={{backgroundColor:choosen!="day"&&"white",color:choosen!="day"&&"black",
          "&:hover":{backgroundColor:choosen!="day"&&"white",boxShadow:"none"}}} onClick={handleClick}>
        Day
      </Button>
      <Button variant="contained" id="week" className="choose" sx={{backgroundColor:choosen!="week"&&"white",color:choosen!="week"&&"black",
     "&:hover":{backgroundColor:choosen!="week"&&"white",boxShadow:"none"}}} onClick={handleClick}>
        Week
      </Button>
      <Button variant="contained" id="month" className="choose" sx={{ backgroundColor:choosen!="month"&&"white",color:choosen!="month"&&"black",
     "&:hover":{backgroundColor:choosen!="month"&&"white",boxShadow:"none"}}} onClick={handleClick}>
        Month
      </Button>
      </Stack>
      <Typography variant="p" sx={{fontSize:{md:"12px",sm:"12px",lg:"14px",xl:"14px"},color:"#5F6165",fontWeight:"700"}}>
      
256 Miles
          </Typography>
      </Stack>

      <Bar 
      options={{
        
        onClick: (event,elements) => elements.length!=0?setHovering(elements[0].index):
        setHovering(null),
        scales: {
                y:
                  {
                    min: 0,
                    max: 200,
                    stepSize: 5,
                    display:false
                  },
                  x:
                  {

                  }
       },
       plugins: {
        legend: {
          display: false,
        },
        
        tooltip: {
            
            yAlign:"center",
            xAlign:"left",
            display:"blue",
            
            callbacks: {
              title: (xDatapoint) => {return xDatapoint.raw},
              label: (yDatapoint) => {return yDatapoint.raw+"K"},
              

            }
          }
      },
    }}
      data={{
          labels: data.map(d=> d.label),
          datasets:[{
              data: data.map(d=>d.value),
              hoverBackgroundColor:"#1976d2",
              backgroundColor:colors,
              
              barThickness:"25",
              borderWidth:0
          }],
       
      }}
     />
      </Stack>
  
     
    </Card>
        </>
    )
}
export default MileStatistics