import  Counter  from "./components/Counter";
import { Todo } from "./components/Todo";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/todo',
    element: <Todo />
  }
];

export default AppRoutes;
