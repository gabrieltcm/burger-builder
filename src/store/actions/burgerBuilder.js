import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

//ACTION CREATOR is used together with Middleware (aka redux-thunk) for Asynchronous code
export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};
//ACTION CREATOR
export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};
//ACTION CREATOR
export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};
//ACTION CREATOR
export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};
//ACTION CREATOR
export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(
        "https://react-my-burger-ed234-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
