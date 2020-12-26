import * as React from "react";
import { MainLayout } from "components/layout/main";
import { Controls } from "components/controls";
import { Box } from "@chakra-ui/react";

export const App: React.FC = () => {
  return (
    <MainLayout bg="purple.400">
      <Box height={["60vh", "100vh"]} />
      <Controls />
    </MainLayout>
  );
};
