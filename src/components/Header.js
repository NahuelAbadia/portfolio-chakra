import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import {Button} from '@chakra-ui/button';

const Header = () => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />

            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text mt={-8}fontSize="45" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="52" fontWeight="semibold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Nahuel Abadía</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Frontend Developer in progress with knowledges in React</Text>
                </Box>
                <Button mt={8} colorScheme="blue" onClick={()=>window.open("https://www.linkedin.com/in/nahuel-tomás-abadia/")}>Hire me :D</Button>
            </Flex>
        </Stack>
    )
}

export default Header