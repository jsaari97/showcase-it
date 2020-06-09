import * as React from "react";
import { Box } from "@chakra-ui/core";

interface MainLayoutProps {
  bg: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, bg }) => {
  return <Box bg={bg}>{children}</Box>;
};
