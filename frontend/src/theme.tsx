import * as React from "react";
import { theme as base, ThemeProvider, CSSReset } from "@chakra-ui/core";

export const theme = {
  ...base,
};

export const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};
