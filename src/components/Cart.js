import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    //Dispatch an action
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="font-bold text-xl">Cart</div>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white m-2 p-2 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add items to the cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
