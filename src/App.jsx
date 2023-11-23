import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import robotList from './robot_products.json';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [robots, setRobots] = useState(robotList);
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <>
      <NavBar setRobots={setRobots} robots={robots} cartNumber={cartNumber} />
      <Routes>
        <Route path='/' element={<Navigate to="/products" />} />
        <Route path='/products'
          element={<ProductPage
            robots={robots}
            cartNumber={cartNumber}
            setCartNumber={setCartNumber}
          />}
        />
        <Route path='/products/:index'
          element={<ProductDetails />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
