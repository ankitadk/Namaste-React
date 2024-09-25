import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
  //   console.log(dummy);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className=" border-gray-200 border-b-4 m-2 p-3 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span> - ₹ {item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 px-4">
            <img src={CDN_URL + item?.card?.info?.imageId} />
            <div className="absolute">
              <button className="px-2 py-1 mx-6 my-[-32px] rounded-lg bg-black text-white">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
