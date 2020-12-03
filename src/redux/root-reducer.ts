import { IPeopleState, peopleReducer } from "../people/people-reducer";

export interface IApplicationState {
  people: IPeopleState;
}

export const reducers = {
  people: peopleReducer,
};
