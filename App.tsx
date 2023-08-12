import {Home} from "./src/Pages/Home";
import {TasksContext} from "./src/context/TasksContext";

export default function App() {
  return (
    <TasksContext.Provider value={{id: "1", title: "Task01"}}>
      <Home />
    </TasksContext.Provider>
  );
}
