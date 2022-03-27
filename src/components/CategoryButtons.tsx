import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Button, Flex, useColorMode } from "@chakra-ui/core";
import { FaListUl } from "react-icons/fa";

import {Actions, Store} from "../store/actions";


const mapState = (state: Store) => ({
  currentCol: state.currentColumn,
  list: state.allTaskList,
  visibleList: state.visibleTaskList,
})

const mapDispatch = {
    onClickToDo: () => ({ type: Actions.CLICK_TO_DO }),
    onClickDone: () => ({ type: Actions.CLICK_DONE }),
    onClickAll: () => ({ type: Actions.CLICK_ALL }),
}

const connector = connect(mapState, mapDispatch)

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {
}

const CategoryButtons = ({currentCol,onClickToDo,onClickDone,onClickAll,}: Props) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "mauve.500", dark: "gray.600" };
  const selectedBgColor = { light: "violet.500", dark: "cyan.700" };
  const hoverColor = { light: "mauve.600", dark: "gray.700" };
  const selectedHoverColor = { light: "violet.600", dark: "cyan.800" };
  const activeColor = { light: "mauve.300", dark: "gray.400" };
  const selectedActiveColor = { light: "violet.300", dark: "cyan.500" };

  return (
    <Flex
      flexDirection="row"
      width="100%"
      margin="2px auto 6px auto"
      justifyContent="center"
      position="relative"
      left={["0", "4px"]}
    >
      <Button
        backgroundColor={
          currentCol === "to do"
            ? selectedBgColor[colorMode]
            : bgColor[colorMode]
        }
        color="white"
        width="33%"
        margin={["2px 1px", "2px"]}
        fontSize={["xl", "lg", "lg", "md"]}
        leftIcon="calendar"
        onClick={onClickToDo}
        _hover={{
          backgroundColor:
            currentCol === "to do"
              ? selectedHoverColor[colorMode]
              : hoverColor[colorMode],
        }}
        _active={{
          backgroundColor:
            currentCol === "to do"
              ? selectedActiveColor[colorMode]
              : activeColor[colorMode],
        }}
        _focus={{
          boxShadow:
            colorMode === "light" ? "0 0 0 2px #a88aa3" : "0 0 0 2px #00A3C4",
        }}
      >
        To Do
      </Button>
      <Button
        backgroundColor={
          currentCol === "done"
            ? selectedBgColor[colorMode]
            : bgColor[colorMode]
        }
        color="white"
        width="33%"
        margin={["2px 1px", "2px"]}
        fontSize={["xl", "lg", "lg", "md"]}
        leftIcon="check-circle"
        onClick={onClickDone}
        _hover={{
          backgroundColor:
            currentCol === "done"
              ? selectedHoverColor[colorMode]
              : hoverColor[colorMode],
        }}
        _active={{
          backgroundColor:
            currentCol === "done"
              ? selectedActiveColor[colorMode]
              : activeColor[colorMode],
        }}
        _focus={{
          boxShadow:
            colorMode === "light" ? "0 0 0 2px #a88aa3" : "0 0 0 2px #00A3C4",
        }}
      >
        Done
      </Button>
      <Button
        backgroundColor={
          currentCol === "all"
            ? selectedBgColor[colorMode]
            : bgColor[colorMode]
        }
        color="white"
        width="33%"
        margin={["2px 1px", "2px"]}
        fontSize={["xl", "lg", "lg", "md"]}
        leftIcon={FaListUl}
        onClick={onClickAll}
        _hover={{
          backgroundColor:
            currentCol === "all"
              ? selectedHoverColor[colorMode]
              : hoverColor[colorMode],
        }}
        _active={{
          backgroundColor:
            currentCol === "all"
              ? selectedActiveColor[colorMode]
              : activeColor[colorMode],
        }}
        _focus={{
          boxShadow:
            colorMode === "light" ? "0 0 0 2px #a88aa3" : "0 0 0 2px #00A3C4",
        }}
      >
        All Tasks
      </Button>
    </Flex>
  );
};

export default connector(CategoryButtons);
