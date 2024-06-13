
import Button from "../button/Button"
import { useCart } from "../../customHooks/useCart";


const QuantityForm = ({product}) => {

    const { cart, addToCart } = useCart();
    console.log('Estoy en Quantity', cart);

    return (
        <form className="flex flex-col gap-2.5">
            <label className="sr-only">Quantity</label>
            <select id="quantity" className="border border-[color:var(--col-secondary)] w-1/5 p-2.5 rounded-[5px] border-solid">
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <Button text="Add to Cart" handleClick={(product) => addToCart(product)} />
        </form>
    )
}
export default QuantityForm;