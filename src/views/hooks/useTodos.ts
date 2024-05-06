import { addTodo, Todo } from "../../redux/TaskSlice";
import { useDispatch } from "react-redux";

export default function useTodos() {
  const dispatch = useDispatch();
  const addItems = (item: Todo) => {
    if (item) {
      dispatch(addTodo(item));
    }
  };
  return { addItems };
}
