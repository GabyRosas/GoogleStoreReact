import { useCart } from '../../customHooks/useCart';


const CartItemCount = () => {
  const { getTotalItems } = useCart();

   return (
    <p>{getTotalItems()}</p>
  );
};

export default CartItemCount;