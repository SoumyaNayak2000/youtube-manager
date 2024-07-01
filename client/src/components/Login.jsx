import React, { useState } from 'react';
import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions'; // Assuming loginUser is your action creator

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/users/login', {
        email,
        password,
      });

      // Assuming response.data contains user information
      dispatch(loginUser(response.data)); // Dispatch action to store user info in Redux

      toast({
        title: 'Logged in successfully.',
        description: 'Welcome back!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      navigate('/'); // Redirect to home page
    } catch (error) {
      toast({
        title: 'An error occurred.',
        description: 'Unable to log in.',
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
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>

          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>

          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
