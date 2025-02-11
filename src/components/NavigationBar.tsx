import { Button, Flex, IconButton, useColorMode } from "@chakra-ui/core";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

const NavigationBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      flexDirection="row"
      backgroundColor={[
        colorMode === "light" ? "cottonCandyPink.500" : "transparent",
        "transparent",
      ]}
      border="4px solid"
      borderColor={[
        colorMode === "light" ? "transparent" : "gray.600",
        "transparent",
      ]}
      borderBottomColor="transparent"
      textAlign="right"
      width="100%"
      padding={["2px", "6px"]}
      position="relative"
      zIndex={999}
    >
      <Button
        backgroundColor={colorMode === "light" ? "violet.500" : "cyan.700"}
        color="white"
        leftIcon={colorMode === "light" ? "moon" : FaHeart}
        size="sm"
        marginLeft="auto"
        zIndex={999}
        onClick={toggleColorMode}
        _hover={{
          backgroundColor: colorMode === "light" ? "violet.600" : "cyan.800",
        }}
        _active={{
          backgroundColor: colorMode === "light" ? "violet.300" : "cyan.500",
        }}
        _focus={{
          boxShadow:
            colorMode === "light" ? "0 0 0 2px #a88aa3" : "0 0 0 2px #00A3C4",
        }}
      >
        {colorMode === "light" ? "Dark" : "Pink"} Mode
      </Button>
      <IconButton
        backgroundColor={colorMode === "light" ? "leafGreen.500" : "gray.500"}
        color="white"
        icon={GoMarkGithub}
        size="sm"
        marginLeft="6px"
        zIndex={999}
        aria-label=""
        onClick={() =>
          window.open("https://github.com/briannamcdonald/react-to-do-list")
        }
        _hover={{
          backgroundColor: colorMode === "light" ? "leafGreen.600" : "gray.600",
        }}
        _active={{
          backgroundColor: colorMode === "light" ? "leafGreen.300" : "gray.300",
        }}
        _focus={{
          boxShadow:
            colorMode === "light" ? "0 0 0 2px #989e92" : "0 0 0 2px #A0AEC0",
        }}
      ></IconButton>
    </Flex>
  );
};

export default NavigationBar;
