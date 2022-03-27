export const enum Actions {
  ENTER_NEW_TASK_TEXT = 'ENTER_NEW_TASK_TEXT',
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  CLICK_CHECKBOX = 'CLICK_CHECKBOX',
  CLICK_TO_DO = 'CLICK_TO_DO',
  CLICK_DONE = 'CLICK_DONE',
  CLICK_ALL = 'CLICK_ALL',
}

export type Store = {
  newTaskText: string
  currentColumn: 'all' | 'to do' | 'done'
  allTaskList: TodoItem[]
  visibleTaskList: TodoItem[]
}

export type TodoItem = {
  key: string,
  id: string,
  text: string,
  done: boolean,
}
