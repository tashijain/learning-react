import * as ActionTypes from "./ActionTypes";
import { baseURL } from "../shared/baseURL";

// creates action object
// every action object must have a type
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

// thunk since it's returning a function not an action object
// this thunk does two dispatches
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseURL + "dishes")
    .then(
      // get a response from server: response could be ok or error returned as response by the server
      (response) => {
        // status 200
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      // don't get a response from the server so throw an error
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
};

export const fetchComments = () => (dispatch) => {
  return fetch(baseURL + "comments")
    .then(
      // get a response from server: response could be ok or error returned as response by the server
      (response) => {
        // status 200
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      // don't get a response from the server so throw an error
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));

  return fetch(baseURL + "promotions")
    .then(
      // get response from server: response ok or error returned as response by server
      (response) => {
        // status 200
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      // don't get a response from server so throw an error
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(promosFailed(error.message)));
};

// returns an action object
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

// returns an action object
export const dishesFailed = (errMessage) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errMessage,
});

// returns an action object
export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

// returns an action object
export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

// returns an action object
export const promosFailed = (errMessage) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errMessage,
});

// returns an action object
export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});

// returns an action object
export const commentsFailed = (errMessage) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMessage,
});

// returns an action object
export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});
