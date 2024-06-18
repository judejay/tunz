import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { useAuth } from "../lib/mutations";
import { useState } from "react";
import NextImage from "next/image";

export const AuthForm: React.FC<{ mode: "signup" | "signin" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box height="100vh" width="100vh" bg="black" color="white">
      <Flex justify="center" align="center" height="100px">
        <NextImage alt="logo" src="/logo.svg" width={100} height={100} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100% - 100px)">
        <Box width="400px" p={4} bg="white" borderRadius={8}>
          <Text fontSize="2xl" mb={4}>
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </Text>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={async () => {
              setIsLoading(true);
              await useAuth(mode, { email, password });
              setIsLoading(false);
              router.push("/");
            }}
            isLoading={isLoading}
            colorScheme="blue"
            width="100%"
            mt={4}
          >
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </Button>
          <Text mt={4}>
            {mode === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}

            <Link
              ml={2}
              color="blue.500"
              onClick={() =>
                router.push(mode === "signin" ? "/signup" : "/signin")
              }
            >
              {mode === "signin" ? "Sign Up" : "Sign In"}
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
