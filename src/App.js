import { BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Booking from './Pages/Booking';
import React from 'react';
import { Container,Box } from '@mui/material';
import NavBar from './Components/NavBar';
function App() {
  return (

   <>
   
   <Router>
   
     <Routes>
       <Route element={<NavBar />}>
     <Route path="Dashboard/" element={<Dashboard />} />
     <Route path="/" element={<Dashboard />} exact/>
     <Route path="Booking/" element={<Booking />} />
     </Route>
     </Routes>
     
   </Router>
   
   </>
  );
}

export default App;
