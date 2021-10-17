import Card from "../UI/Card";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";
import useRequest from "../../hooks/use-request";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const { sendRequest } = useRequest();

  const loadMeals = () => {
    const applyData = (data) => {
      const meals = [];
      for (const key in data) {
        meals.push({
          key,
          ...data[key],
        });
      }

      setMeals(meals);
    };

    sendRequest(
      {
        url: "https://react-training-c36fe-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
      },
      applyData
    );
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
