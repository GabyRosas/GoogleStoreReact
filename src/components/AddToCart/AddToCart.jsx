/* eslint-disable react/prop-types */
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import AddToCartForm from "./AddToCartForm/AddToCartForm";


const AddToCart = ({product
}) => {
    const { price } = product;
    return (
        <div className="bg-[color:var(--col-bg-accent)] flex flex-col gap-2.5 p-5 rounded-[15px]">
            <h3>{price}€</h3>
            <AddToCartForm product = {product}/>
            <hr />
            <DeliveryInfo />
        </div>
    )
}
export default AddToCart;


