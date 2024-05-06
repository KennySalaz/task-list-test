import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
    description?: string;
}

export interface TodosState {
    items: Todo[];
}

// Create Initial State
const initialState: TodosState = {
    items: [{
        description: 'item 1',
    }],
};

// Create Slice
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.items.push(action.payload)
        }
    },
});

export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
