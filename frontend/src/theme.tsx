import * as React from "react";
import { theme as base, ThemeProvider, CSSReset } from "@chakra-ui/core";

export const theme: typeof base = {
  ...base,
  radii: {
    ...base.radii,
    md: "1rem",
    lg: "2.25rem",
  },
};

export const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};
