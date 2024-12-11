import "./App.css";
import Tasks from "./components/tasks";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 2000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Tasks />
    </AlertProvider>
  );
}

export default App;
