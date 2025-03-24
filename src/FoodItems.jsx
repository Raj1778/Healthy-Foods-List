import Item from "./Item";
const FoodItems = ({ items }) => {
  // const handleBuyButton = ({ item }) => {
  //   console.log(`${item} is bought`);
  // };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            handleBuyButton={() => console.log(`${item} is bought`)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
