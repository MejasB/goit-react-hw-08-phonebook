import {combineReducers, createReducer} from '@reduxjs/toolkit';

import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  handleChange
} from './contacts-actions';

const initialState = [];

const contacts = createReducer(initialState, {
  [fetchSuccess]: (_, {payload}) => payload,
  [addSuccess]: (state, {payload}) => [...state, payload],
  [deleteSuccess]: (state, {payload}) => state.filter(({id}) => id !== payload)
});

const loading = createReducer(false, {
  [fetchRequest]: () => true,
  [fetchSuccess]: () => false,
  [fetchError]: () => false,

  [addRequest]: () => true,
  [addSuccess]: () => false,
  [addError]: () => false,

  [deleteRequest]: () => true,
  [deleteSuccess]: () => false,
  [deleteError]: () => false
});

const filter = createReducer('', {
  [handleChange]: (state, {payload}) => {
    return payload;
  }
});

export default combineReducers({
  contacts,
  filter,
  loading
});
