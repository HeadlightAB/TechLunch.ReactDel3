import {
  FETCHING_PERSON,
  FETCHING_PERSON_ERROR,
  FETCHING_PERSON_SUCCESS,
  IPerson,
} from "./people-reducer";
// "https://swapi.dev/api/people"

export function fetchPerson(id: string) {
  return async function (dispatch: (action: any) => void) {
    dispatch({ type: FETCHING_PERSON });

    const response = await fetch(`https://swapi.dev/api/people/${id}`);

    if (response.ok) {
      const person: IPerson = await response.json();

      dispatch({ type: FETCHING_PERSON_SUCCESS, payload: person });
    } else {
      dispatch({ type: FETCHING_PERSON_ERROR });
    }
  };
}
