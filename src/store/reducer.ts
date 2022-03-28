/* eslint-disable no-fallthrough */
import type { Store } from './actions'
import { Actions } from "./actions";

const initialState: Store = {
  newTaskText: "",
  currentColumn: "all",
  allTaskList: [],
  visibleTaskList: [],
};

const reducer = (state = initialState, action: {type: Actions, newText: string, taskId: string}) => {
  switch (action.type) {
    case Actions.ENTER_NEW_TASK_TEXT:
      return {
        ...state,
        newTaskText: action.newText,
      };
    case Actions.ADD_TASK:
      // add it to the allTaskList
      if (state.newTaskText === undefined || state.newTaskText.length === 0)
        return

      const newAllTaskList = state.allTaskList.concat({
        key: new Date() + state.newTaskText + Math.random(),
        id: new Date() + state.newTaskText + Math.random(),
        text: state.newTaskText,
        done: false,
      });
      // find out which column is currently visible and update visibleTaskList accordingly
      let newVisTaskList = [];
      if (state.currentColumn === "all") {
        newVisTaskList = newAllTaskList;
      } else if (state.currentColumn === "to do") {
        newVisTaskList = newAllTaskList.filter((task) => !task.done);
      } else if (state.currentColumn === "done") {
        newVisTaskList = newAllTaskList.filter((task) => task.done);
      } else {
        newVisTaskList = newAllTaskList;
      }

      return {
        ...state,
        newTaskText: "",
        allTaskList: newAllTaskList,
        visibleTaskList: newVisTaskList,
      };
    case Actions.DELETE_TASK:
      // remove it from the allTaskList
      const updatedTaskList = state.allTaskList.filter(
        (task) => task.id !== action.taskId
      );
      // find out which column is currently visible and update visibleTaskList accordingly
      let updatedVisibleTaskList = [];
      if (state.currentColumn === "all") {
        updatedVisibleTaskList = updatedTaskList;
      } else if (state.currentColumn === "to do") {
        updatedVisibleTaskList = updatedTaskList.filter((task) => !task.done);
      } else if (state.currentColumn === "done") {
        updatedVisibleTaskList = updatedTaskList.filter((task) => task.done);
      } else {
        updatedVisibleTaskList = updatedTaskList;
      }

      return {
        ...state,
        allTaskList: updatedTaskList,
        visibleTaskList: updatedVisibleTaskList,
      };
    case Actions.CLICK_CHECKBOX:
      // find the item in the list that matches the id given
      const item = state.allTaskList.find(
        (listItem) => listItem.id === action.taskId
      );
      // find the index of that item
      const index = state.allTaskList.indexOf(item!);
      // update the done property of the item to be opposite to what it was before in the allTaskList
      const newTaskList = [
        ...state.allTaskList.slice(0, index),
        {
          ...state.allTaskList[index],
          done: !state.allTaskList[index].done,
        },
        ...state.allTaskList.slice(index + 1),
      ];

      // find out which column is currently visible and update visibleTaskList accordingly
      let newVisibleTaskList = [];
      if (state.currentColumn === "all") {
        newVisibleTaskList = newTaskList;
      } else if (state.currentColumn === "to do") {
        newVisibleTaskList = newTaskList.filter((task) => !task.done);
      } else if (state.currentColumn === "done") {
        newVisibleTaskList = newTaskList.filter((task) => task.done);
      } else {
        newVisibleTaskList = newTaskList;
      }

      return {
        ...state,
        allTaskList: newTaskList,
        visibleTaskList: newVisibleTaskList,
      };
    case Actions.CLICK_TO_DO:
      const newToDoList = state.allTaskList.filter((task) => !task.done);
      return {
        ...state,
        currentColumn: "to do",
        visibleTaskList: newToDoList,
      };
    case Actions.CLICK_DONE:
      const newDoneList = state.allTaskList.filter((task) => task.done);
      return {
        ...state,
        currentColumn: "done",
        visibleTaskList: newDoneList,
      };
    case Actions.CLICK_ALL:
      return {
        ...state,
        currentColumn: "all",
        visibleTaskList: state.allTaskList,
      };
    default:
      return state;
  }
};

export default reducer;
