import {
  GROCERIES_LOADING,
  GROCERIES_LOADED,
  SCHEDULES_LOADING,
  SCHEDULES_LOADED,
  ADD_GROCERY,
  GROCERY_DELETED,
  ADD_SCHEDULE,
  SCHEDULE_DELETED,
} from '../types';

const initialState = {
  loading: false,
  groceries: [],
  schedules: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GROCERIES_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GROCERIES_LOADED:
      return {
        ...state,
        groceries: action.payload,
        loading: false,
      };

    case ADD_GROCERY:
      return {
        ...state,
        groceries: [action.payload, ...state.groceries],
      };

    case GROCERY_DELETED:
      return {
        ...state,
        groceries: state.groceries.filter(
          (item) => item.groceryId !== action.payload
        ),
      };

    case SCHEDULES_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SCHEDULES_LOADED:
      return {
        ...state,
        schedules: action.payload,
        loading: false,
      };

    case ADD_SCHEDULE:
      return {
        ...state,
        schedules: [action.payload, ...state.schedules],
      };

    case SCHEDULE_DELETED:
      return {
        ...state,
        schedules: state.schedules.filter(
          (item) => item.scheduleId !== action.payload
        ),
      };

    default:
      return state;
  }
}
