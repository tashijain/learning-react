import * as ActionTypes from './ActionTypes';
import { DISHES } from "../shared/dishes";

// creates action object
// every action object must have a type 
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

// thunk since it's returning a function not an action object
// this thunk does two dispatches 
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    // introduce a 2000ms delay
    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000);
}

// returns an action object
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

// returns an action object
export const dishesFailed = (errMessage) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMessage
});

// returns an action object
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})
