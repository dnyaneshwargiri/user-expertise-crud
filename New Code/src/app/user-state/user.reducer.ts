
import { createReducer, on, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { removeUser, saveUser } from "./user.action";
import { UserModel } from "./user-model";

export const intialUser: UserModel = {
    id: ""
};

export const userReducer = createReducer(
    intialUser,

  on(removeUser, _ => intialUser ),

  on(saveUser, (user, newUser) => {
    return newUser;
  }),

)
