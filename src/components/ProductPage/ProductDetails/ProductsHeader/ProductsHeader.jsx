/* eslint-disable react/prop-types */
const ProductsHeader = ({name, description, price}) => {
    return (
        <div className=" md:col-[span_2] lg:col-auto">
            <h1 className="mb-5">{name}</h1>
            <p className="mb-5">{description}</p>
            <p className="text-[length:var(--fs-subtitle)] font-[number:var(--fw-bold)] mb-5">{price}€</p>
            <hr className="mb-5"/>
        </div>
    )
}
export default ProductsHeader