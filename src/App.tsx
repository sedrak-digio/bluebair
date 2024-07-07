import "@mantine/core/styles.css";
import { Container, LoadingOverlay, MantineProvider, Stack } from "@mantine/core";
import { theme } from "./theme";
import QuizGame from "./components/Game";

export default function App() {

  return <MantineProvider theme={theme}>

    <Container>
      <LoadingOverlay zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      <Stack p={"lg"} gap={'xl'}>
        {/* <Text>Bam! 😄</Text>
        <Text>Count: {counter}</Text>
        <Button onClick={incrementCounter}>Increment Counter</Button> */}
      
        <QuizGame />

      </Stack>

    </Container>

  </MantineProvider>;
}
