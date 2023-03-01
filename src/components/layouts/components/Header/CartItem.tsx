import { FC } from "react";
import Optional from "./Optional";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const CartItem: FC = () => {

  return <Optional icon={faCartShopping} />;
};

export default CartItem;
