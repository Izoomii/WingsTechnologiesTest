import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";
import { UserContext } from "../Contexts/UserContext";
import { Navigate } from "react-router-dom";

interface LoginInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [redirect, setRedirect] = useState(false);
  const { register, handleSubmit } = useForm<LoginInputs>();

  const { setCredentials } = useContext(UserContext);

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setCredentials(data);
    setRedirect(true);
  };
  if (redirect) return <Navigate to={"/posts"} />;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl shadow={"xl"} borderRadius={20} padding={16}>
        <Text fontWeight={"bold"} fontSize={32} textAlign={"center"}>
          Login
        </Text>
        <Stack paddingY={4} spacing={0}>
          <FormLabel fontSize={18} htmlFor="email">
            Email:
          </FormLabel>
          <Input
            padding={5}
            borderRadius={12}
            id="email"
            type={"email"}
            placeholder="email@example.com"
            {...register("email", { required: "Email is required!" })}
          />
        </Stack>
        <Stack paddingY={4} spacing={0}>
          <FormLabel fontSize={18} htmlFor="password">
            Password
          </FormLabel>
          <Input
            padding={5}
            borderRadius={12}
            id="password"
            type={"password"}
            placeholder="password"
            {...register("password", { required: "Password is required!" })}
          />
        </Stack>
        <Button
          padding={6}
          marginY={5}
          borderRadius={12}
          width="full"
          colorScheme={"red"}
          type="submit"
        >
          Login
        </Button>
      </FormControl>
    </form>
  );
}
