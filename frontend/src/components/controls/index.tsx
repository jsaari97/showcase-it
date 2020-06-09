import * as React from "react";
import { Box, Stack, Button } from "@chakra-ui/core";

export const Controls: React.FC = () => {
  return (
    <Box
      bg="white"
      roundedTop={["lg", "md"]}
      roundedBottom={["0", "md"]}
      overflow="auto"
      pt={16}
      pb={8}
      position={["static", "fixed"]}
      bottom={12}
      right={12}
      width={["auto", "22rem"]}
      shadow="lg"
    >
      <Stack spacing={8} px={4}>
        <Box rounded="md" height={20} bg="gray.300" />
        <Box rounded="md" height={20} bg="gray.300" />
        <Box rounded="md" height={20} bg="gray.300" />
        <Button py={8} size="lg" variantColor="pink">
          Export
        </Button>
      </Stack>
    </Box>
  );
};
