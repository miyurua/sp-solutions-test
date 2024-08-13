import { RxAvatar } from "react-icons/rx";
import { useState } from "react";
import Calendar from "react-calendar";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGoogledocs } from "react-icons/si";

import "react-calendar/dist/Calendar.css";
import TasksReturnedComponent from "./common/TasksReturnedComponent";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const ProfileCard = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col border-b-2 p-5">
        <div className="flex flex-row gap-5 items-center">
          <RxAvatar className="text-5xl" />
          <div className="flex flex-col">
            <p className="text-2xl">John Something</p>
            <p className="text-md">System manager</p>
          </div>
        </div>
        <div className="flex flex-col text-sm">
          <p className="flex flex-row gap-3 items-center">
            <MdEmail />
            jogn@gmail.com
          </p>
          <p className="flex flex-row gap-3 items-center">
            <BsFillTelephoneFill />
            092413234321
          </p>
        </div>
      </div>
      {/* My Reports Section */}
      <div className="flex flex-col gap-5 border-b-2 p-5">
        <p className="text-xl">My Reports</p>
        <div className="flex flex-row justify-between items-center text-5xl">
          <SiGoogledocs />
          <SiGoogledocs />
          <SiGoogledocs />
          <SiGoogledocs />
        </div>
      </div>
      <div className="flex border-b-2 p-5">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="flex flex-col items-center gap-5">
        <TasksReturnedComponent
          title={"Tasks Returned to Me"}
          type={"incoming"}
          numOfTasks={25}
        />
        <TasksReturnedComponent
          title={"Tasks Returned by Me"}
          type={"outgoing"}
          numOfTasks={44}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
