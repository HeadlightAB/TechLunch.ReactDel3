import { Action } from "redux";

export interface IClockState {
  hour: number;
  minute: number;
}

export const TIME_CHANGED = "CLOCK/TIME_CHANGED";

const intialState = {
  hour: new Date().getHours(),
  minute: new Date().getMinutes(),
};

export const clockReducer = (state = intialState, action: Action<string>) => {
  switch (action.type) {
    case TIME_CHANGED:
      return {
        ...state,
        hour: (action as any).payload.hour,
        minute: (action as any).payload.minute,
      };
    default:
      return state;
  }
};
