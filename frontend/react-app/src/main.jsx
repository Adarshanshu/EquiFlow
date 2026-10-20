import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './landing_Page/home/HomePage.jsx'
import Signup from "./landing_Page/signup/SignUp.jsx"
import Login from "./landing_Page/signup/Login.jsx"
import AboutPage from "./landing_Page/about/AboutPage.jsx"
import ProductPage from "./landing_Page/products/ProductPage.jsx"
import PricingPage from "./landing_Page/pricing/PricingPage.jsx"
import SupportPage from "./landing_Page/support/SupportPage.jsx"
import NotFound from "./landing_Page/NotFound.jsx"
import Navbar from "./landing_Page/Navbar.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/suport" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
