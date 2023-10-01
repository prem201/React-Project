import React from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Layout from '../Component/Layout'
import { Box,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography } from '@mui/material'
import '../Styles/ContactStyles.css'
const Contact = () => {
  return (
    <div>
      <Layout>
        <Box sx={{p:1}} className='contact'>
          <Typography>
            <center><h4>Contact us:  </h4></center>
          </Typography>  
          <p>
At Spice Haven, we value your feedback, inquiries, and reservations. Our dedicated team is here to assist you in any way we can. Feel free to reach out to us through the following contact methods:
<Box sx={{m:3, width:'600px',ml:10, '@media (max-width:600px':{
  width:'400px'
}} }>
  <TableContainer component={Paper}>
    <Table aria-label='contact table'>
      <TableHead>
        <TableRow>
          <TableCell sx={{color:'goldenrod',bgcolor:'black', align:'center'}}>
            Contact Details
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      <TableRow>
          <TableCell>
            <SupportAgentIcon sx={{color:'red',pt:1}}/>1800-000-212 (Tollfree)
          </TableCell>
         
        </TableRow>
        <TableRow>
        <TableCell>
            <EmailIcon sx={{color:'skyblue',pt:1}}/> help@spiceHaven.com
          </TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
            <PhoneIcon sx={{color:'skyblue',pt:1}}/> 8739482092
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
</Box>
<div>
  <h4>
Hours of Operation:</h4>

Monday to Thursday: 6:00PM - 10:00PM
<br/>
Friday: 6:00PM - 10:00PM
<br/>
Saturday: 6:00PM - 11:00PM
<br/>
Sunday: 6:00PM - 11:00PM
<br/>
</div>
<div>
<h4>
Reservations:</h4>
For table reservations, please call us during our operating hours or use our convenient online reservation system on our website. We recommend booking in advance to ensure your preferred dining time is available.
</div><br/>

<div><h4>Feedback:</h4>
Your opinion matters to us. Whether you had an outstanding dining experience or believe we can improve in any way, we welcome your feedback. Please share your thoughts and suggestions with us through the form below, and we'll be sure to get back to you.
</div>
<div>
<h4>Private Events:</h4>
Planning a special event? We offer private dining options for celebrations, gatherings, and corporate functions. Contact our events team to discuss how we can make your event memorable.

</div>
<div>
  
<h4>Catering:</h4>
Interested in having our delicious cuisine at your off-site event? Our catering services are available to bring the flavors of [Restaurant Name] to your location. Inquire about our catering options and menu customization.

</div>

<br/>
We appreciate your interest in Spice Haven, and we're excited to assist you in any way we can. Whether you're looking to book a reservation, provide feedback, or inquire about our services, we're here to serve you. Thank you for choosing [Restaurant Name] for your dining needs
          </p>
        </Box>  
      </Layout>
    </div>
  )
}
export default Contact