import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Shuja Shah!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection justifyContent="center" alignItems="center" isDarkBackground backgroundColor="#2A4365">
    <VStack>
      <Avatar
        name="S"
        size="xl"
        src="https://media.licdn.com/dms/image/D4D03AQFUlaCFKdFYEQ/profile-displayphoto-shrink_100_100/0/1665982021021?e=1683763200&v=beta&t=KAiD-MIBdO9QeBMli6IqTdoDfQKFem7d_4CaoiWPcZs"
      ></Avatar>
      <h1>{greeting}</h1>
      <Heading mt="10">{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
