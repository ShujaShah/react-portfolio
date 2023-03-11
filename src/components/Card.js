import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <VStack alignItems="flex-start" bg="white" sx={{ borderRadius: "5%" }} textAlign={["left"]} h="fit">
        <Image src={imageSrc} sx={{ borderRadius: "5%" }} />
        <VStack alignItems="flex-col" mx="auto" ml="5">
          <Heading ml="5" color="black" size="md">
            {title}
          </Heading>
          <Text textAlign={["left"]} pl="5" color="black">
            {description}
          </Text>
        </VStack>
        <HStack pb="5">
          <Text color="black" ml="5">
            See More
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>
      </VStack>
    </>
  );
};

export default Card;
