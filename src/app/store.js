import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { setEditId, setEditText } from "../features/todo/todoSlice";
export const store = configureStore({
  reducer: { todos: todoReducer,
    editId:null,
    editText:""
   },
});
