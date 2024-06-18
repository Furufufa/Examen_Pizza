import { Table, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { IconCurrencyDollar } from "@tabler/icons-react";

export default function Cart() {
  const { cart, decreaseCount, increaseCount, totalCart, pesoChileno } =
    useContext(CartContext);

  return (
    <>
      <Table responsive>
        <tbody>
          {cart.map((pizza, index) => (
            <tr key={index}>
              <td>
                <img src={pizza.img} alt={pizza.name} />
              </td>
              <td className="w-75 pizza-name">{pizza.name}</td>
              <td>
                <Button onClick={() => decreaseCount(index)}>-</Button>
              </td>
              <td>{pizza.count}</td>
              <td>
                <Button onClick={() => increaseCount(index)}>+</Button>
              </td>
              <td>=</td>
              <td>{pesoChileno(pizza.count * pizza.price)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-end fw-bold">
              Total
            </td>
            <td>=</td>
            <td className="fw-bold">{pesoChileno(totalCart)}</td>
          </tr>
        </tfoot>
      </Table>
      <Button variant="success" className="float-end">
        <IconCurrencyDollar />
        Ir a pagar
      </Button>
    </>
  );
}