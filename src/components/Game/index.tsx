import { Accordion, Button, Center, Loader, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";

export interface Truth {
  Category: string; //"Truth",
  Question: string; //"Do you (or did you growing up) have any strange family traditions?",
  "Follow Up Q's": string; //""
}

export default function QuizGame() {
  const [triviaQuestions, seTriviaQuestions] = useState<Truth[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<Truth>();
  // const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let content;

  const selectTruthQuestion = (category: string) => {
    const filteredQuestion = triviaQuestions.filter( x => x.Category == category)
    const randomNumber = Math.floor(Math.random() * filteredQuestion.length);
    setSelectedQuestion(filteredQuestion[randomNumber]); // TODO: randomize question

  }

  useEffect(() => {
    const fetchHPers = async () => {
      setIsLoading(true);
      if (process.env.NODE_ENV === "development") {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Used for quick local development
        // const { juicytruths } = await import('../../fixtures/truths.json');
        // seTriviaQuestions(juicytruths);
      } else {
        const response = await (await fetch(`/api/juicytruths`)).json();
        //TODO: Clean up variables/mapping
        seTriviaQuestions(response.juicytruths);
      }
      setIsLoading(false);
    };

    if (triviaQuestions.length < 1) {
      fetchHPers();
    }
  }, [triviaQuestions]);


  if (isLoading) {
    content = <Loader />;
  } else {
    content = <Stack w={800}>
      <Title>
        Juicy <span style={{ fontWeight: 300 }}>truths 🔥</span>
      </Title>
      <Text mih={100}>
        {selectedQuestion ? selectedQuestion.Question : "Select a truth or juicy truth to get started"}
      </Text>
      {selectedQuestion && selectedQuestion["Follow Up Q's"] && <Accordion variant="filled">
        <Accordion.Item value="followup">
          <Accordion.Control>{'Follow up question!'}</Accordion.Control>
          <Accordion.Panel>{selectedQuestion["Follow Up Q's"]}</Accordion.Panel>
        </Accordion.Item>
       
      </Accordion>} 

      <SimpleGrid cols={2}>
        <Button onClick={() => selectTruthQuestion('Truth')}>Truth</Button>
        <Button variant="outline" onClick={() => selectTruthQuestion('Juicy Truth')}>Juicy truth 🔥</Button>
      </SimpleGrid>
    </Stack>
  }


  return (
    <Center h="90vh" p="xl">
      {content}
    </Center>
  );
}