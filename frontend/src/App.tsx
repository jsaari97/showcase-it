import * as React from "react";
import { MainLayout } from "components/layout/main";
import { Controls } from "components/controls";

export const App: React.FC = () => {
  return (
    <MainLayout>
      <Controls />
    </MainLayout>
  );
};
