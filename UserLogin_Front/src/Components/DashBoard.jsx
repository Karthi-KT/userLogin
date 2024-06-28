// src/components/Dashboard.j
import PersonalDetails from "./DashBoard/PersonalDetails";
import Progress from "./DashBoard/Progress";
import UpcomingTest from "./DashBoard/UpcomingTest";
import Announcements from "./DashBoard/Announcements";
import Learning from "./DashBoard/Learning";

const Dashboard = () => {
  return (
    <div className="flex flex-row h-screen p-4 space-x-4">
      <div className="w-1/5  shadow-md rounded-xl p-4">
        <PersonalDetails />
      </div>
      <div className="w-3/5 flex flex-col space-y-4">
        <div className=" shadow-md rounded-xl p-4">
          <Progress />
        </div>
        <div className=" shadow-md rounded-xl p-4">
          <UpcomingTest />
        </div>
      </div>
      <div className="w-1/5 flex flex-col space-y-4">
        <div className=" shadow-md rounded-xl p-4">
          <Announcements />
        </div>
        <div className=" shadow-md rounded-xl p-4">
          <Learning />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
