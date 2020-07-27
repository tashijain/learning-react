// configure store in a separate file and then export it, just easier

import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from 'react-redux-form'
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { initialFeedback } from "./forms";


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({
        feedback: initialFeedback
      })
    }),
    // returns store enhancer
    applyMiddleware(thunk, logger)
  );

  return store;
};
