import { Alert, AlertIcon, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { UserContext } from "../Contexts/UserContext";

export default function Login() {
  const { credentials } = useContext(UserContext);
  return (
    <Stack flexGrow={1} justify={"center"} alignItems={"center"}>
      <LoginForm />
      {credentials ? (
        <Alert width={"25%"} borderRadius={20} status="info">
          <AlertIcon />
          Yes, you can directly switch without explicitely logging out!
        </Alert>
      ) : (
        <></>
      )}
    </Stack>
  );
}
