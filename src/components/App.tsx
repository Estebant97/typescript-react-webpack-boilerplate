import * as React from "react";
import { HelloWorldProps } from "./data";
export * from "./data";
import { Name } from "./Name";
const App: React.FC<HelloWorldProps> = ({ userName, lang }) => {
  return <Name userName={userName} lang={lang} />;
};
export { App };
