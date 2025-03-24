import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Container";
import FoodItems from "./FoodItems";
import ErrorMessage from "./ErrorMessage";
import FoodInput from "./FoodInput";
import { useState } from "react";
function App() {
  let [foodItems, setfoodItems] = useState(["apple", "banana", "orange"]);
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      e.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setfoodItems(newItems);
      
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}
export default App;
