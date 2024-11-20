import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const fetchTask = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tasks");
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div>
      <h1>tet</h1>
    </div>
  );
}

export default App;
