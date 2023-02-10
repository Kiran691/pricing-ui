"use client"
import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/layout"
import {ChakraProvider} from "@chakra-ui/react"



export default function Header() {
  return (
    <Box textAlign={"center"} bg="#997ed7" pt="90px"
    pb="250px" color={"White"}>
        <Heading pb="10px">
            Simple pricing for your business
        </Heading>
        <Text pt={"15px"}>
        Plans that are carefully crafted to suit your business
        </Text>
    </Box>
  )
}
