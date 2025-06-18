import ItemList from "./Itemlist";
import { useSelector } from "react-redux";

const Cart = () => {
  const item = useSelector((store) => store.cart.items);
  console.log("Cart items:", item);

  return (
    <div className="cart">
      <h1>Cart</h1>
      {item?.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        item.map((menu) => <ItemList menu={menu}></ItemList>)
      )}
    </div>
  );
};

export default Cart;
