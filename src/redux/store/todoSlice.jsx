import { accordionActionsClasses } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      title: 'todo1',
      type: 'business',
      place: 'London',
      time: '3',
      completed: false,
    },
    {
      id: 2,
      title: 'todo2',
      type: 'personal',
      place: 'London',
      time: '2',
      completed: false,
    },
    {
      id: 3,
      title: 'todo3',
      type: 'personal',
      place: 'London',
      time: '11',
      completed: true,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        type: action.payload.type,
        place: action.payload.place,
        time: action.payload.time,
        completed: false,
      };
      state.push(newTodo);
    },
  },
  // reducers: {
  //   addTodo: (state, action) =>
  //     state.todos.id = action.payload.id;
  //     state.todos.title = action.payload.title;
  //     state.todos.place = action.payload.place;
  //     state.todos.time = action.payload.time;
  //     state.todos.completetd = action.payload.completed;
  //   },
  // },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
