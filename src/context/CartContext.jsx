import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export default function Provider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const response = await fetch("/data/pizzas.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.Status}`);
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error API pizzas:", error);
      }
    };

    getPizzas();
  }, []);

  const pesoChileno = (valor) =>
    valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  const addCart = (pizza) => {
    const foundPizza = cart.findIndex((cartPizza) => cartPizza.id === pizza.id);

    if (foundPizza < 0) {
      pizza.count = 1;
      setCart([...cart, pizza]);
    } else {
      cart[foundPizza].count++;
      setCart([...cart]);
    }
  };

  const increaseCount = (index) => {
    cart[index].count++;
    setCart([...cart]);
  };

  const decreaseCount = (index) => {
    if (cart[index].count === 1) {
      cart.splice(index, 1);
    } else {
      cart[index].count--;
    }
    setCart([...cart]);
  };

  const totalCart = cart.reduce(
    (acumulador, { price, count }) => acumulador + price * count,
    0
  );

  Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <CartContext.Provider
      value={{
        pizzas,
        cart,
        setCart,
        addCart,
        decreaseCount,
        increaseCount,
        totalCart,
        pesoChileno,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};