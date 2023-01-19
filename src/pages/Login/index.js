import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import logo from "./../../logo.svg";
import Header from "../../components/Header";

export default function Login() {
  return (
    <span>
    <Header />
    <Container
    maxW="lg"
    py={{
      base: "12",
      md: "24",
    }}
    px={{
      base: "0",
      sm: "8",
    }}
  >
    <Stack spacing="1">
      <Stack spacing="1">
        <img src={logo} className="App-logo" alt="logo" />
        <Stack
          spacing={{
            base: "2",
            md: "3",
          }}
          textAlign="center"
        >
          <Heading
            size={useBreakpointValue({
              base: "xs",
              md: "sm",
            })}
          >
            Log in to your account
          </Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Don't have an account?</Text> {''}
            <Text
            as={'span'}
            bgGradient="linear(to-r, red.400,pink.400)"
            style={{fontWeight:'bold'}}
            bgClip="text">
            Sign up
          </Text>
          </HStack>
        </Stack>
      </Stack>
      <Box
        py={{
          base: "0",
          sm: "8",
        }}
        px={{
          base: "4",
          sm: "10",
        }}
        bg={useBreakpointValue({
          base: "transparent",
          sm: "bg-surface",
        })}
        boxShadow={{
          base: "none",
          sm: useColorModeValue("md", "md-dark"),
        }}
        borderRadius={{
          base: "none",
          sm: "xl",
        }}
      >
        <Stack spacing="1">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button  variant="link" colorScheme="blue" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack>
          <Button
          fontFamily={'heading'}
          mt={8}
          w={'full'}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={'white'}
          _hover={{
            bgGradient: 'linear(to-r, red.400,pink.400)',
            boxShadow: 'xl',
          }}>
          Sign in
        </Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            <OAuthButtonGroup />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>  
    </span>
  );
}
