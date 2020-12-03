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

const FETCHING_PERSON = "PEOPLE/FETCHING_PERSON";
const FETCHING_PERSON_SUCCESS = "PEOPLE/FETCHING_PERSON_SUCCESS";
const FETCHING_PERSON_ERROR = "PEOPLE/FETCHING_PERSON_ERROR";

const initialState: IPeopleState = {
  fetching: false,
  person: undefined,
  fetchingFailed: false,
};

export const peopleReducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    default:
      return state;
  }
};
