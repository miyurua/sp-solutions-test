import { PieChart } from "react-minimal-pie-chart";

const WorkflowSection = () => {
  return (
    <div className="flex flex-col p-5 max-w-[500px] border rounded-lg bg-white gap-10">
      <p className="text-2xl ">Workflow Statistics</p>
      <div className="max-w-[300px] flex mx-auto">
        <PieChart
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
          ]}
        />
      </div>
    </div>
  );
};

export default WorkflowSection;
