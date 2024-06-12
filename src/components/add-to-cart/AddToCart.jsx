/* eslint-disable react/prop-types */

import QuantityForm from "../quantity-form/QuantityForm";
import DeliveryInfo from "../delivery-info/DeliveryInfo";


const AddToCart = ({price}) => {
    return (
        <div className="bg-[color:var(--col-bg-accent)] flex flex-col gap-2.5 p-5 rounded-[15px]">
            <h3>{price}€</h3>
            <QuantityForm />
            <hr />
            <DeliveryInfo />
        </div>
    )
}
export default AddToCart;