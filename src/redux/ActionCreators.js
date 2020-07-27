import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/baseURL';

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

    return fetch(baseURL + 'dishes') 
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

export const fetchComments = () => (dispatch) => {

    return fetch(baseURL + 'comments') 
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseURL + 'promotions') 
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
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

// returns an action object
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

// returns an action object
export const promosFailed = (errMessage) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMessage
});

// returns an action object
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})

// returns an action object
export const commentsFailed = (errMessage) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMessage
});

// returns an action object
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})
