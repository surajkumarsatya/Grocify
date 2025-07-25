import { FaHeart, FaPlus } from "react-icons/fa"
import Button from "../Button/Button"
import Products from "../Products/Products"

const Cards = ({image, name, price}) => {
    return(
        <div className="bg-zinc-100 p-5 rounded-xl">
            {/* Card Icon */}
            <div className="flex justify-between">
                <span className="text-3xl text-zinc-300"><FaHeart /></span>
                <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-4 py-3 rounded-lg"><FaPlus /></button>
            </div>

            {/* Card Image */}
            <div className="w-full h-45">
                <img className="w-full h-full mx-auto object-contain" src={image}></img>
            </div>

            {/* Card Content */}
            <div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-lg  mt-2 mb-2">${price.toFixed(2)}</p>
                <Button content='Shop Now'/>
            </div>
        </div>
    )
}

export default Cards