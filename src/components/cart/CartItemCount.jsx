/* eslint-disable react/prop-types */
import { useCart } from '../../customHooks/useCart';


const CartItemCount = ({className}) => {

  const { getTotalItems } = useCart();

    return (
    <span className={className}>{getTotalItems()}</span>
  );
};

export default CartItemCount;