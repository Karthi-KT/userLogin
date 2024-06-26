import { useRef } from "react";

const Registration = () => {
  const nameRef = useRef(null);
  const clgRef = useRef(null);
  const depRef = useRef(null);
  const yearRef = useRef(null);
  const mobRef = useRef(null);
  const mailRef = useRef(null);

  const studentData = (e) => {
    e.preventDefault(); // Prevent form submission

    const studentDetails = {
      Name: nameRef.current.value,
      College: clgRef.current.value,
      Department: depRef.current.value,
      Year: yearRef.current.value,
      Mobile: mobRef.current.value,
      Email: mailRef.current.value,
    };
    console.log(studentDetails);
  };

  return (
    <div className="flex justify-center items-center w-full h-full p-6">
      <form className="w-full max-w-md space-y-4" onSubmit={studentData}>
        <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>
        <div>
          <label
            htmlFor="userName"
            className="block text-sm font-medium  mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="userName"
            ref={nameRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="userCollege"
            className="block text-sm font-medium  mb-1"
          >
            College Name
          </label>
          <input
            type="text"
            id="userCollege"
            ref={clgRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="userDept"
            className="block text-sm font-medium  mb-1"
          >
            Department
          </label>
          <input
            type="text"
            id="userDept"
            ref={depRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="userYr"
            className="block text-sm font-medium  mb-1"
          >
            Year
          </label>
          <input
            type="text"
            id="userYr"
            ref={yearRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="userContact"
            className="block text-sm font-medium  mb-1"
          >
            Mobile
          </label>
          <input
            type="tel"
            id="userContact"
            ref={mobRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="userEmail"
            className="block text-sm font-medium  mb-1"
          >
            Email-Id
          </label>
          <input
            type="email"
            id="userEmail"
            ref={mailRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
