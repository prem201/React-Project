import React from 'react'
import Layout from '../Component/Layout'
import '../Styles/HomeStyles.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Layout>
       <div className='home' >
        <div className='headerContainer'>
          <h1>Spice Haven</h1>
          <p>Where Flavor Meets Tradition</p>
         <Link to='/menu'>
          <button>
            ORDER NOW
          </button>
          </Link>
        </div>
       </div>
      
      </Layout>
      </div>
  )
}

export default Home