import { CiUser } from "react-icons/ci";

const PersonalDetails = () => {
  return (
    <div className=" shadow-md rounded-xl p-4">
      {/* Personal details content */}
      <CiUser size={75} />
      <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
      <p>Name: Alex</p>
      <p>Course: BTech. Computer Science & Engineering</p>
      <p>DOB: 29-Feb-2020</p>
      <p>Contact: 1234567890</p>
      <p>Email: unknown@gmail.com</p>
      <p>Address: Ghost Town Road, New York, America</p>
    </div>
  );
};

export default PersonalDetails;
