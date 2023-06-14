import { createAction,props } from "@ngrx/store";
import { UserModel } from "./user-model";

export const saveUser = createAction('Save User', props<UserModel>());
export const removeUser = createAction('Remove User');
