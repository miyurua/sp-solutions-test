import "./App.css";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import TaskStatusSection from "./components/TaskStatusSection";
import WorkflowSection from "./components/WorkflowSection";

function App() {
  return (
    <div className="flex flex-row p-5 w-full justify-between">
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex flex-col bg-slate-100 p-5">
          <TaskStatusSection />
          <WorkflowSection />
        </div>
      </div>

      <ProfileCard />
    </div>
  );
}

export default App;
