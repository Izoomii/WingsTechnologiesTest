import React from "react";
import { Stack, Box } from "@chakra-ui/react";

export default function Home(): JSX.Element {
  return (
    <Stack paddingY={10} paddingX={32}>
      <Box fontSize={50} fontWeight="bold">
        Home
      </Box>
    </Stack>
  );
}
