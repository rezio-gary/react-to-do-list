import {
  Checkbox,
  Flex,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Actions, Store, TodoItem } from "../store/actions";

const mapState = (state: Store) => {
  return {
    list: state.allTaskList,
  };
};

const mapDispatch = {
  onDeleteTask: (id: string) => ({ type: Actions.DELETE_TASK, taskId: id }),
  onClickCheckbox: (id: string) => ({
    type: Actions.CLICK_CHECKBOX,
    taskId: id,
  }),
};

const connector = connect(mapState, mapDispatch);

// type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends TodoItem, ConnectedProps<typeof connector> {}

const ListItem = (props: Props) => {
  const { colorMode } = useColorMode();

  const buttonColorModeStyling = {
    light: {
      backgroundColor: "leafGreen.500",
      _hover: { backgroundColor: "leafGreen.600" },
      _active: { backgroundColor: "leafGreen.300" },
      _focus: { boxShadow: "0 0 0 2px #989e92" },
    },
    dark: {
      backgroundColor: "cyan.600",
      _hover: { backgroundColor: "cyan.700" },
      _active: { backgroundColor: "cyan.400" },
      _focus: { boxShadow: "0 0 0 2px #4A5568" },
    },
  };

  return (
    <Flex
      flexDirection="row"
      background={colorMode === "light" ? "#f8bbd0" : "#4A5568"}
      width="100%"
      justifyContent="space-around"
      alignItems="center"
      position="relative"
      right="4px"
      border={colorMode === "light" ? "2px solid #e6aec1" : "2px solid #718096"}
      borderRadius="6px"
      boxShadow={
        colorMode === "light" ? "2px 2px 2px #cd82a4" : "2px 2px 2px #A0AEC0"
      }
      margin="4px"
    >
      <Checkbox
        variantColor={colorMode === "light" ? "leafGreen" : "cyan"}
        borderColor={colorMode === "light" ? "leafGreen.500" : "cyan.600"}
        color="white"
        size="lg"
        margin="6px 6px 6px 20px"
        paddingRight="6px"
        isChecked={props.done}
        onChange={() => props.onClickCheckbox(props.id)}
      ></Checkbox>
      <Text
        color={colorMode === "light" ? "gray.800" : "white"}
        fontSize={["2xl", "xl", "xl", "lg"]}
        fontFamily="Trebuchet MS"
        margin="6px auto"
        maxWidth={["70%", "80%"]}
        overflowWrap="break-word"
      >
        {props.text}
      </Text>
      <IconButton
        color="white"
        size="xs"
        aria-label="Delete item"
        icon="delete"
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin={["2px 12px 2px 6px", "6px 20px 6px 11px"]}
        onClick={() => props.onDeleteTask(props.id)}
        {...buttonColorModeStyling[colorMode]}
      />
    </Flex>
  );
};

export default connector(ListItem);
