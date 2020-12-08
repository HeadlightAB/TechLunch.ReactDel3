import * as React from "react";
import { useDispatch } from "react-redux";
import { TIME_CHANGED } from "../clock-reducer";

const UpdateClock: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    let timer = setInterval(() => {
      dispatch({
        type: TIME_CHANGED,
        payload: {
          hour: new Date().getHours(),
          minute: new Date().getMinutes(),
          second: new Date().getSeconds(),
        },
      });
    }, 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [dispatch]);

  return null;
};

export default UpdateClock;
