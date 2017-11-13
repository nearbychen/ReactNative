import *as types from '../Constants/counterTypes';

export function decrement() {
  return {
    type: types.DECREMENT,
  }
}

export function increment() {
  return {
    type: types.INCREMENT,
  }
}
