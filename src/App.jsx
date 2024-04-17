import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom"

import MainPage from "./pages/MainPage"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"

import styles from './App.module.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/products/*" element={<Products /> } />
        <Route path="/contact" element={<Contact /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
