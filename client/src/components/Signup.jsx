import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios'; // Make sure to install axios for making HTTP requests

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState(null); // File input
  const [avatarPreview, setAvatarPreview] = useState(null); // Preview URL
  const [coverImage, setCoverImage] = useState(null); // Optional cover image input
  const toast = useToast();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: 'Password mismatch.',
        description: 'Password and Confirm Password do not match.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('fullName', fullName);
    formData.append('password', password);
    if (avatar) formData.append('avatar', avatar);
    if (coverImage) formData.append('coverImage', coverImage);

    try {
      const response = await axios.post('http://localhost:8080/api/v1/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Clear input fields after successful submission
      setUsername('');
      setEmail('');
      setFullName('');
      setPassword('');
      setConfirmPassword('');
      setAvatar(null);
      setAvatarPreview(null);
      setCoverImage(null);
    } catch (error) {
      toast({
        title: 'An error occurred.',
        description: 'Unable to create account.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form onSubmit={handleSubmit}>
        <VStack
          alignItems={'stretch'}
          spacing={'5'}
          w={['full', '96']}
          m={'auto'}
        >
          <Heading alignSelf={'center'}>Youtube - Manager</Heading>
          <Avatar alignSelf={'center'} boxSize={'20'} src={avatarPreview} />

          <Input
            placeholder={'Username'}
            type={'text'}
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Full Name'}
            type={'text'}
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            focusBorderColor={'purple.500'}
          />
          <InputGroup>
            <Input
              placeholder={'Password'}
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              focusBorderColor={'purple.500'}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup>
            <Input
              placeholder={'Confirm Password'}
              type={'password'}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              focusBorderColor={'purple.500'}
            />
          </InputGroup>
          
          <Box>
            <Center>
              <Text mb={2} mr={2}>Upload Avatar</Text>
              <Input
                type="file"
                accept="image/*"
                required
                onChange={handleAvatarChange}
                style={{ display: 'none' }}
                id="avatar"
              />
              <label htmlFor="avatar">
                <Button as="span" colorScheme="purple" size="md">
                  Choose File
                </Button>
                {avatar && (
                  <Text mt={2} color="gray.500">
                    {avatar.name}
                  </Text>
                )}
              </label>
            </Center>
          </Box>
          
          <Box>
            <Center>
              <Text mb={2} mr={2}>Upload Cover Image (Optional)</Text>
              <Input
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
                style={{ display: 'none' }}
                id="coverImage"
              />
              <label htmlFor="coverImage">
                <Button as="span" colorScheme="purple" size="md">
                  Choose File
                </Button>
                {coverImage && (
                  <Text mt={2} color="gray.500">
                    {coverImage.name}
                  </Text>
                )}
              </label>
            </Center>
          </Box>

          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already Signed Up?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
