import { Link } from "react-router-dom";

import { CLOUDINARY_URL } from "../util/constants";

const RestaurantCard = ({
  name,
  locality,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
  id,
}) => {
  return (
    <Link to={`restaurant/${id}`}>
      <div className="w-80 border border-gray-200 rounded-md overflow-hidden cursor-pointer">
        <img src={CLOUDINARY_URL + cloudinaryImageId} />
        <div className="p-2">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">{cuisines.join(", ")}</p>
          <div className="mt-2 text-sm flex justify-between text-gray-700">
            <span className="bg-black text-white p-1 ">
              &#9733; {avgRating}
            </span>
            |<span>{deliveryTime} Min</span>|<span>{costForTwoString}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
