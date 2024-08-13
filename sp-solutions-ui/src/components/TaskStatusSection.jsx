import TaskComponenet from "./common/TaskComponenet";

const TaskStatusSection = () => {
  return (
    <div className="flex flex-row gap-10 p-10 justify-between">
      <TaskComponenet
        title={"Task Inflow"}
        tasks={40}
        newtasks={25}
        returnTasks={26}
        borderColor={"border-b-green-500"}
      />
      <TaskComponenet
        title={"Task Outflow"}
        tasks={40}
        newtasks={25}
        returnTasks={26}
        borderColor={`border-b-red-500`}
      />
      <TaskComponenet
        title={"Task Pending"}
        tasks={45}
        newtasks={21}
        returnTasks={27}
        borderColor={"border-b-orange-500"}
      />
    </div>
  );
};

export default TaskStatusSection;
