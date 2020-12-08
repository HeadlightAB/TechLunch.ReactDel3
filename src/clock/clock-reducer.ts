import { Action } from "redux";

export interface IClockState {
  hour: number;
  minute: number;
  second: number;
}

export const TIME_CHANGED = "CLOCK/TIME_CHANGED";

const intialState = {
  hour: new Date().getHours(),
  minute: new Date().getMinutes(),
  second: new Date().getSeconds(),
};

export const clockReducer = (state = intialState, action: Action<string>) => {
  switch (action.type) {
    case TIME_CHANGED:
      return {
        ...state,
        hour: (action as any).payload.hour,
        minute: (action as any).payload.minute,
        second: (action as any).payload.second,
      };
    default:
      return state;
  }
};
