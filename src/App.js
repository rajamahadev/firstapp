import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Product from './Product';
import Viewproduct from './Viewproduct';

function App() {
  return (
    <Routes>
    <Route path="/" element={ <Product /> } />
    <Route path="/Product/:id" element={ <Viewproduct /> } />
    <Route path="/Home/:id" element={ <Product /> } />
  </Routes>
  );
}

export default App;