import React from 'react'
import Layout from '../Component/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../Data/data'
const Menu = () => {
  return (
    <div><Layout>
      <Box sx={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
{MenuList.map(menu => (
  <Card sx={{maxWidth:'340px',display:'flex', m:2}}>
    <CardActionArea>
      <CardMedia src={menu.image} sx={{minHeight:'400px'}} component={'img'} alt={menu.name} />
    <CardContent>
      <Typography variant='h5' gutterBottom component={'div'}>
        {menu.name}
      </Typography>
      <Typography variant='body2'>
        {menu.description}
      </Typography>
    </CardContent>
    </CardActionArea>
  </Card>
))}
      </Box>
      </Layout>
      </div>
  )
}

export default Menu