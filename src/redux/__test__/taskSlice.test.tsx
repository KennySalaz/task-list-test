/**
 * @jest-environment jsdom
 */
import { describe, expect, it } from "@jest/globals";
import TaskSlice, { addTodo } from "../TaskSlice.ts";
describe("taskSlice", () => {
  it("should add a task to the state", () => {
    const initialState = {
      items: [],
    };
    const Task = { id: 1, title: "Task 1", description: "Description 1" };
    const action = addTodo(Task);
    const state = TaskSlice(initialState, action);
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toEqual(Task);
  });
});
