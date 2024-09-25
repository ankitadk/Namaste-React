import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  //   const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    //     setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div>
      {/* {Header} */}
      <div className="w-6/12 bg-gray-100 mx-auto p-4 my-4 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-sm">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="mx-4">{"🔽"}</span>
        </div>

        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
