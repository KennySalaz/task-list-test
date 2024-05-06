/**
 * @jest-environment jsdom
 */
import { describe, expect, it } from "@jest/globals";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Tasks from "../Tasks";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import React from "react";

describe("Task", () => {
  it("should render a default item", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Tasks />
        </BrowserRouter>
      </Provider>
    );
    expect(getByText("item 1")).toBeDefined();
  });

  it("should render add task modal", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Tasks />
        </BrowserRouter>
      </Provider>
    );

    const addTaskButton = getByText("New Task");

    fireEvent.click(addTaskButton);

    expect(getByText("New Task:")).toBeDefined();
  });

  it("should render add task modal and crete new item", () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Tasks />
        </BrowserRouter>
      </Provider>
    );

    const addTaskButton = getByText("New Task");

    fireEvent.click(addTaskButton);

    const inputTask = getByPlaceholderText("Task");

    fireEvent.change(inputTask, {
      target: { value: "item 2" },
    });

    const addButton = getByText("Add");

    fireEvent.click(addButton);

    expect(getByText("item 2")).toBeDefined();
  });
});
