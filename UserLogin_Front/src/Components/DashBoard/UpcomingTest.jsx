const UpcomingTest = () => {
  const tests = [
    { subject: "DBMS130", time: "10-11 AM", room: "33-309" },
    { subject: "CS200", time: "11-12 AM", room: "38-719" },
    { subject: "MTH166", time: "01-02 PM", room: "33-309" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Upcoming Tests</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Time</th>
            <th className="py-2">Room No.</th>
            <th className="py-2">Subject</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{test.time}</td>
              <td className="py-2">{test.room}</td>
              <td className="py-2">{test.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingTest;
