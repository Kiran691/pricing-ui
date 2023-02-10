import React from "react";
import{ Box, Flex, Text, Heading, Button, HStack, Icon } from"@chakra-ui/react";
import icon1 from "./icons/icon1";
import icon2 from "./icons/icon2";
import icon3 from "./icons/icon3";



export default function Features(){
    return (
        <Box maxW={"900px"}mx="auto" mt="25px" px={"50px"}>
            <Flex direction={{base:"column",lg:"row"}}>
                <HStack mb={"20px"}>
                    <Icon as={icon1}></Icon>
                    <Text>
                        30 days money back gurantee
                    </Text>
                </HStack>

                <HStack mb={"20px"}>
                    <Icon as={icon2}></Icon>
                    <Text>
                No signup fees 100% hassle-free
                    </Text>
                </HStack>

                <HStack mb={"20px"}>
                    <Icon as={icon3}></Icon>
                    <Text>
                        No monthly subscription, pay once and for all
                    </Text>
                </HStack>
            </Flex>
        </Box>
    );
}