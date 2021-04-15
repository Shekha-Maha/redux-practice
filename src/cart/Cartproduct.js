import {useSelector} from "react-redux" ;
import {selectBasket} from "../features/basket/basketSlice" ;

function Cartproduct() {
    const basket = useSelector(selectBasket)
    return (
            <div className="totalcart">
                <h1>Total:  {basket.length}  items in the cart</h1>
            </div>
    )
}

export default Cartproduct
