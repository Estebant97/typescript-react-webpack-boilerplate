import * as React from "react";
import { HelloWorldProps } from "./data";
export * from "./data";
const Name: React.FC<HelloWorldProps> = (props) => {
  return (
    <h1>
      Hi {props.userName} from React! Welcome to {props.lang}!
    </h1>
  );
};

export { Name };
