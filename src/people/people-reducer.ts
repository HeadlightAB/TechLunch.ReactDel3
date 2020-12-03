import { Action } from "redux";

export interface IPerson {
  name: string;
  height: string;
  gender: string;
  url: string;
}

export interface IPeopleState {
  fetching: boolean;
  person: IPerson | undefined;
  fetchingFailed: boolean;
}

export const FETCHING_PERSON = "PEOPLE/FETCHING_PERSON";
export const FETCHING_PERSON_SUCCESS = "PEOPLE/FETCHING_PERSON_SUCCESS";
export const FETCHING_PERSON_ERROR = "PEOPLE/FETCHING_PERSON_ERROR";

const initialState: IPeopleState = {
  fetching: false,
  person: undefined,
  fetchingFailed: false,
};

export const peopleReducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case FETCHING_PERSON:
      return {
        ...state,
        fetching: true,
      };
    case FETCHING_PERSON_SUCCESS:
      return {
        ...state,
        fetching: false,
        person: (action as any).payload,
      };
    case FETCHING_PERSON_ERROR:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};
