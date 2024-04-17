import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import LatestProducts from './LatestProducts'

const Products = () => {
  return (
	<>
	 <div>Products</div>
	 <div><Link to="latest-products">Latest Products</Link></div>
	 <Routes>
	 <Route path="latest-products" element={<LatestProducts /> } />
	 </Routes> 
	
	</>
	
  )
}

export default Products