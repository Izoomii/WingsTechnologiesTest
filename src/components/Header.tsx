import React, { useContext } from "react";
import { Box, Button, HStack, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const Header = (): JSX.Element => {
  const { credentials, setCredentials } = useContext(UserContext);

  const logout = () => {
    setCredentials(null);
    localStorage.setItem("user", "");
  };

  return (
    <HStack paddingY={10} paddingX={32} shadow={"md"} height={20}>
      <Box fontSize={30} fontWeight="bold" flexGrow={1}>
        Logo
      </Box>
      <Link as={ReactLink} to={"/"}>
        <Button paddingX={30} colorScheme={"red"} variant={"ghost"}>
          Home
        </Button>
      </Link>

      {credentials ? (
        <>
          <Link as={ReactLink} to={"/posts"}>
            <Button paddingX={30} colorScheme={"red"} variant={"outline"}>
              Posts
            </Button>
          </Link>
          <Button
            colorScheme={"yellow"}
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Button>
        </>
      ) : (
        <Link as={ReactLink} to={"/login"}>
          <Button paddingX={30} colorScheme={"red"} textColor={"white"}>
            Login
          </Button>
        </Link>
      )}
    </HStack>
  );
};

export default Header;
