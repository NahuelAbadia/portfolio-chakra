import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from "@chakra-ui/react"

const Header = () => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />

            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "50" : "0"} //en el primer valor por default iria 32
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="42" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="49" fontWeight="semibold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Nahuel Abadía</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Frontend Developer in progress with knowledges in React</Text>
                    <Button mt={8} colorScheme="blue" onClick={() => window.open("https://www.linkedin.com/in/nahuel-tomás-abadia/")}>Hire me :D</Button>
                </Box>
                <Image alignSelf="center" position="relative" mt={isNotSmallerScreen ? "0" : "12"} ml={30}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full"
                    backgroundColor="transparent" boxShadow="lg" boxSize="300px" src="https://avatars.githubusercontent.com/u/83714110?v=4" />
            </Flex>
        </Stack>
    )
}

export default Header