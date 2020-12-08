import { IPeopleState, peopleReducer } from "../people/people-reducer";
import { IClockState, clockReducer } from "../clock/clock-reducer";

export interface IApplicationState {
  people: IPeopleState;
  clock: IClockState;
}

export const reducers = {
  people: peopleReducer,
  clock: clockReducer,
};
