import {Home} from "./src/Pages/Home";
import {TasksProvider} from "./src/context/TasksContext";

export default function App() {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
}
