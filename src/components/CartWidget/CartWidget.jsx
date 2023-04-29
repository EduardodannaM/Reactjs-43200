import { FiShoppingCart } from "react-icons/fi";
import "./CartWidget.css";
const CartWidget = () => {
  return (
    <div className="containerCart">
      <FiShoppingCart size={25} />
      <div className="bubble-counter">
        <span>0</span>
      </div>
    </div>
  );
};

export default CartWidget;
