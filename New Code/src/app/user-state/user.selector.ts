import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserModel } from './user-model';



export const selectUser = createSelector(
  createFeatureSelector('user'),
  (state: UserModel) => {
    return state;
  }
);