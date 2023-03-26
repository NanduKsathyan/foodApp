import { useParams } from "react-router-dom";
import { useRestaurant } from "../hooks/useRestaurant";
import Comments from "./CommentContainer";
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../reducer/cartSlice";

const MENUE = ["Chicken", "Burger", "Soup", "Fries", "Chizza"];
const RestaurantMaenu = () => {
  const { id } = useParams();
  //   const resaurant = useRestaurant(id);
  //   console.log("Restaurant ", resaurant);

  //   if (!resaurant) return <p>Loading ...</p>;

  const dispatch = useDispatch();
  return (
    <div className="text-ceter items-center bg-center">
      <div>Menu -</div>
      {MENUE.map((item) => {
        return (
          <div className="flex mb-2" key={item}>
            <p>{item} </p>
            <button
              className="bg-black text-white p-1 ml-2"
              onClick={() => {
                dispatch(addItem(item));
              }}
            >
              Add
            </button>
          </div>
        );
      })}
      <button
        className="bg-red-500 p-2 text-white"
        onClick={() => dispatch(clearCart())}
      >
        Clear cart
      </button>
      {/* <Comments /> */}
    </div>
  );
};

export default RestaurantMaenu;
