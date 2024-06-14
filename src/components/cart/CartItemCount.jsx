import { useCart } from '../../customHooks/useCart';


const CartItemCount = () => {
  const { getTotalItems } = useCart();

    return (
    <span>{getTotalItems()}</span>
  );
};

export default CartItemCount;