import { Button, Flex, Input, Text, useColorMode } from "@chakra-ui/core";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Actions, Store } from "../store/actions";
import { visibleSelector } from "../store/reducer";

const mapState = (state: Store) => ({
  newText: state.newTaskText,
  allList: state.allTaskList,
  visibleList: visibleSelector(state),
});

const mapDispatch = {
  onEnterNewTaskText: (text: string) => ({
    type: Actions.ENTER_NEW_TASK_TEXT,
    newText: text,
  }),
  onAddTask: () => ({ type: Actions.ADD_TASK }),
};

const connector = connect(mapState, mapDispatch);

interface Props extends ConnectedProps<typeof connector> {}

const TitleAndInput = (props: Props) => {
  const { colorMode } = useColorMode();
  const buttonColorModeStyling = {
    light: {
      backgroundColor: "mauve.500",
      _hover: { backgroundColor: "mauve.600" },
      _active: { backgroundColor: "mauve.300" },
      _focus: { boxShadow: "0 0 0 2px #d0a9bb" },
    },
    dark: {
      backgroundColor: "gray.600",
      _hover: { backgroundColor: "gray.700" },
      _active: { backgroundColor: "gray.400" },
      _focus: { boxShadow: "0 0 0 2px #00A3C4" },
    },
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.which === 13) {
      props.onAddTask();
    }
  };

  return (
    <div>
      <b>
        <Text
          color={colorMode === "light" ? "gray.700" : "gray.100"}
          fontSize={["4xl", "4xl", "4xl", "3xl"]}
          fontFamily="Trebuchet MS"
          margin="8px"
        >
          To-Do List
        </Text>
      </b>
      <Flex
        flexDirection="row"
        width={["calc(100% - 14px)", "85%"]}
        margin="0 auto"
        position="relative"
        right="4px"
      >
        <Input
          placeholder="Enter a new task..."
          backgroundColor={colorMode === "light" ? "white" : "gray.100"}
          borderColor="gray.200"
          color="gray.700"
          focusBorderColor={colorMode === "light" ? "violet.300" : "cyan.700"}
          margin="8px 1px"
          fontSize={["xl", "lg", "lg", "md"]}
          position="relative"
          left="4px"
          value={props.newText}
          onChange={(event) =>
            props.onEnterNewTaskText(event.currentTarget.value)
          }
          onKeyPress={onKeyPress}
          _placeholder={{
            color: colorMode === "light" ? "gray.400" : "gray.500",
            fontSize: ["xl", "lg", "lg", "md"],
          }}
        />
        <Button
          color="white"
          margin="8px 1px"
          fontSize={["xl", "lg", "lg", "md"]}
          position="relative"
          left="4px"
          onClick={props.onAddTask}
          {...buttonColorModeStyling[colorMode]}
        >
          Add Task
        </Button>
      </Flex>
      <hr
        style={{
          borderWidth: "1px",
          margin: "8px",
          marginBottom: "10px",
          borderColor: colorMode === "light" ? "#f8bbd0" : "#4A5568",
        }}
      />
    </div>
  );
};

export default connector(TitleAndInput);
