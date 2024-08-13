import "./App.css";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import TaskStatusSection from "./components/TaskStatusSection";

function App() {
  return (
    <div className="flex flex-row p-5 w-full justify-between">
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex flex-col bg-slate-100">
          <TaskStatusSection />
        </div>
      </div>

      <ProfileCard />
    </div>
  );
}

export default App;
