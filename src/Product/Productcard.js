
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../features/basket/basketSlice";
function Productcard({ id, title, image, price}) {
  const dispatch = useDispatch();
  const AddToBasket = () => {
    dispatch(addItem({id, title, price}));
  };

  const deleteFromBasket = ()=> {
    dispatch(deleteItem({id}))
  }
  return (
      <div className="productcard">
        <div className="productcard__info">
          <p className="productcard__title">{title}</p>
          <p >
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="product__buttons">
          <button onClick={AddToBasket}>Add </button>
          <button onClick={deleteFromBasket}>Delete </button>
        </div>
      </div>
  );
}

export default Productcard;