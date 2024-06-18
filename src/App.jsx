import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Background from "./components/Background";
import Home from "./views/Home";
import CartDetail from "./views/CartDetail";
import PizzaDetail from "./views/PizzaDetail";
import NotFound from "./views/NotFound";
import './App.css'


  export default function App() {
    return (
      <div>
        <Header />
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/carrito" element={<CartDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }