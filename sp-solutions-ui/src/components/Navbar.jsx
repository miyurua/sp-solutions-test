import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  return (
    <div className="flex justify-between border-b-2 p-5">
      <p className="font-bold">
        <span className="text-red-700">SP</span> Solutions
      </p>
      <div className="flex flex-row items-center gap-5">
        <p className="flex flex-col items-center gap-2">
          <HomeIcon className="text-red-500" />
          Home
        </p>
        <p>Taskpad</p>
        <p>Scoreboard</p>
        <p>My Reports</p>
      </div>
    </div>
  );
};

export default Navbar;
