import React from "react";
import { Box, Heading, Text, Flex, HStack, Icon, Button } from "@chakra-ui/react";

import CheckMarkIcon from './icons/CheckMarkIcon';


export default function Pricing(){
  return (
    <Box
     maxW={"950px"} mx={{base:"20px",lg:"auto"}}mt={"-150px"}bg="white"borderRadius={"16px"}overflow="hidden"boxShadow={"Opx 20px 25px-5px rgba(0,0,0,0.1),Opx 10px 10px -5px rgba(0,0,0,0.04);"}>

     <Flex direction={{base:"column",md:"column",lg:"row"}}>
      <Box bg={"#dab8ef"} p="60px" textAlign={"center"}>
        <Text fontSize={"24px"} fontWeight= "bold">Premium Pro</Text>
        <Heading fontSize={"60px"}>$329</Heading>
        <Text>build just once</Text>
        <Button mt="20px" w="300px" color="white"bg="#805AD5">Get Started</Button> 
    </Box>
      
      <Box pt="50px"pl="25px"pr="50x">
     <Text mb={"10px"}>
      Access these features when you get this pricing package for your business.
     </Text>
     <HStack mb={"15px"}>
      <Icon as={CheckMarkIcon}></Icon>
      <Text>International calling and messaging API</Text>
     </HStack>
     <HStack mb={"15px"}>
      <Icon as={CheckMarkIcon}></Icon>
      <Text>
        Additional phone numbers
      </Text>
     </HStack>
     <HStack mb={"15px"}>
      <Icon as={CheckMarkIcon}></Icon>
      <Text>
        Automated messages via Zapier
      </Text>
     </HStack>
     <HStack mb={"15px"}>
      <Icon as={CheckMarkIcon}></Icon>
      <Text>
        24/7 support and consulting
      </Text>
     </HStack>
     </Box>
      </Flex>
    </Box>
  );
}
