import { Link } from "react-router-dom"

const DetailsLink = () => {
    return (
        <Link to={'/'} className="flex gap-[5px] items-center px-[22px] py-2.5 md:pt-[30px] pb-2.5">
            <img src="/public/images/icons/Arrow.svg" alt="arrow icon"/>
                <span>See product details</span>
        </Link>
    )
}
export default DetailsLink