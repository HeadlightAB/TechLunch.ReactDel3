import * as React from "react";
import { useSelector } from "react-redux";
import { IApplicationState } from "../../redux/root-reducer";

const DisplayClock: React.FC = () => {
  const { currentTime } = useSelector((state: IApplicationState) => ({
    currentTime: `${state.clock.hour}:${state.clock.minute}:${state.clock.second}`,
  }));
  return (
    <div>
      <span>{currentTime}</span>
    </div>
  );
};

export default DisplayClock;
