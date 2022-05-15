import './App.css';
import Home from './component/home/home';
import About from './component/about/about'
import Product from './component/product/Product';
import Footer from './component/footer/footer';
import NavBar from './component/Navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'




function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
