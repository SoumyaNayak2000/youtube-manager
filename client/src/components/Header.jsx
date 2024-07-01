import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import logo from "../assets/YT-MANAGER-removebg-preview.png"

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
       <HStack pos={'fixed'} top={4} left={4} zIndex={'overlay'} gap={"10px"}>
       <Image src={logo} alt="Logo" boxSize="5rem" mr={2} />
        <Button
          colorScheme="purple"
          p={'0'}
          w={'4rem'}
          h={'4rem'}
          borderRadius={'full'}
          onClick={onOpen}
        >
          <BiMenuAltLeft size={'2rem'} />
        </Button>
      </HStack>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader><h3> Youtube - Manager</h3></DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/videos?catagory=free'}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={'ghost'}>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            
          </DrawerBody>

          <DrawerFooter>
            <HStack
              pos={'absolute'}
              bottom={10}
              left={0}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={'outline'}>
                <Link to={'/signup'} >Sign Up</Link>
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
