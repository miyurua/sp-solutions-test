import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const TasksReturnedComponent = ({ title, numOfTasks, type }) => {
  return (
    <div className="flex flex-col items-center p-5 border rounded-xl w-full">
      <div className="flex flex-row items-center gap-5">
        {type === "incoming" ? (
          <FaArrowUp className="text-green-600" />
        ) : (
          <FaArrowDown className="text-blue-600" />
        )}
        <p className="text-xl font-semibold">{title}</p>
      </div>
      <p className="text-2xl">{numOfTasks}</p>
    </div>
  );
};

export default TasksReturnedComponent;
