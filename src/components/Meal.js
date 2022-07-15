import { useEffect, useState } from "react";
import Api from "../api/index";
function Meal() {
  const [meals, setMeals] = useState([]);
  const fetchMeals = async () => {
    try {
      const meals = await Api.getMeals();
      setMeals(meals);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMeals();
  }, []);
  return <h1>{JSON.stringify(meals || [])}</h1>;
}

export default Meal;
