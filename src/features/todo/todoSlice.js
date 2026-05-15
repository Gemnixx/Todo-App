import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => 
            todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
    setEditId:(state,action)=>{
        state.editId = action.payload
    },
    setEditText:(state,action)=>{
        state.editText = action.payload
    }
  },
});
export const { addTodo, removeTodo,editTodo,setEditId,setEditText } = todoSlice.actions;
export default todoSlice.reducer;
