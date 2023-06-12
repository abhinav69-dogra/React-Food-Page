import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Cart Items</h1>
      <div style={{ margin: "2%", padding: "2%" }}>
        <button onClick={() => handleClearCart()}>Clear Cart</button>
      </div>
      {cartItems.map((item) => {
        return <li>{item}</li>;
      })}
    </div>
  );
};

export default Cart;
