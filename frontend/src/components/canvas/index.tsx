import * as React from "react";
import { useShowcaseCanvas } from "./hook";

export const Canvas: React.FC = () => {
  const [ref] = useShowcaseCanvas();

  return <div ref={ref} />;
};
