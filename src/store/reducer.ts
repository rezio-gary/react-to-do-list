/* eslint-disable no-fallthrough */
import type { Store } from "./actions";
import { Actions } from "./actions";

const initialState: Store = {
  newTaskText: "",
  currentColumn: "all",
  allTaskList: [],
};

const reducer = (
  state = initialState,
  action: { type: Actions; newText: string; taskId: string }
) => {
  switch (action.type) {
    case Actions.ENTER_NEW_TASK_TEXT:
      return {
        ...state,
        newTaskText: action.newText,
      };
    case Actions.ADD_TASK:
      // add it to the allTaskList
      if (state.newTaskText === undefined || state.newTaskText.length === 0)
        break;

      const newAllTaskList = state.allTaskList.concat({
        key: new Date() + state.newTaskText + Math.random(),
        id: new Date() + state.newTaskText + Math.random(),
        text: state.newTaskText,
        done: false,
      });

      return {
        ...state,
        newTaskText: "",
        allTaskList: newAllTaskList,
      };
    case Actions.DELETE_TASK:
      return {
        ...state,
        allTaskList: state.allTaskList.filter(
          (task) => task.id !== action.taskId
        ),
      };
    case Actions.CLICK_CHECKBOX:
      const index = state.allTaskList.findIndex(
        (listItem) => listItem.id === action.taskId
      );
      const target = state.allTaskList[index];
      return {
        ...state,
        allTaskList: Object.assign([], state.allTaskList, {
          [index]: { ...target, done: !target.done },
        }),
      };
    case Actions.CLICK_TO_DO:
      return { ...state, currentColumn: "to do" };
    case Actions.CLICK_DONE:
      return { ...state, currentColumn: "done" };
    case Actions.CLICK_ALL:
      return { ...state, currentColumn: "all" };
    default:
      return state;
  }
  return state;
};

export default reducer;

export const visibleSelector = (state: Store) =>
  state.currentColumn === "all"
    ? state.allTaskList
    : state.currentColumn === "done"
    ? state.allTaskList.filter(({ done }) => done === true)
    : state.allTaskList.filter(({ done }) => done === false);
