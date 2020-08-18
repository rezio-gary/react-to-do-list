import React from "react";
import { Text, Flex, useColorMode } from "@chakra-ui/core";
import { connect } from "react-redux";

import NavigationBar from "./../components/NavigationBar";
import ListItem from "./../components/ListItem";
import CategoryButtons from "./../components/CategoryButtons";
import TitleAndInput from "./TitleAndInput";

const ToDoList = (props) => {
  /*  Checks if visibleList is undefined and if so, maps from the allList instead. 
        This is done to avoid errors when the app first starts up.  */
  const getList = () => {
    let list = [];
    if (!props.visibleList) {
      list = props.allList;
    } else {
      list = props.visibleList;
    }
    return list;
  };

  const { colorMode } = useColorMode();
  const backgroundStyling = {
    backgroundColor: colorMode === "light" ? "#f9e1e6" : "#1A202C",
    width: "45%",
    height: "calc(100% - 8px)",
    borderRadius: "8px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    overflowY: "auto",
    border: colorMode === "light" ? "4px solid #f8bbd0" : "4px solid #4A5568",
  };

  return (
    <div>
      <NavigationBar />
      <div style={{ ...backgroundStyling }}>
        <TitleAndInput />
        <Flex flexDirection="column" width="85%" margin="0 auto">
          <CategoryButtons />
          <div
            style={{
              display: props.allList.length === 0 ? "block" : "none",
            }}
          >
            <Flex
              height="100%"
              position="relative"
              left="4px"
              top="25vh"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                color={colorMode === "light" ? "gray.700" : "gray.100"}
                fontSize="xl"
                fontFamily="Trebuchet MS"
              >
                Start adding tasks!
              </Text>
            </Flex>
          </div>
          {getList().map((listItem) => (
            <ListItem
              key={listItem.key}
              id={listItem.id}
              text={listItem.text}
              done={listItem.done}
            />
          ))}
        </Flex>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allList: state.allTaskList,
    visibleList: state.visibleTaskList,
  };
};

export default connect(mapStateToProps)(ToDoList);
