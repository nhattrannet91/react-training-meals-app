import Card from "../UI/Card";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);

  const loadMeals = async () => {
    try {
      const response = await fetch(
        "https://react-training-c36fe-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

      if(!response.ok){
        throw new Error("Failed request");
      }

      const data = await response.json();
      const meals = [];
      for (const key in data) {
        meals.push({
          key,
          ...data[key]
        }) 
      }

      setMeals(meals)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadMeals();
  }, []);

  const mealsContent = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsContent}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
