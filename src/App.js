import { Flex, VStack, Heading, Spacer } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { IconButton } from '@chakra-ui/button'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaHome } from 'react-icons/fa'
import Header from './components/Header'
import Social from './components/Social'
import Profile from './components/Profile'

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="white" //cyan.400
        >
          <IconButton icon={<FaHome />} position="fixed" isRound="true" onClick="#" ></IconButton>
        </Heading>
        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound="true" onClick={() => window.open("https://www.linkedin.com/in/nahuel-tomás-abadia/")} ></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound="true" onClick={() => window.open("https://www.instagram.com/nahue.abadia/?hl=es-la")} ></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound="true" onClick={() => window.open("https://github.com/NahuelAbadia")} ></IconButton>
        {/* Dentro del iconbutton hago un operador ternario donde digo que si la variable isDark tiene como colorMode "dark" entonces que aparecezca el icono del sol y que el fondo sea oscuro. */}
        {/* En el index.js declaro que el tema principal va a ser el light */}
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
