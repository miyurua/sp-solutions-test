import { FaListCheck } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const TaskComponenet = ({
  title,
  tasks,
  newtasks,
  returnTasks,
  borderColor,
}) => {
  return (
    <div
      className={`flex flex-col border p-5 gap-5 rounded-lg min-w-[350px] bg-white border-b-8  ${borderColor}`}
    >
      <div className="flex flex-row items-center gap-5">
        {title === "Task Inflow" ? (
          <FaListCheck className="text-4xl text-green-500" />
        ) : title === "Task Outflow" ? (
          <FaListCheck className="text-4xl text-red-500" />
        ) : (
          <FaClock className="text-4xl text-orange-500" />
        )}
        <p className="text-2xl">{title}</p>
      </div>
      <div className="flex flex-row gap-10">
        <p className="text-4xl">{tasks}</p>
        <div className="flex flex-row">
          <div className="h-[40px] w-[2px] self-stretch bg-orange-300" />
          <div className="flex flex-col pl-3">
            <p className="text-xs text-slate-400">New</p>
            <p className="text-xl">{newtasks}</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="h-[40px] w-[2px] self-stretch bg-blue-600" />
          <div className="flex flex-col pl-3">
            <p className="text-xs text-slate-400">Return</p>
            <p className="text-xl">{returnTasks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskComponenet;
