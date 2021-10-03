import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query';
import Icon from '@chakra-ui/icon'
import {DiCodeigniter, DiAndroid, DiWebplatform} from 'react-icons/di'

const Profile = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4x1" fontSize="60">
                    +2
                </Heading>
                <Text fontSize="20" color="gray.400">Años de experiencia</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="16">Desarrolador Frontend con conocimientos en Testing Automation</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
                    <Flex rounded="10" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
                        <Text color="white" p="4" fontSize="12" fontWeight="semibold">Android Apps</Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Profile
