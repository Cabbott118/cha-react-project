import axios from 'axios';
import {
  GROCERIES_LOADING,
  GROCERIES_LOADED,
  SCHEDULES_LOADING,
  SCHEDULES_LOADED,
  ADD_GROCERY,
  GROCERY_DELETED,
  ADD_SCHEDULE,
  SCHEDULE_DELETED,
  SET_ERRORS,
  CLEAR_ERRORS,
} from '../types';
import proxyUrl from '../../util/proxy';

// Grocery Exports
export const getGroceries = () => (dispatch) => {
  dispatch({ type: GROCERIES_LOADING });
  axios
    .get(`${proxyUrl}/groceries`)
    .then((res) => {
      dispatch({ type: GROCERIES_LOADED, payload: res.data });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const addGrocery = (data) => (dispatch) => {
  axios
    .post(`${proxyUrl}/postGrocery`, data)
    .then((res) => {
      dispatch({ type: ADD_GROCERY, payload: res.data });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const deleteGrocery = (id) => (dispatch) => {
  axios
    .delete(`${proxyUrl}/grocery/${id}`)
    .then((res) => {
      dispatch({ type: GROCERY_DELETED, payload: id });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

// Schedule Exports
export const getSchedules = () => (dispatch) => {
  dispatch({ type: SCHEDULES_LOADING });
  axios
    .get(`${proxyUrl}/schedules`)
    .then((res) => {
      dispatch({ type: SCHEDULES_LOADED, payload: res.data });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const addSchedule = (data) => (dispatch) => {
  axios
    .post(`${proxyUrl}/postSchedule`, data)
    .then((res) => {
      dispatch({ type: ADD_SCHEDULE, payload: res.data });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const deleteSchedule = (id) => (dispatch) => {
  axios
    .delete(`${proxyUrl}/schedule/${id}`)
    .then((res) => {
      dispatch({ type: SCHEDULE_DELETED, payload: id });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};
