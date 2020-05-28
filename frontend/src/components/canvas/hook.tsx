import * as React from "react";

export const useShowcaseCanvas = () => {
  const ref = React.useRef<HTMLCanvasElement>(null);

  return [ref];
};
