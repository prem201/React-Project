import React from 'react'
import Layout from '../Component/Layout'
import { Box, Typography } from '@mui/material'
import '../Styles/AboutStyles.css'

const About = () => {
  return (
    <div>
      <Layout>
        <Box sx={{
        textAlign:'center',p:1,
        '& h4':{fontWeight:'bold',my:2,fontSize:'2rem'},
        '& p':{
          textAlign:'justify'
        }}} className='about'>
          <Typography>
         <center> <h4>About Us:</h4></center>
          </Typography>
          <p>
          At Spice Haven, we invite you on a culinary journey that explores the rich and diverse tapestry of Indian flavors. Nestled in the heart of Hyderabad, our restaurant is a haven for those seeking the ultimate experience in Indian cuisine.
</p>
<h4>Our Cuisine:</h4><p>
Our chefs are passionate about crafting authentic dishes that showcase the vibrancy of Indian spices and regional specialties. From the fiery curries of the North to the fragrant biryanis of the South, our menu is a celebration of India's culinary heritage. We source the finest ingredients and spices to ensure each dish bursts with flavor and authenticity.
</p>
<h4>Ambiance:</h4><p>Step inside Spice Haven and be transported to the bustling markets and cozy eateries of India. Our restaurant's warm and welcoming ambiance is designed to make you feel at home while you savor the exotic tastes of our dishes. Whether you're dining with family, friends, or that special someone, Spice Haven provides the perfect setting for memorable moments.
</p>
<h4>Signature Dishes:</h4><p>
Butter Chicken: Succulent pieces of tandoori chicken simmered in a creamy tomato gravy.
Hyderabadi Biryani: Fragrant basmati rice cooked with tender meat or vegetables, aromatic spices, and saffron.
Paneer Tikka: Soft cubes of paneer marinated in a spicy yogurt blend and cooked to perfection in the tandoor.
Chole Bhature: Fluffy deep-fried bread served with spicy chickpea curry and pickles.
</p>
<h4>
  Our Promise:
</h4>
<p>
At Spice Haven, we are committed to delivering an exceptional dining experience. Whether you're a fan of mild flavors or crave the fiery heat of Indian cuisine, our menu offers something for everyone. Our attentive staff is dedicated to ensuring your visit is memorable, and our passion for food is reflected in every dish we serve.

</p>
 <h4>
  Visit us:
 </h4>
 <p>
 Come and join us at Spice Haven for a culinary adventure you won't soon forget. Explore the diverse tastes of India right here in the heart of Hyderabad. We look forward to sharing our love for Indian cuisine with you.
 </p>





          
        </Box>
        </Layout>
      </div>
  )
}

export default About