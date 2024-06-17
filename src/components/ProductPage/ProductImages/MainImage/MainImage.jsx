/* eslint-disable react/prop-types */
const MainImage = ({mainImage, name}) => {
    return (
        <div className="bg-[color:var(--col-bg-accent)] flex justify-center items-center rounded-[15px]">
            <img src={mainImage} alt={name} className="max-h-[367px]" />
        </div>
    )
}
export default MainImage