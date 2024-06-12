
import Button from "../button/Button"

const QuantityForm = () => {
    return (
        <form className="flex flex-col gap-2.5">
            <label className="sr-only">Quantity</label>
            <select id="quantity" className="border border-[color:var(--col-secondary)] w-1/5 p-2.5 rounded-[5px] border-solid">
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <Button text="Add to Cart" handleClick={console.log('click')}/>
        </form>
    )
}
export default QuantityForm